import React, { useState } from "react";
import movieStore from "../store/MovieStore";
import { ProductImage } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const MovieItem = ({ movie }) => {

  return (
    <>
      <ProductImage>
        <p>{movie.name}</p>
        <UpdateButton movie={movie} updateMovie={movieStore.updateMovie} />
      </ProductImage>
    </>
  );
};

export default MovieItem;
