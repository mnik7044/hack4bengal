import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function PathMatchRoute(route) {
    return route === location.pathname;
  }

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/TeleMedicine", label: "Tele Medicine" },
    { path: "/HospitalServices", label: "Hospital Services" },
    { path: "/GenericMedicine", label: "Generic Medicine" },
    { path: "/AboutUs", label: "About Us" },
    { path: "/Sign-In", label: "Sign In" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <header className="h-[65px] flex justify-between items-center px-3 mx-auto">
        <div className="flex items-center w-[276px] h-[77px] shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png"
            alt="realtor-logo"
            className="w-[60px] h-[60px] shrink-0 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p
            className="text-[#233348] text-4xl not-italic font-bold leading-normal pl-3 font-family: Poppins cursor-pointer"
            onClick={() => navigate("/")}
          >
            HEALIFY
          </p>
        </div>
        <div className="pr-6 ">
          <ul className="flex space-x-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`py-3 cursor-pointer text-mb font-semibold ${
                  PathMatchRoute(item.path) ? "text-black" : "text-gray-400"
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
