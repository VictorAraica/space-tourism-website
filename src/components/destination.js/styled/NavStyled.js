import styled from "styled-components";

export const NavStyled = styled.div`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.lavender};
`;

export const NavLinkStyled = styled.a`
  font-family: "Barlow Condensed";
  font-size: 18px;
  letter-spacing: 2.7px;
  cursor: pointer;
  padding: 1rem 0;
  color: ${({ active }) => (active ? "rgba(255, 255, 255)" : "inherit")};
  border-bottom: ${({ active }) =>
    active
      ? "solid 3px rgba(255, 255, 255)"
      : "solid 3px rgba(255, 255, 255, 0)"};

  text-transform: uppercase;

  &:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.6);
  }
`;
