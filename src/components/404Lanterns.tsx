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
          width: "32vw",
          right: "4vw",
          top: "27vh",
        }}
      />
    </div>
  );
};

export default LanternBackground;
