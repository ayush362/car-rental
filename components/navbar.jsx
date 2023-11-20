import React from "react";

export const Navbar = () => {
  return (
    <navbar className="container mx-auto flex justify-between items-center p-2 mt-5">
      <div className="px-2">
        <img src="/logo.png" alt="logo" className="w-40" />
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
          <li className="hover:text-orange-600">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex gap-5 ">
        <button className="hover:text-orange-600">Sign in</button>
        <button className="btn">Register</button>
      </div>
      <div className="px-2 lg:hidden">
        <img src="/menu.svg" alt="menu" />
      </div>
    </navbar>
  );
};
