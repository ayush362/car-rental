import React from "react";

export const Download = () => {
  return (
    <section className="mbg pt-20">
      <div className="container mx-auto flex justify-between items-center lg:justify-start lg:items-start">
        <div className="flex flex-col justify-center items-center gap-5">
          <h4 className="font-bold text-4xl text-center lg:text-start">
            Download our app to get <br /> most out of it
          </h4>
          <p className="text-gray-400 w-2/3">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex gap-5">
            <button>
              <img src="/appstore.svg" alt="appstore" />
            </button>
            <button>
              <img src="/googleapp.svg" alt="google app store" />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/phone.png" alt="phone" />
        </div>
      </div>
    </section>
  );
};
