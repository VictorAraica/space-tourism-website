import styled from "styled-components";

export const MainStyled = styled.div`
  display: grid;
  width: 90%;
  margin: 4rem 0 0 auto;
  gap: 2rem;
  align-items: center;

  grid-template-areas:
    "sectionTitle sectionTitle sectionTitle"
    "nav          description  image";

  grid-template-columns: 1fr 4fr 4fr;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    flex-direction: column;
    margin: 4rem 0;
    width: 100%;
    gap: 4rem;
  }
`;
