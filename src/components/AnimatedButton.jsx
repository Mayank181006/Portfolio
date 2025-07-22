import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export const AnimatedButton = ({
  label,
  icon: Icon,
  className = "",
  iconClass = "",
  bgClass = "bg-black",
  type = "button",
  defaultText = "black",
  ...props
}) => {
  const bgRef = useRef(null);
  const iconRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.set(bgRef.current, { y: "100%" });
  }, []);

  const animateIn = () => {
    gsap.to(bgRef.current, { y: "0%", duration: 0.4, ease: "power3.out" });
    if (iconRef.current) {
      gsap.to(iconRef.current, { rotate: -45, duration: 0.4, ease: "power3.out" });
    }
  };

  const animateOut = () => {
    gsap.to(bgRef.current, { y: "100%", duration: 0.4, ease: "power3.inOut" });
    if (iconRef.current) {
      gsap.to(iconRef.current, { rotate: 0, duration: 0.4, ease: "power3.inOut" });
    }
  };

  const handleEnter = () => {
    animateIn();
    setIsActive(true);
  };

  const handleLeave = () => {
    animateOut();
    setIsActive(false);
  };

  const handleTouch = () => {
    if (!isActive) {
      animateIn();
      setIsActive(true);
    } else {
      animateOut();
      setIsActive(false);
    }
  };

  const activeText = defaultText === "black" ? "white" : "black";

  return (
    <button
      type={type}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleTouch}
      {...props}  // ✅ this forwards onClick, etc.
      className={`relative border rounded-full overflow-hidden cursor-pointer flex items-center gap-2 transition ${className}`}
    >
      <div
        ref={bgRef}
        className={`absolute inset-0 rounded-full ${bgClass}`}
        style={{ transform: "translateY(100%)" }}
      ></div>

      <span
        className={`relative z-10 transition-colors duration-300 ${
          isActive
            ? activeText === "white"
              ? "text-white"
              : "text-black"
            : defaultText === "white"
            ? "text-white"
            : "text-black"
        }`}
      >
        {label}
      </span>

      {Icon && (
        <span className="relative z-10">
          <Icon
            ref={iconRef}
            className={`${iconClass} transition-colors duration-300 ${
              isActive
                ? activeText === "white"
                  ? "text-white"
                  : "text-black"
                : defaultText === "white"
                ? "text-white"
                : "text-black"
            }`}
          />
        </span>
      )}
    </button>
  );
};
