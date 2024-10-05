// Import the googleapis library
const { google } = require("googleapis");

// Initialize the YouTube API client
const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY, // Access API key from environment variables
});

// Asynchronous function to fetch YouTube videos based on a topic
const getYouTubeVideos = async (topic) => {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      q: topic,
      maxResults: 10,
      type: "video",
      safeSearch: "moderate", // Optionally adjust search parameters
    });

    console.log("YouTube API response:", response.data);

    return response.data.items.map((item) => ({
      title: item.snippet.title,
      description: item.snippet.description,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return []; // Return an empty array in case of an error
  }
};

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { topic } = req.query;
      if (!topic) {
        return res.status(400).json({ message: "Topic is required" });
      }

      const videos = await getYouTubeVideos(topic);
      return res.status(200).json(videos);
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error("API handler error:", e);
    return res.status(500).json({ message: `Error occurred: ${e.message}` });
  }
}
