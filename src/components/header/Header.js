import React, { useState } from "react";
import {
  HeaderStyled,
  NavStyled,
  LogoStyled,
  LeftHeaderStyled,
  LeftHeaderLineStyled,
} from "./styled/HeaderStyled";
import NavLink from "./NavLink";
import HeaderIcon from "../../assets/shared/logo.svg";

export default function Header({ currentPage, setCurrentPage }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <LogoStyled src={HeaderIcon} alt="header icon" />
        <LeftHeaderLineStyled />
      </LeftHeaderStyled>
      <NavStyled>
        <NavLink
          number={"00"}
          text="home"
          path="/"
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"01"}
          text="destination"
          path="/destination"
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"02"}
          text="crew"
          path="/crew"
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"03"}
          text="technology"
          path="/technology"
          currentPath={currentPath}
          setCurrentPath={setCurrentPath}
        />
      </NavStyled>
    </HeaderStyled>
  );
}
