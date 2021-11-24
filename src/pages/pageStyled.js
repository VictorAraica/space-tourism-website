import styled from "styled-components";

export const PageStyled = styled.div`
  min-height: 100vh;
  background-attachment: fixed;
  background-image: url(${({ desktopBG }) => desktopBG});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding-top: 10rem;

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}) {
    background-image: url(${({ tabletBG }) => tabletBG});
    padding-top: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.windowSizes.phone}) {
    background-image: url(${({ mobileBG }) => mobileBG});
  }
`;
