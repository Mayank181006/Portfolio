import React, { useRef, useEffect } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsProjects from "./components/SkillsProjects";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {

  const appRef = useRef(null);

  useEffect(() => {
    const appElement = appRef.current;

    const showCursor = () => {
      window.dispatchEvent(new CustomEvent("cursor-show"));
    };
    const hideCursor = () => {
      window.dispatchEvent(new CustomEvent("cursor-hide"));
    };

    appElement.addEventListener("mouseenter", showCursor);
    appElement.addEventListener("mouseleave", hideCursor);

    return () => {
      appElement.removeEventListener("mouseenter", showCursor);
      appElement.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div ref={appRef}>
      {/* <Cursor /> */}
      <Loader />
      <Navbar />
      <Hero />
      <SkillsProjects />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
