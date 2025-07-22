import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".loader h1",
      { x: "-100%" },
      {
        x: "0%",
        duration: 1.2,
        stagger: 0.2,
        ease: "back.inOut",
      }
    );
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(current + Math.floor(Math.random() * 10), 100);
      setCount(current);

      if (current === 100) {
        clearInterval(interval);

        const tl = gsap.timeline();
        tl.to(".loader", {
          y: "-100%",
          duration: 1,
          delay: 0.2,
          ease: "power3.inOut",
        });
        tl.fromTo(
          ".white-screen",
          { y: "100%" },
          { y: "0%", duration: 0.4, ease: "power3.inOut" },
          "-=0.8"
        );

        tl.to(".white-screen", {
          y: "-100%",
          duration: 0.5,
          delay: -0.3,
          ease: "power1.easeInOut",
        });

        tl.from(
          ".navbar .reveal",
          {
            y: "100%",
            opacity: 0,
            duration: 0.8,
            ease: "power3.InOut",
          }
        );
        tl.to(".hero-section", {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power3.InOut",
        });

        tl.from(
          ".hero-heading-line",
          {
            y: 80,
            autoAlpha: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="loader flex fixed inset-0 bg-black flex-col pt-[18vh] z-[9999] px-5">
        <div className="text-white w-full text-[15vw] md:text-[10vw] font-bold flex gap-2 md:gap-4 lg:gap-6 md:leading-[9vw] lg:leading-[7.5vw] overflow-hidden">
          <h1>MAYANK</h1>
          <h1>IS</h1>
          <h1>A</h1>
        </div>
        <span className="absolute bottom-10 right-10 text-white text-[16vw] md:text-[10vw] font-extrabold">
          {count}%
        </span>
      </div>
      <div className="white-screen fixed flex inset-0 bg-white z-[9998]" />
    </>
  );
};

export default Loader;
