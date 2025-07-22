import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import InfiniteMarquee from "./InfiniteMarquee";
import ProjectsSection from "./ProjectsSection";
import CertificateSlider from "./CertificateSlider";
import webdevImg from "@/assets/services/webdev.png";
import graphicImg from "@/assets/services/graphic.png";
import uiuxImg from "@/assets/services/ui.png";

const cardsData = [
  {
    img: webdevImg,
    align: "self-start",
    title: "Web Development",
    desc: "From landing pages to full-scale web experiences, I create custom websites with smooth, seamless animations that leave a lasting impression.",
  },
  {
    img: graphicImg,
    align: "self-end",
    title: "Graphic Design",
    desc: "From logos to complete brand identities, I design visuals that make your business unforgettable.",
  },
  {
    img: uiuxImg,
    align: "self-start",
    title: "UI / UX Design",
    desc: "From intuitive interfaces to full-scale digital experiences, I design modern, engaging, and responsive layouts that deliver a stunning user experience.",
  },
];

const SkillsProjects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
  const cleanupFns = [];

  cardRefs.current.forEach((card) => {
    if (!card) return;

    gsap.set(card, {
      transformPerspective: 800,
      transformOrigin: "center center",
      force3D: true,
    });
    const rotateXAnim = gsap.quickTo(card, "rotationX", { duration: 0.3, ease: "power2.out" });
    const rotateYAnim = gsap.quickTo(card, "rotationY", { duration: 0.3, ease: "power2.out" });

    let rafId = null; 

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * 8;
        rotateXAnim(-rotateX);
        rotateYAnim(rotateY);
      });
    };

    const resetTilt = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);

    cleanupFns.push(() => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTilt);
    });
  });

  return () => cleanupFns.forEach((fn) => fn());
}, []);


  return (
    <div className="w-full h-fit pt-[8vh] lg:pt-[10vw]">
      <div
        className='skills-title flex gap-2.5 w-full items-center uppercase font-["bebas"] px-5 text-[18vw] lg:text-[14vw] text-transparent leading-10 md:mb-8 '
      >
        <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
        <span>Skills</span>
      </div>
      <InfiniteMarquee />
      <div
      id="services"
        className='skills-title flex gap-2.5 w-full mt-[10vw] items-center uppercase font-["bebas"] px-5 text-[18vw] lg:text-[14vw] text-transparent leading-10 md:mb-8'
      >
        <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
        <span>Services</span>
      </div>
      <div className="flex flex-col gap-8 px-5 md:px-8">
        {cardsData.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`${card.align} relative w-[80%] h-[22rem] rounded-3xl 
              bg-center bg-cover 
              shadow-[0_4px_30px_rgba(255,255,255,0.25)]
              border border-white/10
              will-change-transform`}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            <div className="relative z-10 flex flex-col justify-center h-full px-8">
              <h2 className="text-[9vw] font-extrabold text-white drop-shadow-[0_10px_15px_rgba(0,0,0)] tracking-[1.2px] font-['bebas']">
                {card.title}
              </h2>
              <p className="mt-3 text-sm text-gray-200 max-w-md leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ProjectsSection />
      <CertificateSlider />
    </div>
  );
};

export default SkillsProjects;
