import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-70 z-10 relative">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
