import React from "react";
import Image from "next/image";
import Lantern from "@/public/notfound/lantern404.webp";

const LanternBackground = () => {
  return (
    <div>
      <Image
        src={Lantern}
        alt="Lantern background"
        className="w-70 absolute right-20 top-28"
      />
    </div>
  );
};

export default LanternBackground;
