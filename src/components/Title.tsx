import Image from "next/image";
import banner from "@/public/home/banner.svg";

interface TitleNameProps {
  text: string;
}

const Title: React.FC<TitleNameProps> = ({ text }) => {
  return (
    <div className="relative hidden items-center justify-center md:flex">
      <div className="mr-4 mt-4 h-[.8vh] w-[20vw] bg-csa-green-100" />
      <Image src={banner} alt="Banner" className="h-1/3 w-1/3 object-cover" />
      <div className="absolute mt-4 flex justify-center">
        <svg
          width="3/4vw"
          height="3/4vw"
          viewBox="0 0 400 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M50,140 Q220,0 360,145"
            fill="transparent"
            stroke="none"
          />

          <text
            fill="#7C2413"
            font-size="6.5vw"
            font-weight="bold"
            font-family="serif"
          >
            <textPath href="#curve" startOffset="50%" text-anchor="middle">
              {text}
            </textPath>
          </text>
        </svg>{" "}
      </div>

      <div className="ml-4 mt-4 h-[.8vh] w-[20vw] bg-csa-green-100" />
    </div>
  );
};

export default Title;
