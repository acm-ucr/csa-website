import React from "react";
import Header from "@/components/home/Header";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";
import Image from "next/image";
import Dragon from "@/public/home/Dragon.webp";
import EHTitle from "@/components/events/EventHighlightsTitle";
import MissionStatement from "@/components/home/MissionStatement";
import MemberTitle from "@/components/home/MemberExperienceTitle";

const Home = () => {
  return (
    <div className="bg-csa-tan-400 pt-[12.2vh] md:pt-[14.4vh]">
      <Header />
      <MissionStatement />
      <Image src={Dragon} alt="dragon" className="left-0 top-0 w-1/4" />

      <XinDescription />
      <EHTitle />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}

      <MemberTitle />
    </div>
  );
};

export default Home;
