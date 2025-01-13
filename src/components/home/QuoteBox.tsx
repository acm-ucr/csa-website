import React from "react";

const QuoteBox = ({ quote, name }: { quote: string; name: string }) => {
  return (
    <div className="relative w-3/5">
      <div className="absolute right-4 top-4 h-full w-full rounded-xl bg-csa-gray-200 bg-opacity-50"></div>
      <div className="relative left-0 top-0 flex flex-col gap-8 rounded-xl bg-white p-4">
        <div className="gap-4 px-[2vw] pt-2">
          <p className="text-2xl text-csa-yellow-100">“</p>
          <p className="text-md text-right text-black">{quote}</p>
        </div>
        <p className="px-[2vw] text-left">- {name}</p>
      </div>
    </div>
  );
};

export default QuoteBox;
