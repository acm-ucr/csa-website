"use client";

import Dragon from "@/public/home/Dragon.webp";
import TopCloud from "@/public/home/TopCloud.webp";
import RightCloud from "@/public/home/RightCloud.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

const SlideInFromRight = {
  initial: { opacity: 0, x: +50 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const SlideInFromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Landing = () => {
  return (
    <div className="pt-[12.2vh] md:pt-[14.4vh]">
      <Image
        src={TopCloud}
        alt="TopCloud"
        className="absolute left-0 top-[12.5vh] md:top-[14.5vh] md:w-7/12"
      />
      <div className="relative mr-[8vw] border-r-8 border-csa-red-100 pr-6 text-right">
        <div className="mb-8 flex flex-col border-csa-red-100 text-5xl font-semibold text-csa-red-100">
          <motion.p
            variants={SlideInFromRight}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.1}
            className="font-bold"
          >
            Chinese Student <br />
            Association
          </motion.p>
        </div>
        <div className="font-lora flex flex-col text-2xl font-semibold leading-relaxed text-csa-gray-100">
          <motion.p
            variants={SlideInFromRight}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.2}
          >
            Social, cultural, and service oriented <br />
            organization that strives to promote the Chinese <br />
            American Culture throughout the UCR and <br />
            Riverside communities
          </motion.p>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="mt-6 border-l-8 border-csa-tan-300 pl-6 md:ml-[25vw] md:mt-0">
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.4}
            className="text-left text-5xl font-bold text-csa-red-100"
          >
            Mission statement
          </motion.p>
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.5}
            className="font-lora mt-4 text-left text-2xl font-semibold leading-9 text-csa-gray-100"
          >
            Social, cultural, and service orientated
            <br />
            organization that strives to promote the Chinese
            <br />
            American culture throughout the UCR and
            <br />
            Riverside communities.
          </motion.p>
        </div>
      </div>
      <Image
        src={RightCloud}
        alt="right cloud"
        className="absolute bottom-[15%] right-0 opacity-70 md:bottom-[10%] md:opacity-100"
      />

      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="absolute left-0 top-[14vh] w-[25vw] md:top-[18%] md:w-[25vw] 2xl:top-[11%] 2xl:w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Landing;
