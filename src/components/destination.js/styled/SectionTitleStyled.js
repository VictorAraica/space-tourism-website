import styled from "styled-components";

export const SectionTitleStyled = styled.h2`
  text-transform: uppercase;
  font-family: "Barlow Condensed";
  font-size: 28px;
  letter-spacing: 4.75px;
  font-weight: 300;

  grid-area: sectionTitle;
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    margin-bottom: 0;
    align-self: start;
    margin-left: 2rem;
  }
`;

export const SectionTitleNumberStyled = styled.span`
  font-weight: 700;
  opacity: 0.28;
`;
