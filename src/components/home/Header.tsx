import React from "react";

const Header = () => {
  return (
    <header className="mx-auto h-[284px] max-w-xl border-r-8 border-[#964F4D] px-4 py-6 text-right">
      <h1 className="mb-8 font-bodoni text-2xl font-bold text-[#800000] md:text-6xl">
        Chinese Student
        <br />
        Association
      </h1>

      <p className="text-4.5 max-3-3xl mx-auto font-Lora font-semibold leading-relaxed text-[#535353] md:text-xl">
        Social, cultural, and service oriented
        <br />
        organization that strives to promote the Chinese
        <br />
        American Culture throughout the UCR and
        <br />
        Riverside communities
      </p>
    </header>
  );
};

export default Header;
