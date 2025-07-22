import React, { useRef } from "react";
import { FiArrowRight, FiLinkedin } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";

const SocialLink = ({ Icon, label, href }) => {
  const arrowRef = useRef(null);
  const underlineRef = useRef(null);

  const handleEnter = () => {
    gsap.to(arrowRef.current, {
      rotate: -90,
      x: 5,
      duration: 0.4,
      ease: "power3.easeInOut",
    });
    gsap.to(underlineRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.4,
      ease: "power3.easeInOut",
    });
  };

  const handleLeave = () => {
    gsap.to(arrowRef.current, {
      rotate: 0,
      x: 0,
      duration: 0.4,
      ease: "power3.easeInOut",
    });
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 cursor-pointer relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white">
        <Icon className="text-sm" />
      </div>
      <div className="relative">
        <span className="text-[4vw] lg:text-[2vw] font-semibold uppercase">
          {label}
        </span>
        <span
          ref={underlineRef}
          className="absolute left-0 -bottom-1 h-[2px] lg:h-[4px] bg-black w-full scale-x-0 origin-left"
        ></span>
      </div>
      <FiArrowRight
        ref={arrowRef}
        className="text-xl lg:text-2xl absolute lg:relative right-2"
      />
    </a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white w-full flex flex-col justify-between overflow-hidden">
      <div className="content flex flex-wrap justify-between px-5 py-8 gap-y-6">
        <div className="w-1/2 space-y-6 text-black md:w-1/3 lg:hidden">
          <SocialLink Icon={FaInstagram} label="Instagram" href="https://www.instagram.com/mayank.arora_18/" />
          <SocialLink Icon={FaYoutube} label="YouTube" href="https://youtube.com/@codewithleo18?si=3TlKtZWDnvOI2wSt" />
          <SocialLink Icon={FiLinkedin} label="LinkedIn" href="https://www.linkedin.com/in/mayank-arora-725294330/" />
          <SocialLink Icon={FaGithub} label="GitHub" href="https://github.com/Mayank181006" />
        </div>
        <div className="w-1/2 space-y-4 text-black md:w-1/3 lg:hidden">
          <SocialLink Icon={MdEmail} label="Email" href="mailto:ma5297780@email.com" />
          <SocialLink Icon={FaWhatsapp} label="Whatsapp" href="https://wa.me/918851576381" />
        </div>
        <div className="hidden lg:flex lg:w-full lg:justify-between text-black">
          <SocialLink Icon={FaInstagram} label="Instagram" href="https://instagram.com/mayank.arora_18" />
          <SocialLink Icon={FaYoutube} label="YouTube" href="https://youtube.com/@codewithleo18?si=3TlKtZWDnvOI2wSt" />
          <SocialLink Icon={FiLinkedin} label="LinkedIn" href="https://www.linkedin.com/in/mayank-arora-725294330/" />
          <SocialLink Icon={FaGithub} label="GitHub" href="https://github.com/Mayank181006" />
          <SocialLink Icon={MdEmail} label="Email" href="mailto:ma5297780@email.com" />
          <SocialLink Icon={FaWhatsapp} label="Whatsapp" href="https://wa.me/918851576381" />
        </div>
      </div>
      <div className="text-black flex justify-center font-black text-sm md:text-base lg:text-xl my-4">
        made with ❤️ by
      </div>
      <div className="bottom text-black font-['bebas'] text-[40vw] md:text-[39vw] leading-[0.7] translate-y-1/4 lg:translate-y-1/5 text-center">
        MAYANK
      </div>
    </footer>
  );
}
