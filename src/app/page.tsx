import React from "react";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import EHTitle from "@/components/events/EventHighlightsTitle";

const Home = () => {
  return (
    <div className="bg-csa-tan-100 pt-[12.2vh] md:pt-[14.4vh]">
      <EHTitle />
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </div>
  );
};

export default Home;
