import React from "react";
import loginPage from "../assets/portfolio/loginPage.png";
import suwitJepang from "../assets/portfolio/suwitJepang.png";
import onlineShop from "../assets/portfolio/minimalism.png";
import easyRent from "../assets/portfolio/easyRent.png"
import hero from "../assets/portfolio/layoutHero.png";
import menu from "../assets/portfolio/theMenus.png";

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
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-full px-4 py-3 mx-auto m-4 duration-200 hover:scale-105">
                  <p>{details}</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
