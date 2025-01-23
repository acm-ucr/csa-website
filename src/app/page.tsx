import React from "react";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import EHTitle from "@/components/events/EventHighlightsTitle";
import MissionStatement from "@/components/home/MissionStatement";
import Carousel from "@/components/home/Carousel";

const Home = () => {
  return (
    <div className="bg-csa-tan-100 pt-[12.2vh] md:pt-[14.4vh]">
      <MissionStatement />
      <EHTitle />
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
      <Carousel />
    </div>
  );
};

export default Home;
