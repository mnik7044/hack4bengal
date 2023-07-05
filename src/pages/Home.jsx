import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      {/*Typewriter */}
      <div
        className=" @apply flex pt-60 pl-4 flex-col shrink-0 text-[#2C0472] text-[64px] not-italic font-normal leading-[normal];
      font-family: Lato;"
      >
        <h1 className="Hero-text">At Healify we save</h1>
        <span
          className="@apply flex w-[100vh] h-[40vh] flex-col shrink-0 text-[#2C0472] text-[64px] not-italic font-normal leading-[normal];
       font-bold;"
        >
          Your {word}
        </span>
      </div>
      {/*book doctors */}
    </div>
  );
}
