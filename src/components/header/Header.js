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

export default function Header({ currentPage }) {
  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <LogoStyled src={HeaderIcon} alt="header icon" />
        <LeftHeaderLineStyled />
      </LeftHeaderStyled>
      <NavStyled>
        <NavLink number={"01"} text="home" currentPage={currentPage}/>
        <NavLink number={"01"} text="destination" currentPage={currentPage}/>
        <NavLink number={"02"} text="crew" currentPage={currentPage}/>
        <NavLink number={"03"} text="technology" currentPage={currentPage}/>
      </NavStyled>
    </HeaderStyled>
  );
}
