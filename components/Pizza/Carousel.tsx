import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

export const Carousel = ({
  children,
  length,
}: {
  children?: ReactNode | ReactNode[];
  length: number;
}) => {
  const [position, setPosition] = useState(0);
  const [leftConstraint, setLeftConstraint] = useState(0);
  const carouselRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (carouselRef.current) {
      setLeftConstraint(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, [carouselRef]);

  return (
    <div className=" mb-10 h-auto pb-5 pr-5 overflow-hidden">
      <div className="cursor-grab active:cursor-grabbing " ref={carouselRef}>
        <motion.div
          className="flex flex-row gap-5 flex-nowrap items-stretch"
          drag="x"
          dragConstraints={{ right: 0, left: -leftConstraint }}
          dragElastic={0.2}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
