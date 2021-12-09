import React from "react";
import {
  ImageContainerStyled,
  LandscapeImageStyled,
  PortraitImageStyled,
} from "./styled/ImageStyled";

export default function Image({ landscape, portrait }) {
  return (
    <ImageContainerStyled>
      <LandscapeImageStyled src={landscape} />
      <PortraitImageStyled src={portrait} />
    </ImageContainerStyled>
  );
}
