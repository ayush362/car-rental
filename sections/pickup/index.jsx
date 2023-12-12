import React from "react";

export const PickupSection = () => {
    const carTypes = ["Saab", "Mercedes", "Audi", "Volvo"]
    const locations = ["JPNagar", "Yeswanthpur", "KRMarket", "Koramangala"]
    return (
        <section className="mt-32">
            <div className="container px-5 mx-auto p-10 flex flex-col gap-5 shadow-2xl">
                <h3 className="font-bold text-xl text-center">Book a Car</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-wrap">
                    <label className="flex flex-col gap-2">
                        <LabelText svgElement={<LocationSvg className="h-6 w-6"/>} text="Select your Car Type"/>
                        <select className="p-2 text-gray-500">
                            {carTypes.map((carType) => <option value={carType}>{carType}</option>)}
                        </select>
                    </label>
                    <label className="flex flex-col gap-2">
                        <LabelText svgElement={<CalendarSvg className="h-6 w-6"/>} text="Pick-Up"/>
                        <select className="p-2 text-gray-500">
                            {locations.map((loc) => <option value={loc}>{loc}</option>)}
                        </select>
                    </label>
                    <label className="flex flex-col gap-2">
                        <LabelText svgElement={<LocationSvg className="h-6 w-6"/>} text="Drop-Off"/>
                        <select className="p-2 text-gray-500">
                            {locations.map((loc) => <option value={loc}>{loc}</option>)}
                        </select>
                    </label>
                    <label>
                        <LabelText svgElement={<CalendarSvg className="h-6 w-6"/>} text="Pick-Up"/>
                        <input type="date" className="w-full mt-2 border-2 border-gray-400"/>
                    </label>
                    <label>
                        <LabelText svgElement={<CalendarSvg className="h-6 w-6"/>} text="Drop-Off"/>
                        <input type="date" className="w-full mt-2 border-2 border-gray-400"/>
                    </label>
                    <button className="btn w-full mt-3">Search</button>
                </div>
            </div>
        </section>
    );
};

const LabelText = ({svgElement, text, isRequired = true}) => {
    return (
        <div className="flex items-center">
            {svgElement}
            <span>{text}</span>
            {isRequired && <sup className="text-red-500">*</sup>}
        </div>
    );
}

const LocationSvg = ({className}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
    </svg>
};

const CalendarSvg = ({className}) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
    </svg>
}