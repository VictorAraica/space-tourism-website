import React from "react";
import {
  BottomDescriptionContainerStyled,
} from "./styled/BottomDescriptionStyled";
import BottomDescriptionItem from "./BottomDescriptionItem"


export default function BottomDescription({ distance, time }) {
  return (
    <BottomDescriptionContainerStyled>
      <BottomDescriptionItem title="avg. distance" text={distance} />
      <BottomDescriptionItem title="est. travel time" text={time} />
    </BottomDescriptionContainerStyled>
  );
}
