import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Suggestions from "@/components/Suggestions"; // Ensure correct import
import VideoCard from "@/components/VideoCard"; // Ensure correct import
import { useState } from "react";
import Intro from "@/components/Intro";
import fetch from "isomorphic-unfetch"; // Use the built-in fetch in Next.js

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getYouTubeVideos = async (topic) => {
    const res = await fetch(`/api/youtube?topic=${encodeURIComponent(topic)}`);
    const data = await res.json();
    console.log("YouTube videos:", data); // Debugging log
    return data;
  };

  const getBookSuggestions = async (topic) => {
    try {
      const res = await fetch(`/api/books?topic=${encodeURIComponent(topic)}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch book suggestions: ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Book suggestions:", data); // Debugging log
      return data;
    } catch (error) {
      console.error("Error fetching book suggestions:", error);
      return [];
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setError("");
    try {
      const [videoResults, bookResults] = await Promise.all([
        getYouTubeVideos(searchTerm),
        getBookSuggestions(searchTerm),
      ]);
      console.log("Video results:", videoResults); // Debugging log
      console.log("Book results:", bookResults); // Debugging log
      setVideos(videoResults);
      setSuggestions(bookResults);
    } catch (e) {
      setError("Failed to fetch results");
      setVideos([]);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={"bg-mauve-gradient"}>
      <Head>
        <title>NEXT READ</title>
      </Head>
      <div className={"flex-grow"}>
        <Header />
        <div className={"pt-40 h-[calc(100vh-65px)] overflow-auto"}>
          <div className={"max-w-5xl mx-auto"}>
            <div
              className={
                "grid grid-cols-1 lg:grid-cols-3 lg:gap-4 px-4 lg:px-0"
              }
            >
              <div className={"col-span-1 lg:col-span-3"}>
                {/* Search form */}
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter a topic to search books and videos..."
                  className="p-2 border rounded mb-2 w-full"
                />
                <button
                  onClick={handleSearch}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Search
                </button>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className={"col-span-1 lg:col-span-3"}>
                {/* Suggestions section */}
                {suggestions.length > 0 ? (
                  <Suggestions suggestions={suggestions} />
                ) : (
                  <Intro />
                )}
              </div>
              <div className={"col-span-1 lg:col-span-3"}>
                {/* Videos section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {videos.map((video) => (
                    <VideoCard key={video.url} video={video} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
