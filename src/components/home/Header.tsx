import React from "react";

const Header = () => {
  return (
    <div className="relative mr-[10vw] border-r-8 border-csa-red-100 pr-[2vw] text-right">
      <div className="font-lora mb-8 flex flex-col border-csa-red-100 text-6xl font-bold text-csa-red-100">
        <p className="font-bold">Chinese Student</p>
        <p>Association</p>
      </div>
      <div className="font-lora flex flex-col text-xl font-semibold leading-relaxed">
        <p>Social, cultural, and service oriented </p>
        <p>organization that strives to promote the Chinese</p>
        <p>American Culture throughout the UCR and</p>
        <p>Riverside communities</p>
      </div>
    </div>
  );
};

export default Header;
