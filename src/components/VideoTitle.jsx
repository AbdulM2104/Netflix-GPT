import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex items-center bg-linear-to-r from-black via-black/70 to-transparent">
      <div className="w-full md:w-1/2 px-6 md:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {title}
        </h1>

        <p className="mt-5 text-sm md:text-lg leading-relaxed text-gray-200 line-clamp-3">
          {overview}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            <FaPlay />
            Play
          </button>

          <button className="flex items-center gap-2 bg-gray-500/60 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-500/80 transition">
            <IoInformationCircleOutline size={22} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
