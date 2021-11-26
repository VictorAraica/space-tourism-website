import React from "react";
import { NavLinkStyled, NavLinkNumberStyled } from "./styled/HeaderStyled";

export default function NavLink({
  number,
  text,
  path,
  currentPath,
  setCurrentPath,
}) {
  return (
    <NavLinkStyled
      to={path}
      path={path}
      currentPath={currentPath}
      onClick={() => setCurrentPath(path)}
    >
      <NavLinkNumberStyled>{number}</NavLinkNumberStyled> {text}
    </NavLinkStyled>
  );
}
