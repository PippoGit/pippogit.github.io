import useEmblaCarousel from "embla-carousel-react";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { motion } from "framer-motion";

export const Carousel = ({
  children,
}: {
  children?: ReactNode | ReactNode[];
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <>
      <div className="embla overflow-hidden py-4">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container flex items-stretch gap-2">
            {children}
          </div>
        </div>
      </div>
      <div className="embla__dots flex list-none justify-center pt-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

const NextButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="embla__next" onClick={onClick}>
      Next
    </button>
  );
};
const PrevButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="embla__prev" onClick={onClick}>
      Prev
    </button>
  );
};

export const CarouselCard = ({ children }: { children: ReactElement }) => {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0.8 }}
      whileHover={{ scale: 1, opacity: 1 }}
      className="embla__slide flex-grow-0 flex-shrink-0 basis-[80%] h-auto"
    >
      {children}
    </motion.div>
  );
};

const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    className={`bg-transparent cursor-pointer relative p-0 outline-0 border-0 w-2 h-2 mr-[7.5px] ml-[7.5px] flex items-center  after:w-full after:h-2 after:rounded-full after:contents-['']  embla__dot ${
      selected
        ? "after:bg-pizza-light-green after:opacity-1 is-selected"
        : "after:bg-pizza-box-grey after:opacity-20"
    }`}
    type="button"
    onClick={onClick}
  />
);
