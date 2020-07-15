import React from "react";
// styles

import { UpdateButtonStyled } from "../../styles";
import movieStore from "../../store/MovieStore";

const DeleteButton = ({ movie }) => {
  return (
    <button
      type="button"
      class="btn btn-danger"
      onClick={() => movieStore.deleteMovie(movie)}
    >
      Danger
    </button>
  );
};

export default DeleteButton;
