import React, { useState } from "react";

import { PageStyled } from "../pageStyled";
import { MainStyled } from "./TechnologyStyled";

import desktopBG from "../../assets/technology/background-technology-desktop.jpg";
import tabletBG from "../../assets/technology/background-technology-tablet.jpg";
import mobileBG from "../../assets/technology/background-technology-mobile.jpg";

import imageLaunchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import imageLaunchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";

import imageSpaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import imageSpaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";

import imageSpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import imageSpaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import SectionTitle from "../../components/SectionTitle";

import TecknologyNav from "../../components/technology/TechnologyNav";
import Description from "../../components/technology/Description";
import Image from "../../components/technology/Image";

const technologies = [
  {
    title: "Launch Vehicle",
    paragraph:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imageLandscape: imageLaunchVehicleLandscape,
    imagePortrait: imageLaunchVehiclePortrait,
  },
  {
    title: "Spaceport",
    paragraph:
      "A spaceport or cosmodrone is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    imageLandscape: imageSpaceCapsuleLandscape,
    imagePortrait: imageSpaceCapsulePortrait,
  },
  {
    title: "Space Capsule",
    paragraph:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imageLandscape: imageSpaceportLandscape,
    imagePortrait: imageSpaceportPortrait,
  },
];

export default function Technology() {
  const [currentTech, setCurrentTech] = useState(0);

  return (
    <PageStyled desktopBG={desktopBG} tabletBG={tabletBG} mobileBG={mobileBG}>
      <MainStyled>
        <SectionTitle number={"03"} text={"Space Launch 101"} />
        <Image
          landscape={technologies[currentTech].imageLandscape}
          portrait={technologies[currentTech].imagePortrait}
        />
        <TecknologyNav
          length={technologies.length}
          current={currentTech}
          setCurrent={setCurrentTech}
        />
        <Description
          title={technologies[currentTech].title}
          paragraph={technologies[currentTech].paragraph}
        />
      </MainStyled>
    </PageStyled>
  );
}
