import React from "react";
import { UpdateButtonStyled } from "../../styles";
const UpdateButton = ({ updateMovie, movie }) => {
  return (
    <div>
      <UpdateButtonStyled onClick={() => updateMovie(movie)}>{movie.watched ? "Unwatched" : "Watched"}</UpdateButtonStyled>

    </div>
  );
};
export default UpdateButton;
