import styled from "styled-components";

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  margin: 12rem auto 0 auto;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    margin-top: 3.5rem;
  }
`;
