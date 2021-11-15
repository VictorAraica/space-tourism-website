import React from "react";
import {
  DescriptionContainerStyled,
  HeadingStyled,
  SubHeadingStyled,
  ParagraphStyled,
} from "./styled/DescriptionStyled";

export default function Description({ heading, subHeading, paragraph }) {
  return (
    <DescriptionContainerStyled>
      <SubHeadingStyled>{subHeading}</SubHeadingStyled>
      <HeadingStyled>{heading}</HeadingStyled>
      <ParagraphStyled >{paragraph}</ParagraphStyled>
    </DescriptionContainerStyled>
  );
}
