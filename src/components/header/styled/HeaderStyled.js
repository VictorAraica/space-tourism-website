import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 3fr 5fr;
  position: absolute;
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
  background-color: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(15px);

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    position: fixed;
    width: 70%;
    z-index: 10;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2rem;
    right: 0;
    padding-left: 10%;
    padding-top: 8rem;
    transition: transform 1s;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
  }
`;

export const CloseButtonStyled = styled(MdClose)`
  display: none;
  color: "#D0D6F9";
  font-size: "2rem";
  cursor: pointer;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    display: block;
  }
`;

export const BurgerButtonStyled = styled(GiHamburgerMenu)`
  display: none;
  color: "#D0D6F9";
  font-size: "2rem";
  align-self: center;
  justify-self: end;
  margin-right: 2rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    display: block;
  }
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
  border-bottom: ${({ path, currentpath }) =>
    path === currentpath ? "solid 3px white" : "solid 3px transparent"};
  border-top: solid 3px transparent;

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    height: auto;
    border: none;
    font-size: 22px;
  }

  &:hover {
    @media (min-width: ${({ theme }) => theme.windowSizes.phone}) {
      border-bottom: ${({ path, currentpath }) =>
        path === currentpath
          ? "solid 3px white"
          : "solid 3px rgba(255, 255, 255, 0.6)"};
    }
  }
`;

export const NavLinkNumberStyled = styled.span`
  padding-right: 0.6rem;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    display: block;
  }
`;

export const LogoStyled = styled.img`
  margin-top: 1.5rem;
  margin-left: 3rem;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    margin-left: 1rem;
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
  background-color: rgba(255, 255, 255, 0.5);
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
