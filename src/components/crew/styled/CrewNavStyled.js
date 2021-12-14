import styled from "styled-components";

export const CrewNavStyled = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    position: relative;
    bottom: auto;
    margin-top: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    grid-area: nav;
    justify-self: center;
    margin-bottom: 2rem;
    margin-top: 0rem;
  }
`;

export const DotStyled = styled.a`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ current, self }) =>
    current === self ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.5)"};
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ current, self }) =>
      current === self ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0.7)"};
  }
`;
