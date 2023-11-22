import React, { useState } from "react";

export const carRentalDetails = [
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

export const RentalFleet = () => {
  const [isSelected, setSelected] = useState("audi");
  function imageSelector(props) {
    setSelected(props);
    console.log(isSelected);
  }

  return (
    <section className="container mx-auto mt-32">
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-xl font-bold">Vehicle Models</h3>
        <h2 className="text-4xl font-bold">Our rental fleet</h2>
        <p className="text-gray-400 w-1/3 text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip car_img
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-10">
        <div className="lg:w-1/4 flex flex-col gap-3 font-semibold">
          <button
            className={`${isSelected === "audi" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("audi")}
          >
            Audi A1 s-Line
          </button>
          <button
            className={`${isSelected === "VWgolf" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("VWgolf")}
          >
            VW Golf 6
          </button>
          <button
            className={`${isSelected === "toyota" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("toyota")}
          >
            Toyota Camry
          </button>
          <button
            className={`${isSelected === "bmw" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("bmw")}
          >
            BMW 320 ModernLine
          </button>
          <button
            className={`${isSelected === "mercedes" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("mercedes")}
          >
            Mercedes-Benz GLK
          </button>
          <button
            className={`${isSelected === "VWpassat" ? "btn" : "btn-gray"}`}
            onClick={() => imageSelector("VWpassat")}
          >
            VW Passat CC
          </button>
        </div>
        <div className="lg:w-1/3">
          <img
            src="/audi-a1.jpg"
            alt="audi"
            className={`${isSelected === "audi" ? "block" : "hidden"}`}
          />
          <img
            src="/golf6.jpg"
            alt="golf"
            className={`${isSelected === "VWgolf" ? "block" : "hidden"}`}
          />
          <img
            src="/toyotacamry.jpg"
            alt="toyota"
            className={`${isSelected === "toyota" ? "block" : "hidden"}`}
          />
          <img
            src="/bmw320.jpg"
            alt="bmw"
            className={`${isSelected === "bmw" ? "block" : "hidden"}`}
          />
          <img
            src="/benz.jpg"
            alt="benz"
            className={`${isSelected === "mercedes" ? "block" : "hidden"}`}
          />
          <img
            src="/passatcc.jpg"
            alt="passatcc"
            className={`${isSelected === "VWpassat" ? "block" : "hidden"}`}
          />
        </div>
        <div className="w-1/3"></div>
      </div>
    </section>
  );
};
