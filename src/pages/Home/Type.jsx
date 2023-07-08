import React from "react";
import { useTypewriter } from "react-simple-typewriter";
export default function Type() {
  const [word] = useTypewriter({
    words: ["Your Life", "Your Money", "Your Time"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    cursorStyle: "|",
  });
  const [heading] = useTypewriter({
    words: ["At Healify we can save"],
  });
  return (
    <div className=" appear justify-between pt-20 pl-4 mb-0  flex-col shrink-0 text-[#2C0472] text-[64px] not-italic font-normal leading-[normal]">
      <h1 className="font-light text-7xl ">{heading}</h1>
      <span className=" font-extrabold text-8xl flex w-[550px] flex-col shrink-0 text-[#2C0472] not-italic leading-[normal];">
        {word}
      </span>
    </div>
  );
}
