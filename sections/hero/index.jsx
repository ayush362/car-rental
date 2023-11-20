import React from "react";

export const Hero = () => {
  return (
    <section className="container mx-auto flex justify-between mt-40 items-center">
      <div>
        <div className="flex flex-col gap-5">
          <h4 className="font-bold">Plan your trip now</h4>
          <p className="font-bold text-4xl w-1/2">
            Save <span className="text-orange-600">big</span> with our Car
            rental
          </p>
          <p className="text-gray-500 w-2/3">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-5">
            <button className="btn flex items-center gap-4">
              Book Ride
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="btn-black">Learn More &gt; </button>
          </div>
        </div>
      </div>
      <div>
        <img src="/hero-car.png" alt="hero car" />
      </div>
    </section>
  );
};
