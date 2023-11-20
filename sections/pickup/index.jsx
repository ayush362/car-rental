import React from "react";

export const Pickup = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto p-10 flex flex-col gap-5 shadow-2xl">
        <h3 className="font-bold text-xl text-center">Book a Car</h3>
        <div className="flex flex-col lg:flex-row items-center lg:items-start  justify-between  gap-5 ">
          <div className="flex flex-col w-full lg:w-1/3 gap-2">
            <label>
              Select your Car Type<sup className="text-red-500">*</sup>
            </label>
            <select className="p-2 text-gray-500">
              <option value="type">Select Your car type</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
              <option value="volvo">Volvo</option>
            </select>
          </div>
          <div className="flex flex-col  w-full lg:w-1/3  gap-2">
            <label className="flex items-center">
              {location}
              Pick-Up<sup className="text-red-500">*</sup>
            </label>
            <select className="p-2 text-gray-500">
              <option value="type">Select Pick Up Location</option>
              <option value="JPNagar">JP Nagar</option>
              <option value="Yeswanthpur">Yeswanthpur</option>
              <option value="KRMarket">KR Market</option>
              <option value="Koramangala">Koramangala</option>
            </select>
          </div>
          <div className="flex flex-col w-full lg:w-1/3  gap-2">
            <label className="flex items-center">
              {location} Drop-of<sup className="text-red-500">*</sup>
            </label>
            <select className="p-2 text-gray-500">
              <option value="type">Select Drop Off Location</option>
              <option value="JPNagar">JP Nagar</option>
              <option value="Yeswanthpur">Yeswanthpur</option>
              <option value="KRMarket">KR Market</option>
              <option value="Koramangala">Koramangala</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between gap-5 flex-col lg:flex-row items-center lg:items-start ">
          <div className=" w-full lg:w-1/3 ">
            <label className="flex items-center gap-2">
              {calender} Pick-Up<sup className="text-red-500">*</sup>
            </label>
            <input
              type="date"
              className="w-full mt-2 border-2 border-gray-400"
            />
          </div>
          <div className=" w-full lg:w-1/3 ">
            <label className="flex items-center gap-2">
              {calender} Drop-of<sup className="text-red-500">*</sup>
            </label>
            <input
              type="date"
              className="w-full mt-2 border-2 border-gray-400"
            />
          </div>
          <div className=" w-full lg:w-1/3 ">
            <button className="btn w-full mt-3">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const location = (
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
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const calender = (
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
    />
  </svg>
);
