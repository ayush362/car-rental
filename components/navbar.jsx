import React, { useState } from "react";

export const Navbar = () => {
  const [isSelected, setSelected] = useState(false);
  return (
    <navbar>
      <div className="container mx-auto flex justify-between items-center p-2  relative">
        <div className="px-2">
          <button>
            <a href="/">
              <img src="/logo.png" alt="logo" className="w-40" />
            </a>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            <li className="hover:text-orange-600">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="/vehicleModel">Vehicle Models</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="/testimonials">Testimonials</a>
            </li>
            <li className="hover:text-orange-600">
              <a href="/ourTeam">Our Team</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-5 ">
          <button className="hover:text-orange-600">Sign in</button>
          <button className="btn">Register</button>
        </div>
        <div className="px-2 lg:hidden z-20">
          <button onClick={() => setSelected(!isSelected)}>
            <img
              src="/menu.svg"
              alt="menu"
              className={`${isSelected ? "hidden" : ""}`}
            />
            <span className={`${!isSelected ? "hidden" : ""}`}>{x}</span>
          </button>
        </div>
      </div>
      <div
        className={`bg-white flex flex-col absolute top-0 right-0 w-full h-full ${
          !isSelected ? "hidden" : ""
        }`}
      >
        <ul className="flex gap-4 flex-col items-center justify-center h-2/3 text-2xl font-bold">
          <li className="hover:text-orange-600">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="/vehicleModel">Vehicle Models</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="/testimonials">Testimonials</a>
          </li>
          <li className="hover:text-orange-600">
            <a href="/ourTeam">Our Team</a>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

const x = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
