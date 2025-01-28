import Image from "next/image";
import Lantern from "@/public/notfound/lantern404.webp";

const NotFound = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-csa-tan-100">
      <Image
        src={Lantern}
        alt="Lantern background"
        className="absolute opacity-100"
        style={{
          width: "40.40vw",
          right: "11vw",
          top: "0vh",
          zIndex: 10,
        }}
      />
      <p
        className="text-[12vw] font-bold text-csa-yellow-300"
        style={{ zIndex: 10 }}
      >
        404
      </p>
      <p
        className="font-lora text-[2.5vw] text-csa-gray-100"
        style={{ zIndex: 10 }}
      >
        page not found :(
      </p>
    </div>
  );
};

export default NotFound;
