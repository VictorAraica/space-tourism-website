import React from "react";
import { MainStyled } from "./HomeStyled";
import Description from "../../components/home/Description";
import Button from "../../components/home/Button";
import { PageStyled } from "../pageStyled";

import desktopBG from "../../assets/home/background-home-desktop.jpg";
import tabletBG from "../../assets/home/background-home-tablet.jpg";
import mobileBG from "../../assets/home/background-home-mobile.jpg";

const text = {
  subHeading: "so, you want to travel to",
  heading: "space",
  paragraph:
    "Let's face it; if you want to go to space, you might as well genuinly go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!",
};

export default function Home() {
  return (
    <PageStyled desktopBG={desktopBG} tabletBG={tabletBG} mobileBG={mobileBG}>
      <MainStyled>
        <Description
          subHeading={text.subHeading}
          heading={text.heading}
          paragraph={text.paragraph}
        />
        <Button />
      </MainStyled>
    </PageStyled>
  );
}
