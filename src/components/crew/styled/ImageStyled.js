import styled from "styled-components";

export const ImageStyled = styled.img`
  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    max-width: 280px;
  }
`;
export const ImageContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  grid-area: image;
  align-self: end;
  justify-content: end;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    margin-top: 3rem;
    flex-direction: column;
  }
`;

export const ImageBottomLine = styled.div`
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  display: none;

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    display: block;
  }
`;
