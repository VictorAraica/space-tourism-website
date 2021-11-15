import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const ButtonStyled = styled.a`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};

  font-size: 30px;
  font-family: "Bellefair";
  letter-spacing: 2px;
  text-transform: uppercase;

  width: min-content;

  position: absolute;
  bottom: 0;
  right: 0;

  aspect-ratio: 1 / 1;
  padding: 3rem;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  overflow: visible;

  &:before {
    content: "";
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: rgba(255, 255, 255, 0.25);
    position: absolute;

    border-radius: 100%;
    transition: all;
    transition-duration: 0.5s;
  }

  &:hover:before {
    transform: scale(1.5);
  }
`;

export const ButtonTextStyled = styled.span`
  z-index: 5;
`;
