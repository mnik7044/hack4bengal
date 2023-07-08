import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import doc from "../assets/TeleMed_img.svg";

export default function TeleMedicine() {
  const location = useLocation();
  const navigate = useNavigate();

  function PathMatchRoute(route) {
    return route === location.pathname;
  }

  const menuItems = [
    { path: "/TeleMedicine/BookADoctor", label: "Book A Doctor" },
    { path: "/TeleMedicine/Visits", label: "Visits" },
    { path: "/TeleMedicine/Documents", label: "Documents" },
    { path: "/TeleMedicine/Messages", label: "Messages" },
  ];

  return (
    <div className=" border-b shadow-sm h-[620px]">
      <div className="w-[300px] h-[620px] flex flex-col justify-between items-center bg-gradient-to-r from-[#FFE6E2] to-[#CFB9FF]">
        <div>
          <p className="text-[#2C0472] text-2xl pt-8 pb-4 not-italic font-bold leading-[normal] font-family: Poppins;">
            PATIENT DASHBOARD
          </p>
          <ul className="flex flex-col justify-around px-6 h-[300px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={` text-lg bg-white border  rounded-full flex justify-center items-center w-[200px] h-[43.276px] ${
                  PathMatchRoute(item.path) ? "border-black" : ""
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </button>
            ))}
          </ul>
        </div>
        <img src={doc} alt="" />
      </div>
    </div>
  );
}
