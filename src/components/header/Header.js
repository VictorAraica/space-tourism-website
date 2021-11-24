import React from "react";
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
  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <LogoStyled src={HeaderIcon} alt="header icon" />
        <LeftHeaderLineStyled />
      </LeftHeaderStyled>
      <NavStyled>
        <NavLink number={"00"} text="home" path="/" />
        <NavLink number={"01"} text="destination" path="/destination" />
        <NavLink number={"02"} text="crew" path="/crew" />
        <NavLink number={"03"} text="technology" path="/technology" />
      </NavStyled>
    </HeaderStyled>
  );
}
