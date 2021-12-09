import React from "react";
import {
  DescriptionContainerStyled,
  SubtitleStyled,
  TitleStyled,
  ParagraphStyled,
} from "./styled/DescriptionStyled";

export default function Description({ title, paragraph }) {
  return (
    <DescriptionContainerStyled>
      <SubtitleStyled>The terminology...</SubtitleStyled>
      <TitleStyled>{title}</TitleStyled>
      <ParagraphStyled>{paragraph}</ParagraphStyled>
    </DescriptionContainerStyled>
  );
}
