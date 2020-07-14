import React, { useState } from "react";
import movieStore from "../store/MovieStore";
import { ProductImage } from "../styles";
import UpdateButton from "./buttons/UpdateButton";
import DeleteButton from "./buttons/DeleteButton";

const MovieItem = ({ movie }) => {
  return (
    <>
      <ProductImage>
        <p>{movie.name}</p>
        <DeleteButton movie={movie.name} deleteMovie={movieStore.deleteMovie} />
        <UpdateButton movie={movie} updateMovie={movieStore.updateMovie} />
      </ProductImage>
    </>
  );
};

export default MovieItem;
