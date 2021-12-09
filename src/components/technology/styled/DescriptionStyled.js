import styled from "styled-components";

export const DescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    align-items: center;
    padding: 0 1rem;
  }
`;

export const SubtitleStyled = styled.h3`
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 4.75px;
  color: ${({ theme }) => theme.colors.lavender};
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    font-size: 18px;
  }
`;

export const TitleStyled = styled.h1`
  font-family: Bellefair;
  font-size: 56px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
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
