import styled from "styled-components";
import { Link } from "react-router-dom";

console.log(window.location.pathname);

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 3fr 5fr;
  position: fixed;
  width: 100vw;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    grid-template-columns: 1fr 2fr;
    margin-top: 0;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.07);
  backdrop-filter: blur(15px);
`;

export const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Barlow Condensed", sans-serif;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 2.35px;
  border-bottom: ${({ path, currentPath }) =>
    path === currentPath
      ? "solid 3px white"
      : "solid 3px transparent"};
  border-top: solid 3px transparent;

  &:hover {
    border-bottom: ${({ path, currentPath }) =>
      path === currentPath
        ? "solid 3px white"
        : "solid 3px rgba(255, 255, 255, 0.6)"};
  }
`;

export const NavLinkNumberStyled = styled.span`
  padding-right: 0.6rem;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: none;
  }
`;

export const LogoStyled = styled.img`
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const LeftHeaderStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
`;

export const LeftHeaderLineStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;

  z-index: 10;

  position: relative;
  left: 5%;
  width: 100%;
  height: 1px;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: none;
  }
`;
