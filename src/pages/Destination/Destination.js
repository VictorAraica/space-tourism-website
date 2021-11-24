import React, { useReducer } from "react";

import { PageStyled } from "../pageStyled";
import { MainStyled } from "./DestinationStyled";

import desktopBG from "../../assets/destination/background-destination-desktop.jpg";
import tabletBG from "../../assets/destination/background-destination-tablet.jpg";
import mobileBG from "../../assets/destination/background-destination-mobile.jpg";

import imageEuropa from "../../assets/destination/image-europa.png";
import imageMars from "../../assets/destination/image-mars.png";
import imageMoon from "../../assets/destination/image-moon.png";
import imageTitan from "../../assets/destination/image-titan.png";

import SectionTitle from "../../components/destination.js/SectionTitle";
import Image from "../../components/destination.js/Image";
import Description from "../../components/destination.js/Description";

const destinations = {
  moon: {
    title: "moon",
    image: imageMoon,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
    distance: "384,00 KM",
    time: "3 DAYS",
  },
  mars: {
    title: "mars",
    image: imageMars,
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Moons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    time: "9 MONTHS",
  },
  europa: {
    title: "europa",
    image: imageEuropa,
    description:
      "The smalles of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple ralaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    time: "3 YEARS",
  },
  titan: {
    title: "titan",
    image: imageTitan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
    distance: "1.6 BIL. KM",
    time: "7 YEARS",
  },
};

const destinationReducer = (state = destinations.moon, action = {}) => {
  if (action.type === "MOON") {
    return destinations.moon;
  } else if (action.type === "MARS") {
    return destinations.mars;
  } else if (action.type === "EUROPA") {
    return destinations.europa;
  } else if (action.type === "TITAN") {
    return destinations.titan;
  }

  return state;
};

export default function Destination() {
  const [currentDestination, dispatch] = useReducer(
    destinationReducer,
    destinationReducer()
  );

  return (
    <PageStyled desktopBG={desktopBG} tabletBG={tabletBG} mobileBG={mobileBG}>
      <MainStyled>
        <SectionTitle number={"01"} text={"pick your destination"} />
        <Image image={currentDestination.image} />
        <Description destination={currentDestination} dispatch={dispatch} />
      </MainStyled>
    </PageStyled>
  );
}
