import React, { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-b from-black sm:bg-none p-4 sm:px-16 sm:py-6 absolute top-0 left-0 z-40">
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[26px] lg:text-[36px] font-bold cursor-pointer">
            HP
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[20px] font-bold cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-16 right-4 w-48 z-30 bg-black/90 rounded-lg shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium cursor-pointer ${
                    active === nav.id ? "text-white" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
