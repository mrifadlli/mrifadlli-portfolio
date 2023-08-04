import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: vue,
      title: "Vue",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: express,
      title: "Express Js",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-full bg-gradient-to-t from-black to-gray-900 pt-3"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-2 border-[#eeeeee] p-2 text-gray-300">
            Experience
          </p>
          <p className="text-gray-300 py-2">
            These are technologies I've worked with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 sm:grid-cols-3 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="cursor-pointer w-20 mx-auto" />
              <p className="text-white my-4 md:my-3 text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
