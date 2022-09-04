import Image from "next/image";
import React from "react";
import { Section } from "./Section";

export const Skills = () => {
  return (
    <div className="bg-white antialiased w-full text-pizza-dark-green">
      <svg
        height="140"
        width="100%"
        viewBox="0 0 1300 140"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_29_1370)">
          <path
            d="M-18 84L30 72.3C78 61 174 37 270 39.7C366 42 462 70 558 72.3C654 75 750 51 846 58.3C942 65 1038 103 1134 112C1230 121 1326 103 1422 98C1518 93 1614 103 1710 105C1806 107 1902 103 1998 95.7C2094 89 2190 79 2286 70C2382 61 2478 51 2574 49C2670 47 2766 51 2862 53.7C2958 56 3054 56 3150 60.7C3246 65 3342 75 3438 79.3C3534 84 3630 84 3726 88.7C3822 93 3918 103 4014 102.7C4110 103 4206 93 4302 79.3C4398 65 4494 47 4590 49C4686 51 4782 75 4878 72.3C4974 70 5070 42 5166 39.7C5262 37 5358 61 5454 70C5550 79 5646 75 5742 63C5838 51 5934 33 6030 42C6126 51 6222 89 6318 107.3C6414 126 6510 126 6606 119C6702 112 6798 98 6846 91L6894 84V0H6846C6798 0 6702 0 6606 0C6510 0 6414 0 6318 0C6222 0 6126 0 6030 0C5934 0 5838 0 5742 0C5646 0 5550 0 5454 0C5358 0 5262 0 5166 0C5070 0 4974 0 4878 0C4782 0 4686 0 4590 0C4494 0 4398 0 4302 0C4206 0 4110 0 4014 0C3918 0 3822 0 3726 0C3630 0 3534 0 3438 0C3342 0 3246 0 3150 0C3054 0 2958 0 2862 0C2766 0 2670 0 2574 0C2478 0 2382 0 2286 0C2190 0 2094 0 1998 0C1902 0 1806 0 1710 0C1614 0 1518 0 1422 0C1326 0 1230 0 1134 0C1038 0 942 0 846 0C750 0 654 0 558 0C462 0 366 0 270 0C174 0 78 0 30 0H-18V84Z"
            fill="#E8FCEA"
          />
        </g>
      </svg>
      <Section>
        <div className="flex flex-col items-center mb-8">
          <p className="text-pizza-red font-bold xl:text-2xl lg:text-2xl  md:text-xl text-xl">
            about me
          </p>
          <p className="text-pizza-green font-extrabold xl:text-5xl lg:text-6xl md:text-5xl text-4xl tracking-tighter	">
            Full-Stack Knowledge!
          </p>
        </div>
        <div className="flex md:justify-between items-center md:flex-row flex-col lg:gap-0 md:gap-5 gap-5">
          <div className="relative h-[220px] w-[350px] lg:h-[400px] lg:w-[400px]">
            <Image
              alt="an illustration of me"
              src="/fullstack.svg"
              layout="fill"
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <div>
              <p className="font-mono font-bold text-pizza-red md:text-lg text-md">
                {"// low-level"}
              </p>
              <p className="font-semibold text-pizza-dark-green md:text-lg text-md">
                C, C++.
              </p>
            </div>
            <div>
              <p className="font-mono font-bold text-pizza-red md:text-lg text-md">
                {"// backend"}
              </p>
              <p className="font-semibold text-pizza-dark-green md:text-lg text-md">
                PHP, Laravel, NodeJS, Java, Python, GraphQL.
              </p>
            </div>
            <div>
              <p className="font-mono font-bold text-pizza-red md:text-lg text-md">
                {"// frontend"}
              </p>
              <p className="font-semibold text-pizza-dark-green md:text-lg text-md">
                Javascript, TypeScript, React, NextJS, ChakraUI, TailwindCSS.
              </p>
            </div>
            <div>
              <p className="font-mono font-bold text-pizza-red md:text-lg text-md">
                {"// AI and data enginering"}
              </p>
              <p className="font-semibold text-pizza-dark-green md:text-lg text-md">
                Python libraries (Pandas, SciKit, PyTorch, Numpy), MATLAB.
              </p>
            </div>
            <div>
              <p className="font-mono font-bold text-pizza-red md:text-lg text-md">
                {"// design"}
              </p>
              <p className="font-semibold text-pizza-dark-green md:text-lg text-md">
                Photoshop, Illustrator, Figma.
              </p>
            </div>
          </div>
        </div>
        <a href="https://www.freepik.com/free-vector/pizza-delivery-handing-pizza-boxes_1310910.htm#query=pizza%20box%20stack&position=0&from_view=search">
          Image by iconicbestiary
        </a>{" "}
        on Freepik
      </Section>
    </div>
  );
};
