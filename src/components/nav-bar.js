"use client";

import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Experience" },
    { id: 2, text: "Projects" },
    { id: 3, text: "Resume" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="bg-slate-300 flex justify-between items-center h-14 max-w-[1240px] lg:max-w-full mx-auto px-8 text-gray-600">
      {/* Logo */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">TF</h1>
      </div>
      <div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 cursor-pointer duration-300 hover:text-gray-800"
            >
              {item.text}
            </li>
          ))}
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-slate-300 ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">TF</h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-2 border-b rounded-xl duration-300 hover:text-gray-900 cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex">
        <ul className="flex gap-2">
          <li className="hover:cursor-pointer hover:text-gray-900">
            <AiOutlineInstagram size={22} />
          </li>
          <li className="hover:cursor-pointer hover:text-gray-900">
            <AiOutlineTwitter size={22} />
          </li>
          <li className="hover:cursor-pointer hover:text-gray-900">
            <AiOutlineLinkedin size={22} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
