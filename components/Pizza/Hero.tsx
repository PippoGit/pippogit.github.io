import React from "react";
import { Section } from "./Section";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="bg-pizza-transparent-green ">
      <Section>
        <Header />

        <div className="flex h-lg w-full md:justify-between justify-around items-center h-[450px] py-20 flex-col-reverse md:flex-row md:px-0 px-3">
          <div>
            <p className="text-pizza-red font-bold xl:text-3xl lg:text-2xl  text-xl ">
              hello, my name is
            </p>
            <p className="text-pizza-green font-extrabold xl:text-8xl lg:text-6xl text-5xl tracking-tighter	">
              Filippo Scotto
            </p>
            <p className="text-pizza-light-green md:text-2xl font-semibold max-w-lg mt-2 text-lg">
              I make stuff with modern web technologies and machine learning.
            </p>
            <p className="text-pizza-lightest-green font-mono font-semibold mt-3 md:text-lg text-md">
              &gt; computer engineer from 🇮🇹
            </p>
            <button className="bg-pizza-bright-green px-5 py-2 text-lg rounded-xl mt-6 flex items-center gap-2 hover:bg-pizza-green active:ring-3 focus:ring-2 ring-pizza-light-green">
              <FaEye />
              <span className="font-bold">see projects</span>
            </button>
          </div>
          <div className="md:w-[400px] md:h-[400px] w-[200px] h-[200px] relative flex-shrink-0">
            <Image alt="an illustration of me" src="/me-xl.png" layout="fill" />
          </div>
        </div>
      </Section>
    </div>
  );
};

// <a href="https://www.freepik.com/free-vector/pizza-delivery-handing-pizza-boxes_1310910.htm#query=pizza%20box%20stack&position=0&from_view=search">Image by iconicbestiary</a> on Freepik