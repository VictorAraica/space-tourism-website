import styled from "styled-components";

export const BottomDescriptionContainerStyled = styled.div`
  display: flex;
  gap: 3rem;
`;

export const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemTitleStyled = styled.h3`
  text-transform: uppercase;
  font-family: "Barlow Condensed";
  font-size: 16px;
  letter-spacing: 2.7px;
  color: ${({ theme }) => theme.colors.lavender};
  font-weight: 300;
`;

export const ItemTextStyled = styled.h3`
  text-transform: uppercase;
  font-family: Bellefair;
  font-size: 27px;
  font-weight: 300;
`;
