import React, { useEffect } from "react";
import HeroSection from "./components/ServiceSection";
import { useGlobalContext } from "./context";
import ServiceSection from "./components/ServiceSection";

const Service = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <ServiceSection />;
};

export default Service;
