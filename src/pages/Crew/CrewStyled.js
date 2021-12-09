import styled from "styled-components";

export const MainStyled = styled.div`
  width: 80%;
  margin: 4rem auto 0 auto;
  align-content: start;

  display: grid;
  align-items: start;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sectionTitle image"
    "description image";
  max-height: fit-content;
  gap: 0 1%;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    display: grid;
    grid-template-areas:
      "sectionTitle"
      "image"
      "description";
    max-height: fit-content;
    grid-template-columns: auto;
    grid-template-rows: auto;
    width: 90%;
  }
`;
