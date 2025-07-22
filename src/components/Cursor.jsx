import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const idleTimerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let isIdle = false;

    // Move cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.2,
        ease: "power2.out",
      });

      if (isIdle) {
        showCursor();
        isIdle = false;
      }

      resetIdleTimer();
    };

    const showCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    const startIdleTimer = () => {
      idleTimerRef.current = setTimeout(() => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0.3,
          duration: 0.4,
          ease: "power2.out",
        });
        isIdle = true;
      }, 5000);
    };

    const resetIdleTimer = () => {
      clearTimeout(idleTimerRef.current);
      startIdleTimer();
    };

    const handleMouseEnter = () => {
      showCursor();
      resetIdleTimer();
    };

    const handleMouseLeave = () => {
      hideCursor();
      clearTimeout(idleTimerRef.current);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("cursor-show", showCursor);
    window.addEventListener("cursor-hide", hideCursor);

    hideCursor();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("cursor-show", showCursor);
      window.removeEventListener("cursor-hide", hideCursor);
      clearTimeout(idleTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block"
      style={{
        transform: "translate3d(-100px, -100px, 0)",
        opacity: 0,
        scale: 0,
      }}
    />
  );
};

export default Cursor;
