import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  //const mainMovie = movies?.[0];
  const mainMovie =
    Math.floor(Math.random() * movies.length) > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : movies[0];

  const { title, overview, id } = mainMovie || {};

  return (
    <div className="relative">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
