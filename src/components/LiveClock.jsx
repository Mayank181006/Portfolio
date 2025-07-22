import React, { useState, useEffect } from "react";

const LiveClock = ({ className = "", showLabel = true }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata", // Always IST
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && <span>IST</span>}
      <span>{formattedTime}</span>
    </div>
  );
};

export default LiveClock;
