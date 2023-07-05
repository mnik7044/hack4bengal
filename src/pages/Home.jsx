import React from "react";
import "../index.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import nurse from "../assets/Landingpage.svg";
export default function Home() {
  const [word] = useTypewriter({
    words: ["Life!", "Money!", "Time!"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
    cursorStyle: "|",
  });
  return (
    <div>
      <div className=" flex justify-between">
        {/*Typewriter */}
        <div
          className="justify-between pt-20 pl-4 mb-0 h-[50vh] flex-col shrink-0 text-[#2C0472] text-[64px] not-italic font-normal leading-[normal];
      font-family: Lato;"
        >
          <h1 className=" text-4xl">At Healify we can save</h1>
          <span
            className="@apply flex w-[550px] flex-col shrink-0 text-[#2C0472] text-6xl not-italic font-normal leading-[normal];
       font-bold;"
          >
            Your {word}
          </span>
        </div>
        <img
          src={nurse}
          alt="Bleh"
          className=" absolute h-[550px] w-500px] top-[45px] pr-20 right-0"
        />
      </div>
      <div className=" font-semibold static w-[100vw] -top- pl-4 h-[500px] text-[40px] bg-violet-300">
        <h1>Book Doctors</h1>
        <h2>According to your location</h2>
      </div>
      {/*book doctors */}
    </div>
  );
}
