import React from "react";
import { Image_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 h-72 m-2 bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={Image_URL + movie.poster_path} alt={movie.title} />
    </div>
  );
};

export default MovieCard;
