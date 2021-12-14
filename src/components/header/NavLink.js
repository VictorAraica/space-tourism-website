import React from "react";
import { NavLinkStyled, NavLinkNumberStyled } from "./styled/HeaderStyled";

export default function NavLink({
  number,
  text,
  path,
  currentpath,
  setCurrentPath,
}) {
  return (
    <NavLinkStyled
      to={path}
      path={path}
      currentpath={currentpath}
      onClick={() => setCurrentPath(path)}
    >
      <NavLinkNumberStyled>{number}</NavLinkNumberStyled> {text}
    </NavLinkStyled>
  );
}
