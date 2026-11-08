import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { moviesFromTMDB, moviesFromGPT } = useSelector((state) => state.gpt);

  if (!moviesFromTMDB?.length || !moviesFromGPT?.length) {
    return null;
  }

  return (
    <div className="relative z-10 mx-auto mt-10 w-full max-w-[1600px] px-4 md:px-10 pb-12">
      <div className="rounded-2xl border border-white/10 bg-linear-to-b from-gray-900/95 to-black/95 py-6 shadow-2xl backdrop-blur-md">
        <div className="px-6 mb-6">
          <p className="text-sm font-medium uppercase tracking-[3px] text-red-500 mb-2">
            AI Powered Recommendations
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Movies You'll Love
          </h1>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Based on your search:{" "}
            <span className="text-white font-medium">
              {moviesFromGPT.join(", ")}
            </span>
          </p>
        </div>

        {moviesFromGPT.map((movie, index) => (
          <MovieList
            key={`${movie}-${index}`}
            movies={moviesFromTMDB[index] ? [moviesFromTMDB[index]] : []}
            title={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
