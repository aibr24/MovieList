import React from "react";
import movieStore from "../store/MovieStore";
import { ProductImage } from "../styles";
import UpdateButton from "./buttons/UpdateButton";

const MovieItem = ({ movie }) => {
  const toggleWatch = () => {
    !movie.watched;
  };

  return (
    <>
      <ProductImage>
        <p>{movie.name}</p>
        <UpdateButton movie={movie} />
      </ProductImage>
    </>
  );
};

export default MovieItem;
