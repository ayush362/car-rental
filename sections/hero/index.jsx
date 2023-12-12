import React from "react";

export const HeroSection = () => {
    return (
        <section className="container px-5 mx-auto flex justify-center lg:justify-between items-center h-screen">
            <div className="flex items-center justify-center">
                <div className="w-5/12 flex flex-col gap-5 lg:p-0 py-5">
                    <h4 className="font-bold">Plan your trip now</h4>
                    <p className="font-bold text-4xl">
                        Save <span className="text-orange-600">big</span> with our Car
                        rental
                    </p>
                    <p className="text-gray-500">
                        Rent the car of your dreams. Unbeatable prices, unlimited miles,
                        flexible pick-up options and much more.
                    </p>
                    <div className="flex gap-5">
                        <button className="btn flex items-center gap-4">
                            Book Ride {rightTick}
                        </button>
                        <button className="btn-black">Learn More &gt; </button>
                    </div>
                </div>
                <img className="w-7/12 hidden lg:block" src="/hero-car.png" alt="hero car"/>
            </div>
        </section>
    );
};

const rightTick = (
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
);
