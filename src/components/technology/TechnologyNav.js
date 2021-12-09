import React from "react";
import {
  NavContainerStyled,
  NavButtonStyled,
} from "./styled/TechnlogyNavStyled";

export default function TechnologyNav({ length, current, setCurrent }) {
  return (
    <NavContainerStyled>
      {[...Array(length)].map((_, i) => (
        <NavButtonStyled key={i} current={current} self={i} onClick={() => setCurrent(i)}>{i + 1}</NavButtonStyled>
      ))}
    </NavContainerStyled>
  );
}
