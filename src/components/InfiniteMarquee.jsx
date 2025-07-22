import React from "react";
import reactLogo from "@/assets/skills/reactjs.svg";
import htmlLogo from "@/assets/skills/html5.svg";
import tailwindLogo from "@/assets/skills/tailwind.svg";
import framerMotionLogo from "@/assets/skills/framermotion.svg";
import gsapLogo from "@/assets/skills/gsap.png";
import locomotiveLogo from "@/assets/skills/locomotive.png";
import sheryLogo from "@/assets/skills/sheryjs.png";


const skills = [
  { logo: reactLogo, label: "React JS" },
  { logo: htmlLogo, label: "HTML5" },
  { logo: tailwindLogo, label: "Tailwind CSS" },
  { logo: framerMotionLogo, label: "Framer Motion" },
  { logo: gsapLogo, label: "GSAP" },
  { logo: locomotiveLogo, label: "Locomotive Scroll" },
  { logo: sheryLogo, label: "Shery.js" },
];


const InfiniteMarquee = () => {
    return (
        <div className="bg-black text-white">
            <div className="border-t border-zinc-500"></div>
            <MarqueeRow direction="left" />
            <div className="border-t border-zinc-500"></div>
            <MarqueeRow direction="right" />
            <div className="border-t border-zinc-500"></div>
            <MarqueeRow direction="left" />
            <div className="border-t border-zinc-500"></div>
        </div>
    );
};

const MarqueeRow = ({ direction }) => {
    const animateClass =
        direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

    return (
        <div className="relative bg-black w-full overflow-hidden py-6 z-10">
            <div className={`flex whitespace-nowrap gap-16 ${animateClass}`}>
                <div className="flex gap-16">
                    {skills.map((s, idx) => (
                        <SkillItem key={idx} {...s} />
                    ))}
                </div>
                <div className="flex gap-16">
                    {skills.map((s, idx) => (
                        <SkillItem key={`dup-${idx}`} {...s} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const SkillItem = ({ logo, label }) => (
    <div className="flex items-center gap-3 text-lg font-medium">
        <img src={logo} alt={label} className="w-10 h-10 object-contain" />
        {label}
    </div>
);

export default InfiniteMarquee;
