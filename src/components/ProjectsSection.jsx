import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { AnimatedButton } from "./AnimatedButton";
import { FiGlobe, FiGithub, FiArrowRight } from "react-icons/fi";
import ochiImage from "@/assets/projects/ochi.png";
import shoesImage from "@/assets/projects/shoes.png";
import ebikeImage from "@/assets/projects/ebike.png";
import portfolioImage from "@/assets/projects/portfolio.png";

const projects = [
  {
    title: "Ochi.design UI Clone",
    tech: ["React", "TailwindCSS", "GSAP", "Locomotive", "Framer Motion"],
    description:
      "A visual clone of ochi.design created using React, Tailwind CSS, GSAP, Framer Motion, and Locomotive Scroll...",
    image: ochiImage,
    live: "https://mayank181006.github.io/ochi.design-UI-Clone/",
    github: "https://github.com/Mayank181006/ochi.design-UI-Clone",
  },
  {
    title: "Shoes Landing Page",
    tech: ["Html5", "SwiperJS", "JavaScript"],
    description:
      "An interactive responsive website showcasing different shoe models with smooth swipe transitions powered by SwiperJS.",
    image: shoesImage,
    live: "https://mayank181006.github.io/Shoes-Website/",
    github: "https://github.com/Mayank181006/Shoes-Website",
  },
  {
    title: "E bike Landing Page",
    tech: ["React", "TailwindCSS", "GSAP"],
    description:
      "A sleek landing page for an E-bike company with animated transitions and dynamic color themes.",
    image: ebikeImage,
    live: "https://mayank181006.github.io/E-bike-Website-/",
    github: "https://github.com/Mayank181006/E-bike-Website-",
  },
  {
    title: "Portfolio Website",
    tech: ["React", "TailwindCSS", "GSAP", "SwiperJS"],
    description:
      "A personal portfolio with smooth scroll animations, project showcase, and contact form.",
    image: portfolioImage,
    live: "https://mayank181006.github.io/Portfolio-Website/",
    github: "https://github.com/Mayank181006/Portfolio-Website",
  },
];


const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const detailsRefs = useRef([]);
  const arrowRefs = useRef({});

  useEffect(() => {
    projects.forEach((_, i) => {
      const el = detailsRefs.current[i];
      if (!el) return;

      if (openIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex]);

  const handleRowClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  const handleLinkEnter = (index) => {
    const arrow = arrowRefs.current[index];
    if (!arrow) return;
    gsap.to(arrow, {
      scale: 1.3,
      rotate: -90,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLinkLeave = (index) => {
    const arrow = arrowRefs.current[index];
    if (!arrow) return;
    gsap.to(arrow, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  return (
    <div id="projects" className="pt-2">
      <div
        className='skills-title flex gap-2.5 w-full mt-[10vw] items-center uppercase font-["bebas"] px-5 text-[18vw] text-transparent leading-10 md:mb-10'
      >
        <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
        <span>Projects</span>
      </div>
      <div className="bg-black text-white px-5 space-y-4 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-t border-white/40 pt-4  group"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleRowClick(project.github)}
            >
              <div className="flex flex-col items-center">
                <h2 className="text-xl lg:text-3xl font-bold uppercase">{project.title}</h2>
                <span className="block h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </div>

              <button
                className="text-zinc-300 text-sm flex items-center gap-1 hover:text-zinc-500"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                {openIndex === index ? "Close" : "Details"}{" "}
                <span>{openIndex === index ? "▲" : "▶"}</span>
              </button>
            </div>
            <div
              ref={(el) => (detailsRefs.current[index] = el)}
              style={{
                overflow: "hidden",
                height: 0,
                opacity: 0,
              }}
              className="mt-4 space-y-6 lg:space-x-6 lg:flex"
            >
              <div className="flex flex-col gap-6 lg:w-1/2 lg:pt-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full"
                />

                <p className="text-gray-300 text-sm ">{project.description}</p>
              </div>
              <div className="space-y-2">
                <h5>Technologies used:</h5>
                <div className="flex flex-wrap lg:flex-nowrap lg:flex-col gap-3 mb-4 lg:mt-6">
                  {project.tech.map((t, i) => (
                    <AnimatedButton
                      key={i}
                      label={t}
                      bgClass="bg-white"
                      defaultText="white"
                      className="px-4 py-1 text-[4vw] md:text-xl w-fit"
                    />
                  ))}
                </div>
              </div>
              <div className="lg:ml-8 space-y-2 lg:space-y-0">
                <h5>Links:</h5>
                <div className="flex justify-between lg:justify-normal lg:gap-8 lg:mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer"
                    onMouseEnter={() => handleLinkEnter(`live-${index}`)}
                    onMouseLeave={() => handleLinkLeave(`live-${index}`)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                      <FiGlobe className="text-sm" />
                    </div>
                    <div className="relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-200">
                      <span className="text-sm uppercase">Live Demo</span>
                    </div>
                    <FiArrowRight
                      ref={(el) => (arrowRefs.current[`live-${index}`] = el)}
                      className="text-lg"
                    />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer"
                    onMouseEnter={() => handleLinkEnter(`git-${index}`)}
                    onMouseLeave={() => handleLinkLeave(`git-${index}`)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white text-black">
                      <FiGithub className="text-sm" />
                    </div>
                    <div className="relative hover:after:w-full after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300">
                      <span className="text-sm uppercase">Github</span>
                    </div>
                    <FiArrowRight
                      ref={(el) => (arrowRefs.current[`git-${index}`] = el)}
                      className="text-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center items-center border-t border-white/40 py-10">
          <AnimatedButton
            className="px-4 py-2 w-fit"
            label="View All Projects"
            bgClass="bg-white"
            defaultText="white"
          />

        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
