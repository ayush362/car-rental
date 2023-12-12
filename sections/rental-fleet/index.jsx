import React, {useState} from "react";

export const carFleet = [
    {
        title: "audi",
        model: "Audi",
        fullName: "Audi A1 S-Line",
        mark: "A1",
        year: 2012,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Gasoline",
        Rent: 45,
        image: "/audi-a1.jpg",
    },
    {
        title: "VWgolf",
        model: "Golf 6",
        fullName: "VW Golf 6",
        mark: "Vokswagen",
        year: 2008,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Diesel",
        Rent: 37,
        image: "/golf6.jpg",
    },
    {
        title: "toyota",
        model: "Camry",
        fullName: "Toyota Camry",
        mark: "Toyota",
        year: 2006,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Hbrid",
        Rent: 30,
        image: "/toyotacamry.jpg",
    },
    {
        title: "bmw",
        model: "320",
        fullName: "BMW 320",
        mark: "BMW",
        year: 2012,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Diesel",
        Rent: 35,
        image: "/bmw320.jpg",
    },
    {
        title: "mercedes",
        model: "Benz GLK",
        fullName: "Mercedes Benz GLK",
        mark: "Mercedes",
        year: 2006,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Diesel",
        Rent: 50,
        image: "/benz.jpg",
    },
    {
        title: "VWpassat",
        model: "Passat CC",
        fullName: "VW Passat CC",
        mark: "Vokswagen",
        year: 2008,
        doors: "4/5",
        AC: "Yes",
        Transmission: "Manual",
        Fuel: "Gasoline",
        Rent: 25,
        image: "/passatcc.jpg",
    },
];

export const RentalFleet = () => {
    const [selectedCarTitle, setSelectedCarTitle] = useState(carFleet[0].title);
    const selectedCar = carFleet.find(c => c.title === selectedCarTitle)
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
            <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-5">
                <div className="lg:w-3/12 flex flex-col font-semibold gap-3">
                    {carFleet.map(car => (
                        <button
                            className={`${selectedCarTitle === car.title ? "btn" : "btn-gray"} text-left`}
                            onClick={() => setSelectedCarTitle(car.title)}
                        >
                            {car.fullName}
                        </button>
                    ))}
                </div>
                <div className="lg:w-6/12 flex justify-center">
                    <img
                        className="w-full px-10"
                        src={selectedCar.image}
                        alt={selectedCar.title}
                    />
                </div>
                <div className="lg:w-3/12 border-1 border-gray-500 flex-col">
                    <div className="bg-orange-600 flex py-2">
                        <p className="flex justify-center items-baseline w-full text-xl text-white">
                            <span className="text-3xl font-bold">${selectedCar.Rent}</span>
                            <span>/ rent per day</span>
                        </p>
                    </div>
                    {Object.entries(selectedCar)
                        .filter(([k, v]) => ["model", "mark", "year", "doors", "AC", "Transmission", "Fuel"].includes(k))
                        .map(([k, v], index) => <CarPropertyItem key={index} k={k} value={v}/>)
                    }
                </div>

            </div>
        </section>
    );
};

const CarPropertyItem = ({k, value}) => {
    return (
        <div className="flex border-2 border-black p-3 text-center">
            <span className="w-1/2 border-r-2 border-gray-500">{k}</span>
            <span className="w-1/2 text-center">{value}</span>
        </div>
    )
}