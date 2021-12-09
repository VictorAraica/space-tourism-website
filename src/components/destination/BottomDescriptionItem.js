import React from "react";
import {
  ItemStyled,
  ItemTitleStyled,
  ItemTextStyled,
} from "./styled/BottomDescriptionStyled";

export default function BottomDescriptionItem({ title, text }) {
  return (
    <ItemStyled>
      <ItemTitleStyled>{title}</ItemTitleStyled>
      <ItemTextStyled>{text}</ItemTextStyled>
    </ItemStyled>
  );
}
