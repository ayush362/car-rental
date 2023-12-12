import React from "react";

export const Footer = () => {
  return (
    <section className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 mt-8">
        <h2 className="text-2xl">
          <span className="font-bold">Car</span> Rental
        </h2>
        <p className="text-gray-400">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <span className="flex gap-3">{phone} (123)-45-789</span>
        <span className="flex gap-3">{inbox} xyz@gmail.com</span>
        <span>Design by Ayush khatri</span>
      </div>
      <div className="mt-8 flex flex-col items-center text-center md:items-start md:text-left">
        <ul className="flex flex-col gap-3">
          <li className="font-bold text-2xl">Company</li>
          <li>New York</li>
          <li>Careers</li>
          <li>Mobile</li>
          <li>Blod</li>
          <li>How we work</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col items-center text-center md:items-start md:text-left">
        <ul className="flex flex-col gap-3">
          <li className="font-bold text-2xl">Working Hours</li>
          <li>Mon-Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 1:00PM</li>
          <li>Sun:closed</li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 mt-8">
        <h3 className="font-bold text-3xl">Subscription</h3>
        <p>
          Subscribe Your Email address for latest <br />
          news and updates
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className="bg-gray-100 py-3 text-center"
            placeholder="Enter Email Address"
          />
          <button className="btn">Submit</button>
        </div>
      </div>
    </section>
  );
};

const phone = (
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
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const inbox = (
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
      d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
    />
  </svg>
);
