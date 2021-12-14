import React, { useState } from "react";
import {
  HeaderStyled,
  NavStyled,
  LogoStyled,
  LeftHeaderStyled,
  LeftHeaderLineStyled,
  BurgerButtonStyled,
  CloseButtonStyled,
} from "./styled/HeaderStyled";
import NavLink from "./NavLink";
import HeaderIcon from "../../assets/shared/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [currentpath, setCurrentPath] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);

  return (
    <HeaderStyled>
      <LeftHeaderStyled>
        <Link to="/" onClick={() => setCurrentPath("/")}>
          <LogoStyled src={HeaderIcon} alt="header icon" />
        </Link>
        <LeftHeaderLineStyled />
      </LeftHeaderStyled>
      <NavStyled open={open}>
        <NavLink
          number={"00"}
          text="home"
          path="/"
          currentpath={currentpath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"01"}
          text="destination"
          path="/destination"
          currentpath={currentpath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"02"}
          text="crew"
          path="/crew"
          currentpath={currentpath}
          setCurrentPath={setCurrentPath}
        />
        <NavLink
          number={"03"}
          text="technology"
          path="/technology"
          currentpath={currentpath}
          setCurrentPath={setCurrentPath}
        />
        <CloseButtonStyled
          color="#D0D6F9"
          style={{ fontSize: "2.5rem" }}
          onClick={() => {
            console.log(open);
            setOpen(!open);
          }}
        />
      </NavStyled>
      <BurgerButtonStyled
        style={{ fontSize: "2rem" }}
        color="#D0D6F9"
        onClick={() => {
          console.log(open);
          setOpen(!open);
        }}
      />
    </HeaderStyled>
  );
}
