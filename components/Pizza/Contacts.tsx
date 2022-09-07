import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";
import { Section } from "./Section";

export const Contacts = () => {
  return (
    <div id="contacts">
      <Section>
        <div className="text-center pt-14">
          <p className="text-pizza-red font-bold xl:text-3xl lg:text-2xl  text-xl ">
            contacts
          </p>
          <p className="text-pizza-green font-extrabold xl:text-6xl lg:text-5xl text-4xl tracking-tighter	">
            {"Let's Talk!"}
          </p>
        </div>
        <div className="mx-auto max-w-[24rem] flex flex-col items-center gap-5 mt-5">
          <p className="text-lg text-justify font-bold">
            If you want to know more about me (or if you want to hire me 😉),
            please send me an email.
          </p>
          <Link href="mailto:filipscotto@gmail.com">
            <button className="bg-pizza-bright-green px-5 py-2 text-lg rounded-xl flex items-center gap-2 hover:bg-pizza-green active:ring-3 focus:ring-2 ring-pizza-light-green text-white">
              <FiMail />
              <span className="font-bold">contact filippo</span>
            </button>
          </Link>{" "}
        </div>
      </Section>
      <svg
        height="140"
        width="100%"
        viewBox="0 0 1300 140"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_39_2)">
          <path
            d="M0 55.9999L48 67.6999C96 78.9999 192 103 288 100.3C384 97.9999 480 69.9999 576 67.6999C672 64.9999 768 88.9999 864 81.6999C960 74.9999 1056 36.9999 1152 27.9999C1248 18.9999 1344 36.9999 1440 41.9999C1536 46.9999 1632 36.9999 1728 34.9999C1824 32.9999 1920 36.9999 2016 44.2999C2112 50.9999 2208 60.9999 2304 69.9999C2400 78.9999 2496 88.9999 2592 90.9999C2688 92.9999 2784 88.9999 2880 86.2999C2976 83.9999 3072 83.9999 3168 79.2999C3264 74.9999 3360 64.9999 3456 60.6999C3552 55.9999 3648 55.9999 3744 51.2999C3840 46.9999 3936 36.9999 4032 37.2999C4128 36.9999 4224 46.9999 4320 60.6999C4416 74.9999 4512 92.9999 4608 90.9999C4704 88.9999 4800 64.9999 4896 67.6999C4992 69.9999 5088 97.9999 5184 100.3C5280 103 5376 78.9999 5472 69.9999C5568 60.9999 5664 64.9999 5760 76.9999C5856 88.9999 5952 107 6048 97.9999C6144 88.9999 6240 50.9999 6336 32.6999C6432 13.9999 6528 13.9999 6624 20.9999C6720 27.9999 6816 41.9999 6864 48.9999L6912 55.9999V140H6864C6816 140 6720 140 6624 140C6528 140 6432 140 6336 140C6240 140 6144 140 6048 140C5952 140 5856 140 5760 140C5664 140 5568 140 5472 140C5376 140 5280 140 5184 140C5088 140 4992 140 4896 140C4800 140 4704 140 4608 140C4512 140 4416 140 4320 140C4224 140 4128 140 4032 140C3936 140 3840 140 3744 140C3648 140 3552 140 3456 140C3360 140 3264 140 3168 140C3072 140 2976 140 2880 140C2784 140 2688 140 2592 140C2496 140 2400 140 2304 140C2208 140 2112 140 2016 140C1920 140 1824 140 1728 140C1632 140 1536 140 1440 140C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0V55.9999Z"
            fill="#E8FCEA"
          />
        </g>
        <defs>
          <clipPath id="clip0_39_2">
            <rect width="1440" height="140" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
