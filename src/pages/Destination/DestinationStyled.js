import styled from "styled-components";

export const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "sectionTitle sectionTitle"
    "image description";
  width: 80%;
  margin: 4rem auto 0 auto;

  gap: 0 12%;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin-top: 3rem;
    width: 100%;
  }
`;
