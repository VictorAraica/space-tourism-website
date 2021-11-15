import styled from "styled-components";

export const DescriptionContainerStyled = styled.div`
  margin-top: 15rem;
  position: relative;
  max-width: min-content;
  cursor: default;
`;

export const HeadingStyled = styled.h1`
  font-family: "Bellefair";
  text-transform: uppercase;
  font-size: 150px;
  margin-bottom: 1.5rem;
`;
export const SubHeadingStyled = styled.h3`
  font-family: "Barlow Condensed";
  text-transform: uppercase;
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 4.75px;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.lavender};
`;
export const ParagraphStyled = styled.p`
  font-family: "Barlow";
  font-size: 18px;
  text-align: left;
  color: ${({ theme }) => theme.colors.lavender};
`;
