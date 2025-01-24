import React from "react";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import EHTitle from "@/components/events/EventHighlightsTitle";
import Image from "next/image";
import Dragon from "@/public/home/dragon.png"


const Home = () => {
  return (
    <div className="bg-csa-tan-100  ">
      <Image src = {Dragon} alt ='dragon' className=" w-1/4  left-0 top-0" />
      <EHTitle />
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </div>
  );
};

export default Home;
