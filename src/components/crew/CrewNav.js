import React from "react";

import { CrewNavStyled, DotStyled } from "./styled/CrewNavStyled";

export default function CrewNav({
  crewLenght,
  currentPerson,
  setCurrentPerson,
}) {
  return (
    <CrewNavStyled>
      {[...Array(crewLenght)].map((_, i) => (
        <DotStyled
          current={currentPerson}
          self={i}
          onClick={() => setCurrentPerson(i)}
          key={i}
        />
      ))}
    </CrewNavStyled>
  );
}
