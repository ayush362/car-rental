import React from "react";

const aboutData = [
  { image: "/about1.png", outletNo: 20, outLetype: "car Types" },
  { image: "/about2.png", outletNo: 85, outLetype: "Rental outlets" },
  { image: "/about3.png", outletNo: 75, outLetype: "Repair shop" },
];

export const About = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row  items-center mt-60">
      <div className="w-full lg:w-1/2">
        <img src="/about-main.jpg" alt="man talking" className="" />
      </div>
      <div className="flex flex-col gap-10 w-full lg:w-1/2">
        <h4 className="text-3xl font-semibold">About company</h4>
        <h3 className="text-5xl font-bold w-2/3">
          You start the engine and your adventure begins
        </h3>
        <p>
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <div className="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:justify-between">
          {aboutData.map((aboutData, index) => (
            <AboutCard key={index} {...aboutData} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ image, outletNo, outLetype }) => {
  return (
    <div className="flex gap-5">
      <div>
        <img src={image} alt={outLetype} className="mb-3 w-24 h-20" />
        <div className="flex gap-3">
          <span className="font-bold text-4xl">{outletNo}</span>
          <p className="w-1/2">{outLetype}</p>
        </div>
      </div>
    </div>
  );
};
