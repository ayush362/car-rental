import React from "react";

const mainData = [
  {
    image: "/cross-country.png",
    title: "Cross Country Drive",
    para: " Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.",
  },
  {
    image: "/inclusive-pricing.png",
    title: "All Inclusive Pricing",
    para: " Get everything you need in one convenient, transparent price with our all-inclusive pricing policy..",
  },
  {
    image: "/no-hidden-charges.png",
    title: "No Hidden Charges",
    para: " Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.",
  },
];

export const Main = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center mt-20">
      <img src="/main.png" alt="Cars" />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 px-5 lg:px-0 flex flex-col gap-5">
          <h3 className="font-semibold">Why Choose Us</h3>
          <h2 className="font-bold text-4xl">
            Best Values deals you <br /> will ever find
          </h2>
          <p className="text-gray-500 lg:w-2/3">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <div>
            <button className="btn">Find Details &gt;</button>
          </div>
        </div>
        <div className="lg:w-1/2 px-5 lg:px-0">
          {mainData.map((mainData, index) => (
            <MainCard key={index} {...mainData} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MainCard = ({ image, title, para }) => {
  return (
    <div className="flex gap-4 py-5">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="w-2/3">{para}</p>
      </div>
    </div>
  );
};
