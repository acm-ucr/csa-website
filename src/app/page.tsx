import React from "react";
import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";
import Landing from "@/components/home/Landing";
import Quotes from "@/components/home/Quote";

const Home = () => {
  return (
    <div className="bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Landing />
      <XinDescription />
      <EHTitle />
      <Quotes />
    </div>
  );
};

export default Home;
