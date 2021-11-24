import React from "react";
import { NavLinkStyled, NavLinkNumberStyled } from "./styled/HeaderStyled";

export default function NavLink({ number, text, path }) {
  return (
    <NavLinkStyled to={path} path={path}>
      <NavLinkNumberStyled>{number}</NavLinkNumberStyled> {text}
    </NavLinkStyled>
  );
}
