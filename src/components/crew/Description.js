import React from "react";
import CrewNav from "./CrewNav";
import {
  DescriptionContainerStyled,
  NameStyled,
  ParagraphStyled,
  PositionStyled,
} from "./styled/DescriptionStyled";

export default function Description({
  position,
  name,
  description,
  crewLenght,
  currentPerson,
  setCurrentPerson,
}) {
  return (
    <DescriptionContainerStyled>
      <PositionStyled>{position}</PositionStyled>
      <NameStyled>{name}</NameStyled>
      <ParagraphStyled>{description}</ParagraphStyled>
      <CrewNav
        crewLenght={crewLenght}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
      />
    </DescriptionContainerStyled>
  );
}
