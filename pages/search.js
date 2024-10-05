import SearchAndDisplay from "../components/SearchAndDisplay";
import fetch from "isomorphic-unfetch"; // if you need SSR safe fetching

const SearchPage = () => {
  const getYouTubeVideos = async (topic) => {
    // Fetch data from your API or directly from external APIs
    const res = await fetch(`/api/youtube?topic=${encodeURIComponent(topic)}`);
    const data = await res.json();
    return data;
  };

  return (
    <div>
      <h1>Find Resources on Your Topic</h1>
      <SearchAndDisplay getYouTubeVideos={getYouTubeVideos} />
    </div>
  );
};

export default SearchPage;
