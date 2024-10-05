const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getCompletion = async (prompt) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo", // Change model to GPT-4
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 150, // Adjust token limit if necessary
  });

  return response.data.choices[0].message.content.trim();
};

module.exports = { getCompletion };
