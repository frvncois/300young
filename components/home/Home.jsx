"use client";
// import { translate } from "@/jotai/jotaiManager";
// import { useAtom } from "jotai";
import React from "react";
import HeroSection from "./home-components/HeroSection";
import TheProject from "./home-components/TheProject";
import OurUnits from "./home-components/OurUnits";
import AboutUs from "./home-components/AboutUs";
import Advantages from "./home-components/Advantages";
import Aminities from "./home-components/Aminities";
import ContactUs from "./home-components/ContactUs";
import LocationLifeStyle from "./home-components/LocationLifeStyle";
import Spaces from "./home-components/Spaces"

function Home() {
  return (
    <>
      <HeroSection />
      <TheProject />
      <OurUnits />
      <Spaces />
      <Aminities />
      <LocationLifeStyle />
      <Advantages />
      <ContactUs />
      <AboutUs />
    </>
  );
}

export default Home;
