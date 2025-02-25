import Image from "next/image";
import * as motion from "motion/react-client";
import banner1 from "@/public/banner.webp";
interface TitleNameProps {
  children: string;
}

const Title: React.FC<TitleNameProps> = ({ children }) => {
  return (
    <div className="relative hidden items-center justify-center md:flex">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mr-4 mt-4 h-[.8vh] w-[20vw] bg-csa-green-100" />
      </motion.div>
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-1/3 w-1/3 object-cover"
      >
        <Image src={banner1} alt="Banner" />
      </motion.div>
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute mt-4 flex justify-center"
      >
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
              {children.split("").map((characters, index) => (
                <motion.tspan
                  key={characters}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                >
                  {characters}
                </motion.tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </motion.div>
      <motion.div
        initial={{ x: 15, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="ml-4 mt-4 h-[.8vh] w-[20vw] bg-csa-green-100" />
      </motion.div>
    </div>
  );
};

export default Title;
