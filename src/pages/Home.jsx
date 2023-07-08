import "../index.css";
import Type from "./Home/Type";
import Card from "./Home/Card";
import Nurse_svg from "./Home/Nurse_svg";
import Searchbar from "./Home/Searchbar";
import React, { useState, useEffect } from "react";
import background from "../assets/back.png";
import doctors from "../assets/doctors.png";
import CardStack from "./Home/CardStack";
import Testimonials from "./Home/Testimonial";
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
      <img className="relative pt-20 right-32 shrink-0" src={background}></img>
      <CardStack></CardStack>
      <img
        className="absolute left-20 top-[160vh]  w-[356px] h-[356px]"
        src={doctors}
      ></img>

      {/* Testimonial page */}

      <Testimonials></Testimonials>
    </div>
  );
}
