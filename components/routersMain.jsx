import React from "react";
import { Navbar } from "./navbar";

export const RoutersMain = ({ sectionName, path }) => {
  return (
    <section>
      <div>
        <img
          src="/main-bg.png"
          alt="Car image bg"
          className="w-full absolute opacity-10"
        />
      </div>
      <div className="container mx-auto py-5">
        <div className="relative">
          <Navbar />
          <div className="font-bold py-24">
            <h3 className="text-5xl">{sectionName}</h3>
            <span>{path}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
