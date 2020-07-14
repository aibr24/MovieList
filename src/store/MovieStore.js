import React from "react";
import { decorate, observable } from "mobx";
import movies from "../movies";
class MovieStore {

  movies = movies;
  createMovie = (newMovie) => {
    const addedMovie = {
      id: 5,
      name: newMovie,
      watched: false,
    }
    this.movies.push(addedMovie);
    console.log(movies);
  }
  updateMovie = (updatedMovie) => {
    const movie = this.movies
      .find((movie) => movie.id === updatedMovie.id);

    movie.watched = !updatedMovie.watched;
  };
}

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();

export default movieStore;
