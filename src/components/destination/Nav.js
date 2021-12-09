import React from "react";
import { NavStyled, NavLinkStyled } from "./styled/NavStyled";

export default function Nav({ currentDestination, dispatch }) {
  return (
    <NavStyled>
      <NavLinkStyled
        active={"moon" === currentDestination}
        onClick={() => dispatch({ type: "MOON" })}
      >
        Moon
      </NavLinkStyled>
      <NavLinkStyled
        active={"mars" === currentDestination}
        onClick={() => dispatch({ type: "MARS" })}
      >
        Mars
      </NavLinkStyled>
      <NavLinkStyled
        active={"europa" === currentDestination}
        onClick={() => dispatch({ type: "EUROPA" })}
      >
        Europa
      </NavLinkStyled>
      <NavLinkStyled
        active={"titan" === currentDestination}
        onClick={() => dispatch({ type: "TITAN" })}
      >
        Titan
      </NavLinkStyled>
    </NavStyled>
  );
}
