import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import doc from "../assets/TeleMed_img.svg";
import BookADoctor from "./TeleMed-Dashboard/BookDoctor";
import Visits from "./TeleMed-Dashboard/Visits";
import Documents from "./TeleMed-Dashboard/Documents";
import Messages from "./TeleMed-Dashboard/Messages";
import Empty from "./TeleMed-Dashboard/Empty";

export default function TeleMedicine() {
  const location = useLocation();
  const navigate = useNavigate();

  function PathMatchRoute(route) {
    return route === location.pathname;
  }

  const menuItems = [
    { path: "/TeleMedicine/BookDoctor", label: "Book Doctor", component: <BookADoctor /> },
    { path: "/TeleMedicine/Visits", label: "Visits", component: <Visits /> },
    { path: "/TeleMedicine/Documents", label: "Documents", component: <Documents /> },
    { path: "/TeleMedicine/Messages", label: "Messages", component: <Messages /> },
  ];

  const [activeComponent, setActiveComponent] = useState(null);

  const handleClick = (path, component) => {
    navigate(path);
    setActiveComponent(component);
  };

  return (
    <div className="flex">
      <div className="w-[20%] h-[620px] flex flex-col justify-between items-center bg-gradient-to-r from-[#FFE6E2] to-[#CFB9FF]">
        <div>
          <p className="text-[#2C0472] text-2xl pt-8 pb-4 not-italic font-bold leading-[normal] font-family: Poppins;">
            PATIENT DASHBOARD
          </p>
          <ul className="flex flex-col justify-around px-6 h-[300px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`text-lg bg-white border rounded-full flex justify-center items-center w-[200px] h-[43.276px] ${
                  PathMatchRoute(item.path) ? "border-black" : ""
                }`}
                onClick={() => handleClick(item.path, item.component)}
              >
                {item.label}
              </button>
            ))}
          </ul>
        </div>
        <img src={doc} alt="" />
      </div>
      <div label="2" className=" w-[80%]">
        {activeComponent || <Empty/>}
      </div>
    </div>
  );
}
