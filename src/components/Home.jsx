import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Me from "../assets/me.jpg";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black to-gray-900 pt-5"
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:w-full">
          <h4 className="text-4xl text-gray-400 sm:text-6xl font-bold">
            I'm Junior Web Developer
          </h4>
          <p className="py-4 max-w-md text-white">
            Designing the web with creativity. I‘m passionate about creating
            interfaces that are fun, useful and user sentric. Currently, I love
            to using technologies like React or Vue, Tailwind on web
            application.
          </p>

          <div className="">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group bg-gradient-to-r from-slate-950 to-slate-900 text-white my-2 w-fit px-6 py-3 flex items-center rounded-md cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="text-white ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-[70%]"
            src={Me}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
