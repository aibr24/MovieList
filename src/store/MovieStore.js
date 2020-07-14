import React from "react";
import { decorate, observable } from "mobx";
import movies from "../movies";
class MovieStore {
  movies = movies;

  //   //   updatefunction change watchedvalu to !wtchedvalu
  //   updateMovie = (updatedMovie) => {
  //     const movie = this.movie.watched
  //     // .find((movie) => movie.id === updatedMovie.id);
  //     !movie.watched;
  //   };
}

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();

export default movieStore;
