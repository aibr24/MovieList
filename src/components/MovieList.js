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
    <div className="container">
      <input onChange={(event) => (newMovie = event.target.value)} />
      <button
        type="button"
        class="btn btn-dark"
        onClick={() => movieStore.createMovie(newMovie)}
      >
        add
      </button>
      <div className="container-fluid">
        <div>
          <Searchbar setQuery={setQuery} />
          <div className="list-group ">
            <h4 className="list-group-item active">
              WatchList
              <span className="badge badge-primary badge-pill">
                {movieList.length}
              </span>
            </h4>

            {movieList}
          </div>
          <div className="list-group">
            <Searchbar setQuery={setQuery} />
            <h4>
              Watched
              <span className="badge badge-primary badge-pill">
                {watchedList.length}
              </span>
            </h4>
            {watchedList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(MovieList);
