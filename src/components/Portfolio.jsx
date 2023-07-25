import React from "react";
import loginPage from "../assets/portfolio/loginPage.png";
import suwitJepang from "../assets/portfolio/suwitJepang.png";
import onlineShop from "../assets/portfolio/minimalism.png";
import easyRent from "../assets/portfolio/easyRent.png";
import hero from "../assets/portfolio/layoutHero.png";
import menu from "../assets/portfolio/theMenus.png";
import mealshunter from "../assets/portfolio/mealshunter.png";
import { PiArrowSquareInBold } from "react-icons/pi";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: loginPage,
      details: "Login Page",
    },
    {
      id: 2,
      src: suwitJepang,
      details: "Game Suwit",
    },
    {
      id: 3,
      src: onlineShop,
      details: "E-commerce (on-going)",
    },
    {
      id: 4,
      src: easyRent,
      details: "Easy Rent",
    },
    {
      id: 5,
      src: hero,
      details: "Promo Hero",
    },
    {
      id: 6,
      src: menu,
      details: "The Menu's  ",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-300 p-2 font-bold border-b-2 border-[#eeeeee] w-full">
            Portfolio
          </p>
          <p className="py-4 text-white">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 container mx-auto">
          {portfolios.map(({ id, src, details }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <div className="">
                <a
                  href="https://github.com/mrifadlli?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                  />
                </a>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-full px-4 py-3 mx-auto m-4 duration-200 hover:scale-105 cursor-text">
                  {details}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="md:mt-11 mt-10 md:mx-auto px-12 sm:px-0 container">
          <p className="text-4xl text-gray-300 p-2 font-bold border-b-2 border-[#eeeeee] w-full">
            Latest Project
          </p>
          <div className="shadow-md shadow-gray-600 rounded-lg mt-7">
            <div className="">
              <a
                href="https://mealshunter-mrifadlli.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={mealshunter}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center items-center py-8">
              <a
                href="https://mealshunter-mrifadlli.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 py-2 text-gray-300 text-lg tracking-wide px-9 rounded hover:scale-95 duration-200 flex items-center text-center gap-2"
              >
                View
                <PiArrowSquareInBold />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
