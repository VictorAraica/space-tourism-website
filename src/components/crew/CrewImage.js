import React from "react";
import {
  ImageStyled,
  ImageContainerStyled,
  ImageBottomLine,
} from "./styled/ImageStyled";

export default function CrewImage({ image }) {
  return (
    <ImageContainerStyled>
      <ImageStyled src={image} />
      <ImageBottomLine />
    </ImageContainerStyled>
  );
}
