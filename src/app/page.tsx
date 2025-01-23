import React from "react";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import EHTitle from "@/components/events/EventHighlightsTitle";
import MissionStatement from "@/components/home/MissionStatement";
import Image from "next/image";
const Home = () => {
  return (
    <div className="bg-csa-tan-100">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <Image
          src="/home/dragon.webp"
          alt="dragon"
          width={450}
          height={450}
          className="row-span-3"
        />
        <div className="col-span-2 row-span-2 row-start-3">
          <MissionStatement />
        </div>
      </div>
      <EHTitle />
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </div>
  );
};

export default Home;
