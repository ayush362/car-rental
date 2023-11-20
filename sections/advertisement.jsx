import React from "react";

export const Advertisement = () => {
  return (
    <section className="bg-neutral-900 text-white py-14 mt-20 px-5 lg:px-0">
      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <p className="font-semibold text-4xl">
          Save big with our cheap car rental!
        </p>
        <p className="text-xl">
          Top Airports.Local Suppliers.{" "}
          <span className="text-orange-600">24/7</span> Support
        </p>
      </div>
    </section>
  );
};
