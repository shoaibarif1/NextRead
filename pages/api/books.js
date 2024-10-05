import { getCompletion } from "@/openAiServices";

const generatePromptByTopic = (topic) => {
  return `
    Generate a list of 5 book suggestions about ${topic}. 
    Include the title and author in a valid JSON array format.
    Ensure the JSON is properly formatted and complete.
    Sample output JSON:
    [{"title": "The White Tiger", "author": "Aravind Adiga"}, {"title": "A House For Mr. Biswas", "author": "V. S. Naipaul"}]
    
    Answer:
  `;
};

const tryParseJSON = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);
    return { parsed, error: null };
  } catch (error) {
    return { parsed: null, error };
  }
};

const fixIncompleteJSON = (jsonString) => {
  // Try to close the JSON array if it's incomplete
  let fixedJsonString = jsonString.trim();

  if (fixedJsonString.endsWith(",")) {
    fixedJsonString = fixedJsonString.slice(0, -1); // Remove trailing comma
  }

  if (!fixedJsonString.endsWith("]")) {
    fixedJsonString += "]}";
  } else if (!fixedJsonString.endsWith("}")) {
    fixedJsonString += "}";
  }

  // Attempt to balance the braces
  const openBrackets = fixedJsonString.split("{").length - 1;
  const closeBrackets = fixedJsonString.split("}").length - 1;

  const openBraces = fixedJsonString.split("[").length - 1;
  const closeBraces = fixedJsonString.split("]").length - 1;

  // Add missing closing braces and brackets
  fixedJsonString += "}".repeat(openBrackets - closeBrackets);
  fixedJsonString += "]".repeat(openBraces - closeBraces);

  return fixedJsonString;
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { topic } = req.query;

  try {
    if (!topic) {
      throw new Error("Topic query parameter is missing");
    }

    const prompt = generatePromptByTopic(topic);
    console.log(`Generated prompt: ${prompt}`);

    const result = await getCompletion(prompt);
    console.log(`OpenAI result: ${result}`);

    // Clean the response to remove leading/trailing markdown code blocks
    const cleanedResult = result.replace(/```json|```/g, "").trim();

    // Try to parse the cleaned result
    let { parsed: books, error } = tryParseJSON(cleanedResult);

    // If parsing failed, try to fix the JSON
    if (error) {
      console.error(`Initial parse failed: ${error.message}`);

      const fixedResult = fixIncompleteJSON(cleanedResult);
      console.log(`Attempting to fix JSON: ${fixedResult}`);

      ({ parsed: books, error } = tryParseJSON(fixedResult));

      if (error) {
        console.error(`Failed to parse OpenAI response: ${cleanedResult}`);
        throw new Error(`Failed to parse OpenAI response: ${cleanedResult}`);
      }
    }

    // Ensure the parsed JSON is an array
    if (!Array.isArray(books)) {
      throw new Error(`Parsed result is not an array: ${cleanedResult}`);
    }

    console.log(`Parsed books: ${JSON.stringify(books)}`);
    res.status(200).json(books);
  } catch (error) {
    console.error(
      "Error fetching book suggestions:",
      error.message,
      error.stack
    );
    res.status(500).json({ message: `Error occurred: ${error.message}` });
  }
}
