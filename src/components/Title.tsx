import Image from "next/image";
import * as motion from "motion/react-client";
import banner1 from "@/public/banner.webp";
interface TitleNameProps {
  children: string;
}

const Title: React.FC<TitleNameProps> = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mr-5 mt-4 h-1 w-[20vw] bg-csa-green-100 md:mr-4 md:h-2"
      />
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-1/3 w-1/3 object-cover"
      >
        <Image
          className="ml-4 mt-4 scale-125 md:ml-0 md:mt-0 md:scale-100"
          src={banner1}
          alt="Banner"
        />
      </motion.div>
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute mt-4 flex justify-center"
      >
        <svg
          width="22vw"
          viewBox="0 0 420 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden overflow-visible 2xl:flex"
        >
          <path
            id="curved"
            d="M0,160 Q210,0 460,160"
            fill="transparent"
            stroke="none"
          />
          <text
            fill="#7C2413"
            fontSize="5.5vw"
            fontWeight="bold"
            fontFamily="serif"
          >
            <textPath href="#curved" startOffset="50%" textAnchor="middle">
              {children.split("").map((characters, index) => (
                <motion.tspan
                  key={index}
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
        <svg
          width="22vw"
          viewBox="0 0 420 200"
          xmlns="http://www.w3.org/2000/svg"
          className="hidden overflow-visible md:flex 2xl:hidden"
        >
          <path
            id="curve"
            d="M0,140 Q220,0 460,140"
            fill="transparent"
            stroke="none"
          />
          <text
            fill="#7C2413"
            fontSize="6.5vw"
            fontWeight="bold"
            fontFamily="serif"
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              {children.split("").map((characters, index) => (
                <motion.tspan
                  key={index}
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
        <svg
          width="80vw"
          viewBox="0 0 400 170"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden"
        >
          <path
            id="curvy"
            d="M60,140 Q210,25 360,140"
            fill="transparent"
            stroke="none"
          />
          <text
            fill="#7C2413"
            fontSize="9vw"
            fontWeight="bold"
            fontFamily="serif"
          >
            <textPath href="#curvy" startOffset="50%" textAnchor="middle">
              {children.split("").map((characters, index) => (
                <motion.tspan
                  key={index}
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
        className="ml-12 mt-4 h-1 w-[20vw] bg-csa-green-100 md:ml-4 md:h-2"
      />
    </div>
  );
};

export default Title;
