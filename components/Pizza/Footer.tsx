import React from "react";
import { Section } from "./Section";

export const Footer = () => {
  return (
    <div className="bg-pizza-transparent-green min-h-[10rem]">
      <Section>
        <p className="font-bold text-md text-center">made in italy</p>
        <p className="font-semibold text-sm text-center">
          <a href="https://www.freepik.com/free-vector/pizza-delivery-handing-pizza-boxes_1310910.htm#query=pizza%20box%20stack&position=0&from_view=search">
            Pizza Box Stack by iconicbestiary
          </a>{" "}
          on Freepik &lt;3
        </p>
        <p className="font-semibold text-sm text-center">
          <a href="https://www.freepik.com/free-vector/code-typing-concept-illustration_10259340.htm#&position=12&from_view=author">
            Education Image by storyset
          </a>{" "}
          on Freepik &lt;3
        </p>
      </Section>
    </div>
  );
};
