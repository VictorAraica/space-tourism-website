import React from "react";
import { NavLinkStyled, NavLinkNumberStyled } from "./styled/HeaderStyled";

export default function NavLink({ number, text, currentPage }) {
  return (
    <NavLinkStyled text={text} currentPage={currentPage}>
      <NavLinkNumberStyled>{number}</NavLinkNumberStyled> {text}
    </NavLinkStyled>
  );
}
