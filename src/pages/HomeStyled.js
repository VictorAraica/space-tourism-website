import styled from "styled-components";

import homeBackgroundDesktop from "../assets/home/background-home-desktop.jpg";
import homeBackgroundTablet from "../assets/home/background-home-tablet.jpg";
import homeBackgroundMobile from "../assets/home/background-home-mobile.jpg";

export const HomeStyled = styled.div`
  min-height: 100vh;
  background-attachment: fixed;
  background-image: url(${homeBackgroundDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding-top: 10rem;

  @media (max-width: 768px) {
    background-image: url(${homeBackgroundTablet});
  }

  @media (max-width: 375px) {
    background-image: url(${homeBackgroundMobile});
  }
`;

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: auto;

`;
