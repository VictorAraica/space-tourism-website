import React from "react";
import BottomDescription from "./BottomDescription";
import Nav from "./Nav";
import {
  DescriptionContainerStyled,
  TitleStyled,
  ParagraphStyled,
  SeparatorBar,
} from "./styled/DescriptionStyled";

export default function Description({ destination, dispatch }) {
  return (
    <DescriptionContainerStyled>
      <Nav dispatch={dispatch} currentDestination={destination.title} />
      <TitleStyled>{destination.title}</TitleStyled>
      <ParagraphStyled>{destination.description}</ParagraphStyled>
      <SeparatorBar />

      <BottomDescription
        distance={destination.distance}
        time={destination.time}
      />
    </DescriptionContainerStyled>
  );
}
