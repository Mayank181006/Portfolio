import React from "react";

const skills = [
    { logo: "/skills/reactjs.svg", label: "React JS" },
    { logo: "/skills/html5.svg", label: "HTML5" },
    { logo: "/skills/tailwind.svg", label: "Tailwind CSS" },
    { logo: "/skills/framermotion.svg", label: "Framer Motion" },
    { logo: "/skills/gsap.png", label: "GSAP" },
    { logo: "/skills/locomotive.png", label: "Locomotive Scroll" },
    { logo: "/skills/sheryjs.png", label: "Shery.js" },
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
