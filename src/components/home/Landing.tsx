"use client";

import Dragon from "@/public/home/Dragon.webp";
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
    <div>
      <div
        className={
          "relative mr-[10vw] border-r-8 border-csa-red-100 pr-[2vw] text-right"
        }
      >
        <div className="font-lora mb-8 flex flex-col border-csa-red-100 text-6xl font-semibold text-csa-red-100">
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
        <div className="ml-[25vw] border-l-8 border-csa-tan-300 pl-6">
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
            className="mt-4 text-left text-2xl font-semibold leading-9 text-csa-gray-100"
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
        className="absolute bottom-10 right-0 sm:bottom-[30%]"
      />

      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="absolute left-0 top-[12%] w-[27%] sm:w-[20%] md:top-[18%]"
        />
      </div>
    </div>
  );
};

export default Landing;
