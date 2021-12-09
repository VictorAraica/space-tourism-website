import styled from "styled-components";

export const ImageContainerStyled = styled.div`
  justify-content: center;
  grid-area: image;
  display: flex;
`;
export const LandscapeImageStyled = styled.img`
  display: none;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: block;
  }
`;

export const PortraitImageStyled = styled.img`
  max-width: 100%;
  max-height: 100%;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: none;
  }
`;
