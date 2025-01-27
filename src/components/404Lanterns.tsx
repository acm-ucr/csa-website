import React from "react";
import Image from "next/image";
import Lantern from "@/public/notfound/lantern404.webp";

const LanternBackground = () => {
  return (
    <div>
      <Image
        src={Lantern}
        alt="Lantern background"
        className="absolute"
        style={{
          width: "70vw",
          right: "20vw",
          top: "28vh",
        }}
      />
    </div>
  );
};

export default LanternBackground;
