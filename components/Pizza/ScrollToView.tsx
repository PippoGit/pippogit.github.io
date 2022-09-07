import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export const ScrollToView = () => {
  const position = useScrollPosition();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: position > 50 ? 0 : 1 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center justify-center opacity-90 mt-40 md:mt-10"
    >
      <svg
        width="28"
        height="40"
        viewBox="0 0 25 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-bounce"
      >
        <rect
          x="0"
          y="1"
          width="25"
          height="38"
          rx="12.5"
          stroke="#0F7118"
          strokeWidth="2"
        ></rect>
        <circle cx="12.5" cy="14.5" r="7.5" fill="#0F7118"></circle>
      </svg>
      <p className="font-bold text-pizza-green">scroll to know me better</p>
    </motion.div>
  );
};
