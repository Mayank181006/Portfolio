import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LiveClock from "./LiveClock";

const Navbar = () => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(true);

  const menuLinksRef = useRef([]);
  const menuButtonRef = useRef(null);

  const links = [
    { name: "Home", href: "#" },
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" },
  ];

  const handleDesktopOpen = () => {
    setDesktopOpen(true);
    gsap.set(menuLinksRef.current, { y: "-300%", opacity: 1 });
    gsap.set(menuButtonRef.current, { y: 0, opacity: 1 });
    gsap.fromTo(
      menuLinksRef.current,
      { y: "-300%", opacity: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.easeInOut",
      }
    );
  };

  const handleDesktopClose = () => {
    gsap.to(menuLinksRef.current, {
      y: "-300%",
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.inOut",
      onComplete: () => {
        setDesktopOpen(false);
        gsap.fromTo(
          menuButtonRef.current,
          { y: "300%", opacity: 1 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.easeInOut",
          }
        );
      },
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav
      className={`navbar fixed w-[100vw] bg-transparent z-50 transition-all duration-500 ${show ? "top-0 backdrop-blur-md bg-transparent" : "-top-20"
        }`}
    >

      <div className="w-full h-full px-5 md:px-8 py-4 flex backdrop-blur-sm justify-between items-center">
        <div className="reveal font-extrabold text-white text-xl md:text-2xl">
          Mayank
        </div>

        <div className="reveal hidden md:flex space-x-8 overflow-hidden items-center">
          {!desktopOpen && (
            <button
              ref={menuButtonRef}
              onClick={handleDesktopOpen}
              className="text-white cursor-pointer text-xl md:text-2xl group flex flex-col ease-in-out items-center"
            >
              Menu
              <span className="block h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          )}
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              ref={(el) => (menuLinksRef.current[index] = el)}
              onClick={handleDesktopClose}
              className={`text-white transition-opacity ease-in-out duration-300 ${desktopOpen ? "visible" : "hidden"
                } group flex flex-col items-center`}
            >
              {link.name}
              <span className="block h-[2px] w-0 bg-white transition-all ease-in-out duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="reveal md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="group text-white text-xl md:text-2xl flex flex-col items-center"
          >
            Menu
            <span className="block h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>

      <div
        className={`mobilemenu fixed top-0 right-0 h-[100vh] w-[100vw] px-5 py-3 flex flex-col justify-between bg-white shadow-lg transform ${mobileOpen ? "translate-x-0" : "translate-x-[100%]"
          } transition-transform ease-in duration-300 z-50 overflow-y-auto`}
      >
        <div className="flex items-center justify-between pb-2 border-b-2 border-black">
          <h2 className="text-xl font-bold text-black">Mayank</h2>
          <button
            onClick={() => setMobileOpen(false)}
            className="group text-black text-xl md:text-2xl flex flex-col items-center"
          >
            Close
            <span className="block h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

        <div className="flex flex-col mt-6 w-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black text-6xl py-4 w-full border-b-2 border-black font-['bebas']"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                const target = document.querySelector(link.href);
                if (target) {
                  setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex justify-between text-black font-bold text-[4vw] uppercase tracking-wide mt-8">
          <a
            href="https://www.instagram.com/mayank.arora_18/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            Instagram
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="https://github.com/Mayank181006"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            Github
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="https://www.linkedin.com/in/mayank-arora-725294330/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            LinkedIn
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="https://youtube.com/@codewithleo18?si=3TlKtZWDnvOI2wSt"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            Youtube
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>

        </div>

        <div className="text-black flex justify-between text-sm mt-4 mb-2">
          <span>&copy;2025</span>
          <LiveClock className="text-black text-sm font-mono" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
