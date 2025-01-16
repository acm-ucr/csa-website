import React from "react";
import XinDescription from "@/components/home/XinDescription";
import QuoteBox from "@/components/home/QuoteBox";
import quotes from "@/data/quote-data";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-csa-tan-100">
      <XinDescription />
      {quotes.map(({ quote, person }, index) => (
        <QuoteBox quote={quote} name={person} key={index} />
      ))}
    </div>
  );
};

export default Home;
