import React from "react";
import XinDescription from "@/components/home/XinDescription";
import EHTitle from "@/components/events/EventHighlightsTitle";
import CarouselOne from "@/components/home/CarouselOne";
import Landing from "@/components/home/Landing";
import Quotes from "@/components/home/Quote";

const Page = () => {
  return (
    <div className="bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Landing />
      <XinDescription />
      <CarouselOne />
      <Quotes />
      <EHTitle />
      <Quotes />
    </div>
  );
};

export default Page;
