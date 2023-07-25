import React, { useState } from "react";
import Navlink from "./Navlink";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div
      className={`flex justify-between items-center w-full px-4 py-2 bg-black fixed`}
    >
      <div>
        <h1 className="text-lg font-medium text-gray-300 cursor-pointer">
          mrifadlli
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Navlink
            key={id}
            link={link}
            className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-105 duration-200 capitalize"
          />
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-10 text-gray-300 font-normal"
      >
        {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900">
          {links.map(({ id, link }) => (
            <Navlink
              key={id}
              link={link}
              className="px-4 hover:scale-105 duration-150 cursor-pointer capitalize py-6 text-3xl text-gray-300"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
