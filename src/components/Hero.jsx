import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { AnimatedButton } from "./AnimatedButton";
import LiveClock from "./LiveClock";

const Hero = () => (
  <div className="hero-section opacity-0 relative px-5 md:px-8 flex flex-col justify-between h-[100vh] md:h-fit lg:h-screen pt-[18vh] overflow-hidden">
    <div className="heading w-full md:w-[65%]">
      <div className="flex flex-col text-white text-[15vw] md:text-[10vw] leading-[0.9] gap-2 md:gap-6">
        <h1 className="hero-heading-line self-start font-bold md:leading-[9vw] lg:leading-[7.5vw] ">
          FRONTEND
        </h1>
        <h1 className="hero-heading-line self-end font-bold md:leading-[9vw] lg:leading-[7.5vw] ">
          DEVELOPER
        </h1>
      </div>
      <h3 className="text-right text-gray-300 md:text-[2vw] lg:text-[1.5vw] mt-3 ">
        📍Based In India
      </h3>
    </div>

    <div className="middle flex flex-col w-full mt-25 md:mt-4">
      <p className="text-[4vw] md:text-[2vw] lg:text-[1.2vw] text-zinc-200 uppercase text-right">
        Available For Freelance & Work
      </p>
      <div
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight * 0.5,
            behavior: "smooth",
          })
        }
        className="hero-scroll-btn relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mt-6 cursor-pointer 
             transition-transform duration-300 hover:scale-110 md:hover:scale-105 active:scale-95"
      >
        <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <defs>
            <path id="circlePathSmall" d="M50,50 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0" />
          </defs>

          <text
            className="fill-white tracking-[0.8vw] md:tracking-[7px] text-[6px] lg:text-[9px] md:hidden lg:block"
            fontFamily="Arial, sans-serif"
          >
            <textPath href="#circlePathSmall" startOffset="0%">
              • SCROLL • DOWN • SCROLL • DOWN
            </textPath>
          </text>
          <text
            className="fill-white tracking-[0.8vw] md:tracking-[7px] hidden md:block lg:hidden text-[6px] md:text-[9px]"
            fontFamily="Arial, sans-serif"
          >
            <textPath href="#circlePathSmall" startOffset="0%">
              • SCROLL • DOWN
            </textPath>
          </text>
        </svg>

        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white text-base flex items-center justify-center">
          <FaArrowDown />
        </div>
      </div>


    </div>

    <div className="my-5 lg:my-0 relative w-full flex justify-end lg:absolute lg:bottom-5 right-8">
      <LiveClock className="text-white font-mono opacity-55 text-[13px] md:text-[16px]" />
    </div>

    <div className=" bottom w-full lg:w-[50%] flex justify-between items-center mb-6 md:mb-8 lg:mb-5">
      <AnimatedButton
        className="hero-btn px-3 py-2 md:px-4 md:py-2 whitespace-nowrap gap-2"
        label="Download CV"
        icon={FiArrowRight}
        iconClass="text-xl"
        bgClass="bg-white"
        defaultText="white"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/profile/MayankAroraCV";
          link.download = "MayankAroraCV.pdf";
          link.click();
        }}
      />

      <AnimatedButton
        className="hero-btn px-4 py-2 md:px-5 md:py-2 gap-2 lg:translate-x-[50%]"
        label="Projects"
        icon={FiArrowRight}
        iconClass="text-xl"
        bgClass="bg-white"
        defaultText="white"
        onClick={() => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>

  </div>
);

export default Hero;
