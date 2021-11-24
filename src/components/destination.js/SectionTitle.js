import React from "react";
import {
  SectionTitleStyled,
  SectionTitleNumberStyled,
} from "./styled/SectionTitleStyled";

export default function SectionTitle({ number, text }) {
  return (
    <SectionTitleStyled>
      <SectionTitleNumberStyled>{number}</SectionTitleNumberStyled> {text}
    </SectionTitleStyled>
  );
}
