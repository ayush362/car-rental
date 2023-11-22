import React from "react";

const planItems = [
  {
    image: "/plan-logo-1.png",
    title: "Select Car",
    para: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    image: "/plan-logo-2.png",
    title: "Contact Opoerator",
    para: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
  },
  {
    image: "/plan-logo-3.png",
    title: "Let's drive",
    para: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

export const Plan = () => {
  return (
    <section className="container mx-auto mt-20">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h4 className="font-bold text-3xl">Plan your trip now</h4>
        <h3 className="font-bold text-5xl">Quick & easy Car rental</h3>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row justify-between mt-10">
        {planItems.map((planItems, index) => (
          <TripPlanProcess key={index} {...planItems} />
        ))}
      </div>
    </section>
  );
};

const TripPlanProcess = (props) => {
  return (
    <div className="flex flex-col justify-center gap-4 items-center">
      <img src={props.image} alt={props.title} className="w-32 h-32" />
      <h3 className="font-bold text-xl">{props.title}</h3>
      <p className="w-1/2 text-gray-500">{props.para}</p>
    </div>
  );
};
