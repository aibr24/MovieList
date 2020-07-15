import React from "react";
import { UpdateButtonStyled } from "../../styles";
const UpdateButton = ({ updateMovie, movie }) => {
  return (
    <div>
      <button
        type="button"
        class="btn btn-info"
        onClick={() => updateMovie(movie)}
      >
        {movie.watched ? "Unwatched" : "Watched"}
      </button>
    </div>
  );
};
export default UpdateButton;
