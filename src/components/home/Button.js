import React from "react";
import { ButtonStyled, ButtonContainer, ButtonTextStyled } from "./styled/ButtonStyled";

export default function Button() {
  return (
    <ButtonContainer>
      <ButtonStyled><ButtonTextStyled>Explore</ButtonTextStyled></ButtonStyled>
    </ButtonContainer>
  );
}
