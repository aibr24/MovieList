import React, { useState } from "react";
// data
import movieStore from "../store/MovieStore";

// libray
import { observer } from "mobx-react";
//component
import Searchbar from "./SearchBar";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase()) &&
        movie.watched === false
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const watchedList = movieStore.movies
    .filter(
      (movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase()) &&
        movie.watched === true
    )
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  return (
    <div className="row">
      <div>
        <Searchbar setQuery={setQuery} />
        {movieList}
      </div>
      <div>
        <Searchbar setQuery={setQuery} />
        {watchedList}
      </div>
    </div>
  );
};
export default observer(MovieList);
