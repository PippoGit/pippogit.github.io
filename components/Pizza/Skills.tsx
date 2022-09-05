import Image from "next/image";
import React from "react";
import { Education } from "./Education";
import { Section } from "./Section";

export const Skills = () => {
  return (
    <Section>
      <div className="flex flex-col items-center mb-14 mt-2">
        {/* <p className="text-pizza-red font-bold xl:text-2xl lg:text-2xl  md:text-xl text-xl">
            about me
          </p> */}
        <p className="text-pizza-green font-extrabold xl:text-5xl lg:text-6xl md:text-5xl text-4xl tracking-tighter	">
          Full-Stack Knowledge!
        </p>
      </div>
      <div className="flex md:justify-between items-center md:flex-row flex-col lg:gap-0 md:gap-5 gap-5">
        <div className="relative h-[220px] w-[300px] lg:h-[400px] lg:w-[400px]">
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
      {/* <div>
          <a href="https://www.freepik.com/free-vector/pizza-delivery-handing-pizza-boxes_1310910.htm#query=pizza%20box%20stack&position=0&from_view=search">
            Image by iconicbestiary
          </a>
          <span>on Freepik</span>
        </div> */}
    </Section>
  );
};
