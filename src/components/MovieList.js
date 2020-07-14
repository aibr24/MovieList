import React, { useState } from "react";
// data
import movieStore from "../store/MovieStore";

// libray
import { observer } from "mobx-react";
//component
import Searchbar from "./SearchBar";
import MovieItem from "./MovieItem";

const MovieList = () => {
  let newMovie = "";
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
    .map((movie) => <MovieItem movie={movie} key={movie.name} />);

  return (
    <div className="row" >
      <input onChange={(event) => newMovie = event.target.value} />
      <button onClick={() => movieStore.createMovie(newMovie)}></button>
      <div align="center">
        <Searchbar setQuery={setQuery} />
        <h4>WatchList</h4>
        {movieList}
      </div>
      <div align="center">
        <Searchbar setQuery={setQuery} />
        <h4>Watched</h4>
        {watchedList}
      </div>
    </div>
  );
};
export default observer(MovieList);
