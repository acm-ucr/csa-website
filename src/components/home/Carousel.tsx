"use client";
import photos from "@/data/photos";
import Image from "next/image";
import { useState, RefObject, useEffect } from "react";
import { motion, useAnimate, Variant } from "framer-motion";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import redenvelope from "@/public/about/envelope.webp";
import test from "@/public/home/carousel/carousel_one.webp"


type AnimationEntry = {
  animate: any;
  target: RefObject<HTMLElement>;
  props: Partial<Variant>;
};

type AnimationMap = Record<string, AnimationEntry[]>;

const shiftVar = {
  initial: { opacity: 0 },
  rightShift: {
    x: ["-150%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  leftShift: {
    x: ["150%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  shiftIn: {
    x: ["-100%", "0%"],
    y: ["10%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
  shiftOut: {
    x: ["0%", "50%"],
    y: ["0%", "10%"],
    opacity: ["0%", "100%", "0%"],
    transition: { duration: 0.5 },
  },
  fadeIn: {
    y: ["10%", "0%"],
    opacity: ["0%", "100%"],
    transition: { duration: 0.5 },
  },
};

const Reviews = () => {
  const [currInd, setCurrInd] = useState(0);
  const [leftInd, setLeftInd] = useState(photos?.length - 1 || 0);
  const [rightInd, setRightInd] = useState(currInd + 1);

  const [rev1, animate1] = useAnimate();
  const [rev2, animate2] = useAnimate();
  const [rev3, animate3] = useAnimate();
  const [rev4, animate4] = useAnimate();
  const [rev5, animate5] = useAnimate();

  const [isBelow768, setIsBelow768] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        if (!isBelow768) {
          setIsBelow768(true);
          setCurrInd(0);
        }
      } else {
        if (isBelow768) {
          setIsBelow768(false);
          setCurrInd(0);
        }
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    if (mediaQuery.matches) {
      setIsBelow768(true);
    }

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [isBelow768]);

  const animationMap: AnimationMap = {
    leftShift: [
      {
        animate: animate1,
        target: rev1,
        props: {
          x: ["0%", "-50%"],
          y: ["0%", "10%"],
          opacity: ["100%", "0%"],
        },
      },
      {
        animate: animate2,
        target: rev2,
        props: {
          x: ["150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate4,
        target: rev4,
        props: {
          x: ["100%", "0%"],
          y: ["10%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
    rightShift: [
      {
        animate: animate2,
        target: rev2,
        props: {
          x: ["-100%", "0%"],
          y: ["10%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["-150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate4,
        target: rev4,
        props: {
          x: ["-150%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
      {
        animate: animate5,
        target: rev5,
        props: {
          x: ["0%", "50%"],
          y: ["0%", "10%"],
          opacity: ["100%", "0%"],
        },
      },
    ],
    leftShiftSmall: [
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["25%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
    rightShiftSmall: [
      {
        animate: animate3,
        target: rev3,
        props: {
          x: ["-25%", "0%"],
          opacity: ["0%", "100%"],
        },
      },
    ],
  };

  const runAnimations = (animationKey: keyof AnimationMap) => {
    animationMap[animationKey]?.forEach(({ animate, target, props }) => {
      if (target?.current) {
        animate(target.current, props, { duration: 0.5 });
      }
    });
  };

  const leftShift = () => runAnimations("leftShift");
  const rightShift = () => runAnimations("rightShift");
  const leftShiftSmall = () => runAnimations("leftShiftSmall");
  const rightShiftSmall = () => runAnimations("rightShiftSmall");

  const prevRev = () => {
    const isFirstRev = currInd === 0;
    const newInd = isFirstRev ? photos?.length - 1 : currInd - 1;
    const newLeftInd = newInd - 1 === -1 ? photos?.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === photos?.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (isBelow768) {
      rightShiftSmall();
    } else {
      rightShift();
    }
  };

  const nextRev = () => {
    const isLastRev = currInd === photos?.length - 1;
    const newInd = isLastRev ? 0 : currInd + 1;
    const newLeftInd = newInd - 1 === -1 ? photos?.length - 1 : newInd - 1;
    const newRightInd = newInd + 1 === photos?.length ? 0 : newInd + 1;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (isBelow768) {
      leftShiftSmall();
    } else {
      leftShift();
    }
  };

  const goToRev = (revIdx: number) => {
    const newInd = revIdx;
    const newLeftInd = revIdx - 1 === -1 ? photos?.length - 1 : revIdx - 1;
    const newRightInd = revIdx + 1 === photos?.length ? 0 : revIdx + 1;
    const prevInd = currInd;
    setCurrInd(newInd);
    setLeftInd(newLeftInd);
    setRightInd(newRightInd);

    if (prevInd > revIdx) {
      if (isBelow768) {
        rightShiftSmall();
      } else {
        rightShift();
      }
    } else if (revIdx > prevInd) {
      if (isBelow768) {
        leftShiftSmall();
      } else {
        leftShift();
      }
    }
  };

  return (
    <div className="relative flex flex-row m-auto mb-[5%] mt-[5%] items-center justify-center w-[60%]">
      <motion.div
        ref={rev1}
        variants={shiftVar}
        initial="initial"
        className="absolute right-[66%] -z-10 hidden aspect-[4/3] w-[25vw] md:block"
      >
        <Image 
            fill={true}
            src={photos[leftInd]?.src} 
            alt={photos[leftInd]?.alt} 
            className="rounded-xl"
        />        
      </motion.div>
      <motion.div
        ref={rev2}
        variants={shiftVar}
        initial="initial"
        whileInView="shiftIn"
        className="hidden aspect-[4/3] w-[25vw] cursor-pointer md:block"
        onClick={prevRev}
      >
        <Image 
            fill={true}
            src={photos[leftInd]?.src} 
            alt={photos[leftInd]?.alt}
            className="rounded-xl"
        />  
      </motion.div>

      <motion.div
        ref={rev3}
        variants={shiftVar}
        initial="initial"
        whileInView={isBelow768 ? "fadeIn" : "rightShift"}
        className="aspect-[4/3] w-[50vw] cursor-pointer md:w-[25vw]"
      >
        <Image 
            fill={true}
            src={photos[currInd]?.src} 
            alt={photos[currInd]?.alt} 
            className="rounded-xl"
        />  
      </motion.div>

      <motion.div
        ref={rev4}
        variants={shiftVar}
        initial="initial"
        whileInView="rightShift"
        className="hidden aspect-[4/3] w-[25vw] cursor-pointer md:block"
        onClick={nextRev}
      >
        <Image 
            fill={true}
            src={photos[rightInd]?.src} 
            alt={photos[rightInd]?.alt} 
            className="rounded-xl"
        />  
      </motion.div>
      <motion.div
        ref={rev5}
        variants={shiftVar}
        initial="initial"
        whileInView="shiftOut"
        className="absolute left-[67%] -z-10 hidden aspect-[4/3] w-[25vw] md:block"
      >
        <Image 
            fill={true}
            src={photos[rightInd]?.src} 
            alt={photos[rightInd]?.alt} 
            className="rounded-xl"
        />  
      </motion.div>

      <div className="absolute flex items-center justify-center space-x-[1.5vw] md:-bottom-[2vw] md:space-x-[0.5vw]">
        {photos.map((_: any, index: any) => (
          <motion.div
            key={index}
            whileInView={{ opacity: ["0%", "50%", "100%"] }}
            transition={{ duration: 0.5, delay: 0 + index / 10 }}
            onClick={() => goToRev(index)}
            className={`rounded-xl ${
              currInd === index ? "" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;