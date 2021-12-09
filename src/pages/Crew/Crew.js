import { useState } from "react";

import { PageStyled } from "../pageStyled";
import { MainStyled } from "./CrewStyled";

import SectionTitle from "../../components/SectionTitle";
import Description from "../../components/crew/Description";
import CrewImage from "../../components/crew/CrewImage";

import desktopBG from "../../assets/crew/background-crew-desktop.jpg";
import tabletBG from "../../assets/crew/background-crew-tablet.jpg";
import mobileBG from "../../assets/crew/background-crew-mobile.jpg";

import DouglasImage from "../../assets/crew/image-douglas-hurley.png";
import MarkImage from "../../assets/crew/image-mark-shuttleworth.png";
import VictorImage from "../../assets/crew/image-victor-glover.png";
import AnoushehImage from "../../assets/crew/image-anousheh-ansari.png";

const crew = [
  {
    name: "Douglas Hurley",
    position: "commander",
    description:
      "Dougles Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: DouglasImage,
  },
  {
    name: "Mark Shuttleworth",
    position: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linuc-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a sapce tourist.",
    image: MarkImage,
  },
  {
    name: "Victor Glover",
    position: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: VictorImage,
  },
  {
    name: "Anousheh Ansari",
    position: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Sysyems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: AnoushehImage,
  },
];

export default function Crew() {
  const [currentPerson, setCurrentPerson] = useState(0);
  return (
    <PageStyled
      stretch={true}
      desktopBG={desktopBG}
      tabletBG={tabletBG}
      mobileBG={mobileBG}
    >
      <MainStyled>
        <SectionTitle number={"02"} text={"meet your crew"} />
        <Description
          name={crew[currentPerson].name}
          description={crew[currentPerson].description}
          position={crew[currentPerson].position}
          crewLenght={crew.length}
          currentPerson={currentPerson}
          setCurrentPerson={setCurrentPerson}
        />
        <CrewImage image={crew[currentPerson].image} />
      </MainStyled>
    </PageStyled>
  );
}
