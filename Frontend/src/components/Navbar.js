import React from "react";
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="/login" class="text-sky-800 hover:bg-sky-500 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2  focus:outline-none">Log in</a>
                        <a href="/register" class="text-sky-900 bg-sky-400 hover:bg-sky-500 hover:text-white focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Register</a>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-0 lg:mt-0">
                            <li>
                                <a href="/home" class="lg:text-sky-800 hover:bg-sky-500 hover:lg:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md py-2.5 px-5 mr-2 focus:outline-none" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="room-type" class="lg:text-sky-800 hover:bg-sky-500 hover:lg:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md py-2.5 px-5 mr-2 focus:outline-none">Type Room</a>
                            </li>
                            <li>
                                <a href="/booking" class="lg:text-sky-800 hover:bg-sky-500 hover:lg:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md py-2.5 px-5 mr-2 focus:outline-none">My Booking</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*             
                            {/* ini kalau semisal sudah login 
                            <div className="hidden sm:block sm:ml-1 mx-10">
                                <div className="menu flex space-x-4 ml-10 ">
                                    <NavLink to="/home" className="no-underline text-gray-800 hover:bg-sky-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium" aria-current="page">Home</NavLink>
                                    <NavLink to="/services" className="no-underline text-gray-800 hover:bg-sky-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Services</NavLink>
                                    <NavLink to="/rooms" className="no-underline text-gray-800 hover:bg-sky-600 hover:text-white px-3 py-3 rounded-md text-sm font-medium " aria-current="page">Rooms</NavLink>
                                    <NavLink to="/logincust" className="bg-transparent hover:bg-sky-600 text-sky-600 font-semibold hover:text-white py-2 px-3 border border-sky-500 hover:border-transparent rounded-md" aria-current="page" id="profile" variant="outlined">Login</NavLink>
                                    <NavLink to="/registercust" className="no-underline text-gray-800 bg-sky-600 hover:bg-sky-700 hover:text-white px-4 py-3 rounded-md text-sm font-medium" aria-current="page" id="profile">Register</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
            </div>
        */}
        </div>
    );
}
