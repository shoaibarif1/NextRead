import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="border rounded shadow-lg p-4 m-2 bg-white hover:bg-gray-100 transition duration-200">
      <h3 className="text-lg font-bold mb-2">{video.title}</h3>
      <p className="text-gray-700 text-sm mb-2">{video.description}</p>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Watch on YouTube
      </a>
    </div>
  );
};

export default VideoCard;
