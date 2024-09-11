"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";
const MultiLayerParallax = () => {
  const ref = useRef(null);
  const refView = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [isPortrait ? "-80vh" : "-80vh", isPortrait ? "115vh" : "210vh"]
  );
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.1, 0.125, 0.2, 0.3, 0.4, 0.6],
    [0, 0.2, 0.3, 0.4, 0.6, 0.8, 1]
  );

  const largeOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.125, 0.2, 0.3],
    [0, 0.2, 0.5, 0.7, 1]
  );

  const inView = useInView(refView, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView, isPortrait, scrollYProgress.get()]);
  return (
    <div
      className="w-full min-h-[160vh] overflow-hidden relative flex items-center justify-center flex-col max-sm:min-h-[200vh]"
      ref={ref}
    >
      <motion.h1
        className=" text-light-900 text-8xl relative z-30 font-serif lg:tracking-widest max-lg:text-7xl max-md:mb-20 md:mb-40 lg:mb-20 2xl:mb-0  "
        style={{
          y: textY,
          opacity: isDesktopOrLaptop ? largeOpacity : opacityText,
        }}
      >
        SheGuides
      </motion.h1>
      <div
        ref={refView}
        className={cn(
          " absolute  overflow-hidden z-30  text-center max-lg:text-light-800 lg:text-sky-200  max-sm:bottom-[54vh] lg:bottom-[28vh] max-lg:bottom-[34vh] max-md:bottom-[32vh] xl:max-w-[50vw] lg:max-w-[74vw]",
          {
            " max-w-[66vw]": isTabletOrMobile,
            " max-w-[90vw] !important": isPortrait,
          }
        )}
      >
        <motion.span
          className="text-2xl  font-serif"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Travel through time as our women guides connect you with the rich
          heritage of ancient cultures and inspire you with modern perspectives.
          Every journey blends tradition with innovation, empowering your
          experience.
        </motion.span>
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="absolute inset-0 z-20 bg-gradient-to-r from-sky-blue to-transparent"
        />
      </div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/image-full.png')",
          y: backgroundY,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url('/images/image-bottom-4.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />

      <motion.button className=" flex flex-row items-center gap-2 font-serif font-bold text-lg shadow-[0_8px_24px_0_rgb(0,0,0,10%)] hover:shadow-[0_24px_50px_rgba(93,93,93,83%)] px-8 py-2 bg-[#fff] text-[#696969] rounded-md  transition duration-200 ease-linear z-30 absolute bottom-28 hover:text-dark-400">
        Book Now <IconArrowRight />
      </motion.button>
    </div>
  );
};

export default MultiLayerParallax;
