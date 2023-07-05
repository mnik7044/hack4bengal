import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function PathMatchRoute(route) {
    return route === location.pathname;
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className=" @apply h-[65px] flex  justify-between items-center px-3  mx-auto">
        <div className="@apply flex items-center w-[276px] h-[77px] shrink-0;">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2382/2382461.png"
            alt="realtor-logo"
            className="@apply w-[60px] h-[60px] shrink-0; cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="@apply text-[#233348] text-4xl not-italic font-bold leading-[normal] pl-3
  font-family: Poppins; cursor-pointer" onClick={() => navigate("/")}>HEALIFY</p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 cursor-pointer text-mb font-semibold ${
                PathMatchRoute("/")
                ? "text-black"
                : "text-gray-400"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 cursor-pointer text-mb font-semibold ${
                PathMatchRoute("/TeleMedicine")
                ? "text-black"
                : "text-gray-400"
              }`}
              onClick={() => navigate("/TeleMedicine")}
            >
              Tele Medicine
            </li>
            <li
              className={`py-3 cursor-pointer text-mb font-semibold ${
                PathMatchRoute("/MentalHealth")
                ? "text-black"
                : "text-gray-400"
              }`}
              onClick={() => navigate("/MentalHealth")}
            >
              Mental Health
            </li>
            <li
              className={`py-3 cursor-pointer text-mb font-semibold ${
                PathMatchRoute("/GenericMedicine")
                ? "text-black"
                : "text-gray-400"
              }`}
              onClick={() => navigate("/GenericMedicine")}
            >
              Generic Medicine
            </li>
            <li
              className={`py-3 cursor-pointer text-mb font-semibold ${
                PathMatchRoute("/AboutUs")
                ? "text-black"
                : "text-gray-400"
              }`}
              onClick={() => navigate("/AboutUs")}
            >
              About Us
            </li>
            <li
              className={`py-3 cursor-pointer text-mb font-semibold pr-3 ${
                PathMatchRoute("/Sign-In")
                  ? "text-black"
                  : "text-gray-400"
              }`}
              onClick={() => navigate("/Sign-In")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
