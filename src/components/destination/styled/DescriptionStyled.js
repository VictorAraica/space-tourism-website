import styled from "styled-components";

export const DescriptionContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    width: 80%;
    align-items: center;
  }
`;

export const TitleStyled = styled.h1`
  font-family: "Bellefair";
  text-transform: uppercase;
  font-size: 100px;
  margin: 1.3rem 0;
`;

export const ParagraphStyled = styled.p`
  font-family: "Barlow";
  font-size: 18px;
  text-align: left;
  color: ${({ theme }) => theme.colors.lavender};
  line-height: 33px;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    font-size: 17px;
    line-height: 25px;
  }
`;

export const SeparatorBar = styled.div`
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  width: 100%;
`;
