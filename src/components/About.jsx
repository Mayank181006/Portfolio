import React, { useState, useEffect } from "react";
import { FaArrowRight, FaBookOpen, FaCode, FaNodeJs } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandThreejs, TbColorSwatch } from "react-icons/tb";
import profilePic from "@/assets/profile/profile.jpg";
import projectPreview from "@/assets/profile/project.png";

const About = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showModal]);

  const handleMobileClick = (name) => {
    if (isMobile) setClickedCard(name);
    setTimeout(() => setClickedCard(null), 2000);
  };

  const handleEducationClick = () => {
    if (isMobile) setExpanded((p) => !p);
    else setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const TimelineContent = () => (
    <div className="relative">
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-600 translate-x-1/2"></div>
      <div className="space-y-12">
        <div className="relative flex justify-start">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-8 relative">
            <span className="absolute left-3 top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900"></span>
            <h3 className="text-lg font-semibold">2022 :<br /> 10th Standard</h3>
            <p className="text-sm text-gray-400">Completed secondary education with 85% in Board Examination.</p>
          </div>
        </div>
        <div className="relative flex justify-end">
          <div className="w-1/2 pr-8 relative text-right">
            <span className="absolute right-3 top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900"></span>
            <h3 className="text-lg font-semibold">2024 : <br /> 12th Standard</h3>
            <p className="text-sm text-gray-400">Completed senior secondary education with 93% in Board Examination.</p>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="relative flex justify-start">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-8 relative">
            <span className="absolute left-3 top-2 w-4 h-4 rounded-full bg-green-500 border-2 border-zinc-900"></span>
            <h3 className="text-lg font-semibold">2024 - Present : BCA</h3>
            <p className="text-sm text-gray-400">Currently pursuing Bachelor of Computer Applications from IGNOU.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Card = ({ children, className = "", onClick, href, newTab = false, ...rest }) => {
    const Wrapper = href ? "a" : "div";
    return (
      <Wrapper
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        onClick={onClick}
        {...rest}
        className={`rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 shadow-lg transition-all duration-300 hover:scale-[1.03] cursor-pointer ${className}`}
      >
        {children}
      </Wrapper>
    );
  };

  return (
    <div id="about" className="w-full py-10 text-white relative">
      <div className="skills-title flex gap-2.5 w-full items-center uppercase font-['bebas'] px-5 text-[18vw] lg:text-[14vw] text-transparent leading-10 md:my-10">
        <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
        <span>About Me</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-5 md:px-15 lg:px-40">
        <Card className="md:col-span-2 md:row-span-2">
          {isMobile ? (
            <div className="flex flex-col items-center text-center">
              <img src={profilePic} alt="profile" className="rounded-2xl w-28 h-28 object-cover" />
              <h2 className="text-[9vw] font-bold mt-3 leading-none">Mayank Arora</h2>
              <p className="text-gray-400 text-[4vw]">Design-driven frontend web developer</p>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <img src={profilePic} alt="profile" className="rounded-2xl w-40 h-40 object-cover" />
              <div>
                <p className="text-gray-400 text-sm">Frontend Developer</p>
                <h2 className="text-4xl font-bold leading-none">Mayank Arora</h2>
                <p className="text-gray-400 mt-2">Design-driven frontend web developer</p>
              </div>
            </div>
          )}
        </Card>
        <Card className="md:col-span-2 text-center items-center justify-center">
          <p className="text-lg italic">“Design isn't just how it looks, it's how it works.”</p>
        </Card>
        <Card
          href="./profile/MayankCV.pdf"
          download
          onClick={() => handleMobileClick("resume")}
          className={clickedCard === "resume" ? "scale-105" : ""}
        >
          <p className="text-gray-400 text-sm">More About Me</p>
          <h3 className="text-xl font-bold">Resume</h3>
          <FaArrowRight className="w-5 h-5 mt-4 text-gray-400" />
        </Card>
        <Card
          href="#contact"
          onClick={() => handleMobileClick("contact")}
          className={clickedCard === "contact" ? "scale-105" : ""}
        >
          <p className="text-gray-400 text-sm">Got a Project or an Idea?</p>
          <h3 className="text-xl font-bold">Let's Talk!</h3>
          <FaArrowRight className="w-5 h-5 mt-4 text-gray-400" />
        </Card>
        <Card
          href="#projects"
          onClick={() => handleMobileClick("projects")}
          className={clickedCard === "projects" ? "scale-105" : ""}
        >
          <div className="w-full flex flex-col items-center">
            <h4 className="font-['bebas'] text-[8vw] md:text-3xl bg-gradient-to-b from-white to-zinc-800 bg-clip-text text-transparent -mb-5 md:-mb-4">
              My Projects
            </h4>
            <img className="w-2/3" src={projectPreview} alt="projects preview" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm mt-2">10+ Projects Completed</p>
              <h3 className="text-xl font-bold">View All Projects!</h3>
            </div>
            <FaArrowRight
              className={`w-5 h-5 mt-4 text-gray-400 transition-transform duration-300 ${expanded ? "-rotate-90" : ""
                }`}
            />
          </div>
        </Card>
        <Card onClick={() => handleMobileClick("offer")} className={`${clickedCard === "offer" ? "scale-105" : ""} md:col-span-2`}>
          <div className="flex justify-between text-3xl p-5">
            <div className="flex flex-col items-center gap-2">
              <FaCode />
              <span className="text-xs md:text-sm text-gray-400">Web Dev</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TbColorSwatch />
              <span className="text-xs md:text-sm text-gray-400">Graphic Design</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <LuLayoutDashboard />
              <span className="text-xs md:text-sm text-gray-400">UI/UX</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Specialization</p>
          <h3 className="text-xl font-bold">What I Offer!</h3>
        </Card>
        <Card onClick={handleEducationClick}>
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex flex-col items-center text-3xl p-5">
              <FaBookOpen />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Education</p>
                <h3 className="text-xl font-bold">My Learning Journey</h3>
              </div>
              <FaArrowRight
                className={`w-5 h-5 mt-4 text-gray-400 transition-transform duration-300 ${expanded ? "-rotate-90" : ""
                  }`} />
            </div>
          </div>
          {isMobile && expanded && (
            <div className="mt-5 mb-5 py-4 border-t border-b border-white/10">
              <TimelineContent />
            </div>
          )}
        </Card>
        <Card onClick={() => handleMobileClick("learning")} className={`${clickedCard === "learning" ? "scale-105" : ""} md:col-span-2`}>
          <div className="flex justify-between text-3xl p-5">
            <div className="flex flex-col items-center gap-2">
              <FaNodeJs />
              <span className="text-xs md:text-sm text-gray-400">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TbBrandThreejs />
              <span className="text-xs md:text-sm text-gray-400">Three.js</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RiNextjsLine />
              <span className="text-xs md:text-sm text-gray-400">Next.js</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-4">Learning</p>
          <h3 className="text-xl font-bold">Exploring Right Now!</h3>
        </Card>
        <Card
          href="https://www.youtube.com/@codewithleo18"
          newTab
          onClick={() => handleMobileClick("youtube")}
          className={`${clickedCard === "youtube" ? "scale-105" : ""} md:col-span-2`}
        >
          <div className="flex justify-center items-center text-3xl p-5">
            <FaYoutube />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Subscribe to my YouTube</p>
              <h3 className="text-xl font-bold">Code With Leo</h3>
            </div>
            <FaArrowRight className="w-5 h-5 mt-4 text-gray-400" />
          </div>
        </Card>
      </div>
      {showModal && !isMobile && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-zinc-900 rounded-2xl p-8 w-[80%] max-w-2xl relative">
            <button onClick={closeModal} className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl">
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">My Learning Journey</h2>
            <TimelineContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
