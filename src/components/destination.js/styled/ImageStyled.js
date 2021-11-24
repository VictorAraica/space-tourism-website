import styled from "styled-components";

export const ImageContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: image;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    justify-content: center;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  max-width: 500px;
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    width: 80%;
  }
`;
