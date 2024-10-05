import React, { useState } from "react";
import VideoCard from "./VideoCard"; // Assumes you have this component for displaying videos

const SearchAndDisplay = ({ getYouTubeVideos }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setError("");
    try {
      const results = await getYouTubeVideos(searchTerm);
      setVideos(results);
    } catch (e) {
      setError("Failed to fetch videos");
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a topic..."
      />
      <button onClick={handleSearch}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {videos.map((video) => (
          <VideoCard key={video.url} video={video} />
        ))}
      </div>
    </div>
  );
};

export default SearchAndDisplay;
