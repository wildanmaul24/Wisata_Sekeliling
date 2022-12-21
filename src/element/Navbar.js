import React, { useEffect, useState } from 'react'
import logo from '../Image/sekeliling.com.png'
import { Link, NavLink } from 'react-router-dom';
import '../style/navstyle.css';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState("/");

    useEffect(() => {
        setActive(window.location.pathname)
    }, [])


    const NavButton = [
        { id: 1, name: "Home", to: "/" },
        { id: 2, name: "Events", to: "/event" },
        { id: 3, name: "Destination", to: "/destination" },
        { id: 4, name: "Your Order", to: "/yourorder" },
        { id: 5, name: "To Do", to: "/todo" }
    ];

    return (
        <header>
            <nav className="w-full bg-white fixed top-0 z-[50] ">
                <div className="justify-between px-4 mx-auto lg:max-w-full lg:items-center lg:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                            <Link to="/">
                                {/* <h2 className="text-2xl font-bold text-white">LOGO</h2> */}
                                <img src={logo} alt='sekeliling.com' className='w-56' />
                            </Link>
                            <div className="lg:hidden">
                                <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-sky-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-sky-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-y-0 lg:space-x-10">
                                {NavButton.map((tombol) => (
                                    <li key={tombol.id}>
                                        <NavLink onClick={() => setActive(tombol.to)} className={(tombol.to === active ? "navbar_link--active" : "text-[#B1B5C3] hover:text-sky-500 font-medium font-poppins")} to={tombol.to}>
                                            {tombol.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden sm:inline-block">
                                <Link
                                    to=""
                                    className="inline-block w-full px-4 py-2 text-center shadow font-poppins"
                                >
                                    Log in
                                </Link>
                                <Link
                                    a=""
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 font-poppins"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 lg:inline-block">
                        <Link
                            to=""
                            className="px-4 py-2 font-bold text-sky-500 hover:text-sky-700 font-poppins"
                        >
                            Login
                        </Link>
                        <Link
                            to=""
                            className="px-4 py-2 text-white bg-sky-500 rounded-full shadow hover:bg-sky-700 font-poppins"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
