import { GoogleGenAI } from "@google/genai";
import genAI from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptSearchResults } from "../utils/gptSlice";
import { useState, useRef } from "react";

const ai = new GoogleGenAI({
  apiKey: genAI.apiKey,
});

const GPTSearchBar = () => {
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query="${movie}"&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );

      const data = await response.json();

      console.log("TMDB Search Results:", data.results);

      return data.results;
    } catch (error) {
      console.error("TMDB API Error:", error);
      return [];
    }
  };

  const HandleGPTSearchClick = async () => {
    const query = searchInput.current.value;

    if (!query.trim() || loading) {
      return;
    }

    try {
      setLoading(true);

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `
          You are a movie recommendation assistant.

          Based on the user's input, provide exactly 5 movie titles.
          Respond with only the movie names.
          Do not provide descriptions.
          Do not number the movies.
          Comma separated.

          User query:
          ${query}
        `,
      });

      console.log("Gemini Response:", response.text);

      // Split the response text into an array of movie titles
      const GPTMovies = response.text
        .split(",")
        .map((title) => title.trim())
        .filter(Boolean);

      // Search for each movie in TMDB
      const TMDBResults = await Promise.all(
        GPTMovies.map((movie) => searchMovieTMDB(movie)),
      );

      console.log("TMDB Results:", TMDBResults);

      // dispatch(addGptSearchResults(TMDBResults.flat()));
      // dispatch(
      //   addGptSearchResults({
      //     moviesFromTMDB: TMDBResults.flat(),
      //     moviesFromGPT: GPTMovies,
      //   }),
      // );
      const recommendedMovies = TMDBResults.map(
        (results) => results?.[0],
      ).filter(Boolean);

      dispatch(
        addGptSearchResults({
          moviesFromTMDB: recommendedMovies,
          moviesFromGPT: GPTMovies,
        }),
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto pt-24 px-4">
      <form
        className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-gray-600 rounded-lg p-2 shadow-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          HandleGPTSearchClick();
        }}
      >
        <input
          type="text"
          ref={searchInput}
          disabled={loading}
          className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder:text-gray-400 text-base md:text-lg disabled:opacity-60"
          placeholder="What do you want to watch?"
        />

        <button
          className="bg-linear-to-r from-gray-600 to-gray-600 hover:from-gray-700 hover:to-gray-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 shadow-lg shadow-orange-500/20 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-30"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="relative flex items-center justify-center w-5 h-5">
                <span className="absolute w-5 h-5 border-2 border-white/30 rounded-full"></span>

                <span className="absolute w-5 h-5 border-2 border-transparent border-t-white rounded-full animate-spin"></span>

                <span className="text-[10px]">🎬</span>
              </span>

              <span>Finding...</span>
            </>
          ) : (
            <>
              <span>✨</span>
              <span className="-ml-2">Search</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
