import styled from "styled-components";

export const NavContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 0rem;
  justify-self: start;
  grid-area: nav;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    flex-direction: row;
    justify-self: center;
    gap: 1rem;
  }
`;

export const NavButtonStyled = styled.button`
  width: 6rem;
  height: 6rem;
  background-color: ${({ current, self }) =>
    current === self ? "white" : "transparent"};
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  font-family: bellefair;
  font-size: 32px;
  color: ${({ current, self }) => (current === self ? "black" : "white")};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 29px;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    width: 4rem;
    height: 4rem;
    font-size: 26px;
  }

  &:hover {
    border-color: white;
  }
`;
