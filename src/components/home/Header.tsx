import React from "react";

const Header = () => {
  return (
    <div className="relative ml-auto mr-7 h-[284px] max-w-xl border-r-8 border-csa-red-100 px-4 py-6 text-right">
      <p className="font-bodoni mb-8 border-csa-red-100 text-2xl font-bold text-csa-red-100 md:text-6xl">
        Chinese Student
        <br />
        Association
      </p>

      <p className="text-4.5 max-3-3xl font-Lora mx-auto font-semibold leading-relaxed text-csa-gray-100 md:text-xl">
        Social, cultural, and service oriented
        <br />
        organization that strives to promote the Chinese
        <br />
        American Culture throughout the UCR and
        <br />
        Riverside communities
      </p>
    </div>
  );
};

export default Header;
