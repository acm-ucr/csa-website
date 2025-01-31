import React from "react";
import Header from "@/components/home/Header";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import Image from "next/image";
import Dragon from "@/public/home/Dragon.webp";
import EHTitle from "@/components/events/EventHighlightsTitle";
import MissionStatement from "@/components/home/MissionStatement";

const Home = () => {
  return (
    <div className="bg-csa-tan-100 pt-[12.2vh] md:pt-[14.4vh]">
      <Image src={Dragon} alt="dragon" className="left-0 top-0 w-1/4" />
      <MissionStatement />
      <EHTitle />
      <Header />
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </div>
  );
};

export default Home;
