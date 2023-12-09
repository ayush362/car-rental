import React from "react";
import { RoutersMain } from "../components/routersMain";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

const teamData = [
  { image: "tp1.png", name: "Luke Miller", designation: "Salesman" },
  { image: "tp2.png", name: "Michael Diaz", designation: "Business owner" },
  { image: "tp3.png", name: "Briana Ross", designation: "Photographer" },
  { image: "tp4.png", name: "Lauren Rivera", designation: "Car Detalisit" },
  { image: "tp5.png", name: "Martin Rizz", designation: "Mechanic" },
  { image: "tp6.png", name: "Caitlyn Hunt", designation: "Manager" },
];

const ourTeam = () => {
  return (
    <section className="">
      <RoutersMain sectionName="Our Team" path="Home / Our Team" />
      <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto">
        {teamData.map((teamData, index) => (
          <OurTeamCard key={index} {...teamData} />
        ))}
      </div>
      <Contact />
      <Footer />
    </section>
  );
};

const OurTeamCard = ({ image, name, designation }) => {
  return (
    <section className="container mx-auto lg:mt-40 flex items-center justify-center">
      <div className="p-10 shadow-2xl">
        <img src={image} alt={name} className="w-98 h-98" />
        <div className="flex flex-col gap-2 text-center mt-5">
          <span className="font-bold text-3xl">{name}</span>
          <span className="text-gray-400">{designation}</span>
        </div>
      </div>
    </section>
  );
};

export default ourTeam;
