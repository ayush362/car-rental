import React from "react";
import { RoutersMain } from "../components/routersMain";
// import { carRentalDetails } from "../sections/rental-fleet";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

const carRentalDetails = [
  {
    title: "audi",
    model: "Audi",
    Mark: "A1",
    Year: 2012,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline",
    Rent: 45,
    image: "/audi-a1.jpg",
  },
  {
    title: "VWgolf",
    model: "Golf 6",
    Mark: "Vokswagen",
    Year: 2008,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Rent: 37,
    image: "/golf6.jpg",
  },
  {
    title: "toyota",
    model: "Camry",
    Mark: "Toyota",
    Year: 2006,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Hbrid",
    Rent: 30,
    image: "/toyotacamry.jpg",
  },
  {
    title: "bmw",
    model: "320",
    Mark: "BMW",
    Year: 2012,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Rent: 35,
    image: "/bmw320.jpg",
  },
  {
    title: "mercedes",
    model: "Benz GLK",
    Mark: "Mercedes",
    Year: 2006,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Diesel",
    Rent: 50,
    image: "/benz.jpg",
  },
  {
    title: "VWpassat",
    model: "Passat CC",
    Mark: "Vokswagen",
    Year: 2008,
    Doors: "4/5",
    AC: "Yes",
    Transmission: "Manual",
    Fuel: "Gasoline",
    Rent: 25,
    image: "/passatcc.jpg",
  },
];

const vehicleModel = () => {
  return (
    <section>
      <div>
        <RoutersMain
          path="Home / Vehicle Models"
          sectionName="Vehicle Models"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto">
          {carRentalDetails.map((carRentalDetails, index) => (
            <VehicleModelCard key={index} {...carRentalDetails} />
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </section>
  );
};

export const VehicleModelCard = ({
  title,
  model,
  image,
  Rent,
  Fuel,
  Transmission,
  Doors,
  mark,
}) => {
  return (
    <section className="mt-40 flex justify-center items-center border-2 border-black py-20 px-10">
      <div>
        <img src={image} alt={title} className="h-60" />
        <div className="flex flex-col justify-center gap-4 mt-5">
          <div className="flex justify-between">
            <span className="font-bold text-2xl ">
              {model} {mark}
            </span>
            <span className="font-bold text-2xl">
              $ {Rent} <br />
              Per day
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-xl flex gap-2">
              {" "}
              {truck} {model}
            </span>
            <span className="text-gray-400 text-xl flex gap-2">
              {Doors} {truck}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-xl flex gap-2">
              {truck} {Transmission}
            </span>
            <span className="text-gray-400 text-xl flex gap-2">
              {Fuel} {truck}
            </span>
          </div>
          <hr className="mt-5" />
          <button className="btn w-full mt-5">Book Ride</button>
        </div>
      </div>
    </section>
  );
};

const truck = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
    />
  </svg>
);

export default vehicleModel;
