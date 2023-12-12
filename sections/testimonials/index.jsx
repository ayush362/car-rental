import React from "react";

const testimonialData = [
  {
    quote:
      "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.",
    image: "/pfp1.webp",
    name: "Harry potter",
    location: "Belgrade",
  },
  {
    quote:
      "The car was in great condition and made our trip even better. Highly recommend for this car rental website!",
    image: "/pfp2.jpg",
    name: "Ron Rizzly",
    location: "Novi Sad",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container px-32 mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center">
          <h4 className="font-semibold">Reviewed by People</h4>
          <h2 className="font-bold text-3xl">Client's Testimonials</h2>
          <p className="text-gray-400 w-1/2 text-center">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center mt-4">
          {testimonialData.map((testimonialData, index) => (
            <TestimonialsCard key={index} {...testimonialData} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsCard = ({ quote, image, name, location }) => {
  return (
    <div className="bg-white p-10 flex flex-col shadow-xl gap-5 justify-center items-center h-full">
      <p>"{quote}"</p>
      <div className="flex justify-between w-full mt-auto">
        <div className="flex gap-5">
          <img src={image} alt={name} className="rounded-full w-14 h-14" />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-xl">{name}</span>
            <span>{location}</span>
          </div>
        </div>
        <div>
          <img src="/quotes.png" alt="quotes" />
        </div>
      </div>
    </div>
  );
};
