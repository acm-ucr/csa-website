"use client";
import Dragon from "@/public/home/Dragon.webp";
import clouds_home from "@/public/home/clouds_home.webp";
import Image from "next/image";
import * as motion from "motion/react-client";

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
      <Image src = {clouds_home} alt = "clouds on home page" className = "absolute left-0 top-[13.7%] w-[900px] h-[263]"/>
      <div className="relative mr-[10vw] container border-r-8 border-csa-red-100 pr-[2vw] text-right"> 
        <div className="font-lora mb-8 flex flex-col border-csa-red-100 text-6xl font-semibold text-csa-red-100">
          <p className="font-bold">Chinese Student</p>
          <p>Association</p>
        </div>
        <div className="font-lora flex flex-col text-2xl font-semibold leading-relaxed text-csa-gray-100">
          <p>Social, cultural, and service oriented </p>
          <p>organization that strives to promote the Chinese</p>
          <p>American Culture throughout the UCR and</p>
          <p>Riverside communities</p>
        </div>
      </div>
      <div className="px-8 py-4">
        <div className="ml-[25vw] border-l-8 border-csa-tan-300 pl-6">
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.3}
            className="text-left text-5xl font-bold text-csa-red-100"
          >
            Mission statement
          </motion.p>
          <motion.p
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView={"animate"}
            custom={0.1}
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
      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="absolute left-0 top-12 w-1/4 pt-7"
        />
      </div>
      ;
    </div>
  );
};

export default Landing;
