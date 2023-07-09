import "../index.css";
import Card from "./Home/Card";
import Type from "./Home/Type";
import Nurse_svg from "./Home/Nurse_svg";
import Searchbar from "./Home/Searchbar";
import React, { useState, useEffect } from "react";
import background from "../assets/back.png";
import doctors from "../assets/doctors.png";
import CardStack from "./Home/CardStack";
import image from "../assets/image1.png";
import image1 from "../assets/image4.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import ArticleCard from "./Home/ArticleCard";
export default function Home() {
  // const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // function getCurrentDimension() {
  //   return {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  // }
  return (
    <div className="flex flex-wrap content-center w-full ">
      <div className="relative flex justify-between h-80">
        <Type></Type>
        <Nurse_svg></Nurse_svg>
      </div>

      <div className=" inline-block font-bold static w-full pt-[4rem] pl-10 h-[47vh] text-[47px] bg-violet-1">
        <h1>Book Doctors</h1>
        <h2>According to your location</h2>
        <Searchbar></Searchbar>
      </div>

      {/* SERVICES */}

      <h1 className="relative pt-20 pl-10 text-5xl font-extrabold top-14">
        Services we provide
      </h1>
      <img
        className="relative flex -pt-[32px] left-[13rem] shrink-0"
        src={background}
      ></img>
      <CardStack></CardStack>
      <img
        className="absolute left-20 top-[180vh]  w-[356px] h-[356px]"
        src={doctors}
      ></img>

      <div>
        <div className="pl-10 font-bold text-8xl font-Lato">
          Wanna read about diseases and their symptoms ?
        </div>
        <div>
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative p-10 left-4 ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none"></div>
              <input
                type="text"
                id="simple-search"
                className="block w-[82vw] p-5 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-100 focus:ring-violet-50 focus:border-violet-50 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Condition/Doctor/Procedure      |      City/State/Pin-Code   "
                required=""
              />
            </div>

            <button
              type="submit"
              className="relative p-5 ml-2 text-white bg-blue-700 border border-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>

              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="relative justify-between inline-flex flex-row ml-[4.5rem] w-[80%]">
        <ArticleCard pic={image}></ArticleCard>
        <ArticleCard pic={image1}></ArticleCard>
        <ArticleCard pic={image2}></ArticleCard>
        <ArticleCard pic={image3}></ArticleCard>
      </div>
    </div>
  );
}
