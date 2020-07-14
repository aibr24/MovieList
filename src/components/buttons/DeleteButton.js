import React from "react";
// styles

import { UpdateButtonStyled } from "../../styles";
import movieStore from "../../store/MovieStore";

const DeleteButton = ({ movie }) => {
  return (
    <UpdateButtonStyled
      color="red"
      onClick={() => movieStore.deleteMovie(movie)}
    >
      Delete
    </UpdateButtonStyled>
  );
};

export default DeleteButton;
