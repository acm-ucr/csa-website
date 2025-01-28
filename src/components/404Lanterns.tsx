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
          width: "41vw",
          right: "7vw",
          top: "12.5vh",
        }}
      />
    </div>
  );
};

export default LanternBackground;
