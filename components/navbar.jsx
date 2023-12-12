import React, {useState} from "react";
import Link from "next/link";

export const Navbar = () => {
    const [isSelected, setSelected] = useState(false);
    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About",
            url: "/about",
        },
        {
            name: "Vehicle Models",
            url: "/vehicleModel",
        },
        {
            name: "Testimonials",
            url: "/testimonials",
        },
        {
            name: "Our Team",
            url: "/ourTeam",
        }
    ]
    return (
        <nav className="absolute top-0 w-full">
            <div className="container mx-auto flex justify-between items-center p-2  relative">
                <div className="px-2">
                    <button><a href="/"><img src="/logo.png" alt="logo" className="w-40"/></a></button>
                </div>
                <div className="hidden lg:block">
                    <LinksList links={links} className="flex gap-5"/>
                </div>
                <div className="hidden lg:flex gap-5 ">
                    <button className="hover:text-orange-600">Sign in</button>
                    <button className="btn">Register</button>
                </div>
                <div className="px-2 lg:hidden z-20">
                    <button onClick={() => setSelected(!isSelected)}>
                        <MenuBarsSvg className={`${isSelected ? "hidden" : ""} h-8 w-8`}/>
                        <span className={`${!isSelected ? "hidden" : ""}`}>
                            <CrossSvg className="h-9 w-9"/>
                        </span>
                    </button>
                </div>
            </div>
            <div
                className={`bg-white flex flex-col absolute top-0 right-0 w-full h-full ${!isSelected ? "hidden" : ""} lg:hidden`}
            >
                <LinksList
                    links={links}
                    className="flex gap-4 flex-col items-center justify-center h-2/3 text-2xl font-bold"
                />
            </div>
        </nav>
    );
};

const LinksList = ({links, className}) => {
    return (
        <ul className={className}>
            {links.map((link) =>
                <li className="hover:text-orange-600">
                    <Link href={link.url}>{link.name}</Link>
                </li>
            )}
        </ul>
    )
}

const MenuBarsSvg = ({className}) => {
    return <svg
        alt="menu"
        viewBox="0 0 41 41"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M4.175 34C3.48333 34 2.92708 33.7773 2.50625 33.332C2.08542 32.8867 1.875 32.3284 1.875 31.657C1.875 30.9857 2.08542 30.4417 2.50625 30.025C2.92708 29.6083 3.48333 29.4 4.175 29.4H37.725C38.3842 29.4 38.9323 29.6112 39.3694 30.0337C39.8065 30.4563 40.025 31.0032 40.025 31.6746C40.025 32.3459 39.8065 32.9013 39.3694 33.3408C38.9323 33.7803 38.3842 34 37.725 34H4.175ZM4.175 22.55C3.48333 22.55 2.92708 22.3273 2.50625 21.882C2.08542 21.4367 1.875 20.895 1.875 20.257C1.875 19.5857 2.08542 19.0417 2.50625 18.625C2.92708 18.2083 3.48333 18 4.175 18H37.725C38.3842 18 38.9323 18.2112 39.3694 18.6337C39.8065 19.0563 40.025 19.6032 40.025 20.2746C40.025 20.9126 39.8065 21.4513 39.3694 21.8908C38.9323 22.3303 38.3842 22.55 37.725 22.55H4.175ZM4.175 11.1C3.48333 11.1 2.92708 10.8857 2.50625 10.457C2.08542 10.0284 1.875 9.4617 1.875 8.757C1.875 8.119 2.08542 7.58333 2.50625 7.15C2.92708 6.71667 3.48333 6.5 4.175 6.5H37.725C38.3842 6.5 38.9323 6.71958 39.3694 7.15875C39.8065 7.59795 40.025 8.13655 40.025 8.77455C40.025 9.47925 39.8065 10.043 39.3694 10.4658C38.9323 10.8886 38.3842 11.1 37.725 11.1H4.175Z"
            fill="currentColor"
        />
    </svg>
}


const CrossSvg = ({className}) => {
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
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
};
