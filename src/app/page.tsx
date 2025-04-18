"use client";
import React, { useRef } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";
import logo from "../../public/images/brand/logo.png";
import { BackgroundBeams } from "./components/BackgroundBeams";
import Work from "./components/Work";





const Home: NextPage = () => {
  // Get viewport width to adjust parallax speeds for responsiveness
  const [windowWidth] = useWindowSize();
 const ref = useRef(null);
 
 const { scrollYProgress } = useScroll({
   target: ref,
   offset: ["start start", "end start"],
 });

  // Responsive parallax speeds
  const speed1 = 1;
  const speed2 = windowWidth < 640 ? 0.25 : 0.5;
  const speed3 = windowWidth < 640 ? 0.4 : 0.8;
  const speed4 = windowWidth < 640 ? 0.6 : 1.1;
  const speed5 = windowWidth < 640 ? 0.8 : 1.4;
  const backgroundServer = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundSky = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);
  return (
    <main>
      <section
        ref={ref}
        id="landing"
        className="relative h-screen w-full overflow-hidden grid place-items-center scroll-smooth"
      >
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            style={{ y: textY }}
            className="font-semibold sm:text-2xl md:text-3xl lg:text-4xl relative z-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-700"
          >
            Kamyab Rouhifar
            <span className="block text-center text-white opacity-80 text-sm md:text-2xl lg:text-[28px]/[20px] mt-5 max-w-xl mx-auto relative z-10">
              Software engineer
            </span>
          </motion.h1>
        </div>
        <div
          className="absolute inset-0 z-0 bg-sky"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <BackgroundBeams />
        <div className="absolute left-0 top-0">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="log Image"
            className="object-cover object-center z-5"
            priority
          />
        </div>
        <div
          className="absolute inset-0 z-10 bg-mountain"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <div
          className="absolute inset-0 z-20 bg-code"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="absolute inset-0 z-15 bg-server"
          style={{
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundServer,
          }}
        />
      </section>
      <section
        id="work"
        className="w-full bg-[#051733]"
        >
          <Work />
        </section>
    </main>
  );
};

export default Home;