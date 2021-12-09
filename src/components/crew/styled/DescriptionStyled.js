import styled from "styled-components";

export const DescriptionContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-area: description;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 4rem;
    margin-top: 6rem;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    margin-top: 3rem;
    display: grid;
    grid-template-areas:
      "nav"
      "position"
      "name"
      "description";
  }
`;

export const PositionStyled = styled.h2`
  font-family: "Bellefair";
  font-size: 35px;
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);

  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    text-align: center;
    font-size: 30px;
  }
`;

export const NameStyled = styled.h1`
  font-family: "Bellefair";
  font-size: 55px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    text-align: center;
    font-size: 45px;
  }
`;

export const ParagraphStyled = styled.p`
  font-family: "Barlow Condensed";
  font-size: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.lavender};
  max-width: 450px;
  line-height: 33px;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    font-size: 17px;
    line-height: 25px;
  }
`;
