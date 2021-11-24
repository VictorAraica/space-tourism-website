import React from "react";
import { ImageContainerStyled, ImageStyled } from "./styled/ImageStyled";

export default function Image({ image }) {
  return (
    <ImageContainerStyled>
      <ImageStyled src={image} />
    </ImageContainerStyled>
  );
}
