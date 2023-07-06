import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import icon1 from "../assets/Group 45.svg";
import icon2 from "../assets/Group 46.svg";
import icon3 from "../assets/Group 47.svg";
import icon4 from "../assets/Group 48.svg";
import icon5 from "../assets/Group 49.svg";
import icon6 from "../assets/Group 50.svg";

const FooterLink = ({ title, items }) => (
  <div className="w-[30%] h-[100%] p-2 flex flex-col justify-between">
    <h1 className="text-white text-2xl font-semibold leading-normal tracking-wider">
      {title}
    </h1>
    <ul className="text-white text-base font-normal leading-normal tracking-wide">
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const linkSections = [
    {
      title: "KNOW US",
      items: [
        { title: "ABOUT", path: "/AboutUs" },
        { title: "PROJECT DETAILS", path: "/project-details" },
      ],
    },
    {
      title: "SECURITY",
      items: [
        { title: "PRIVACY POLICY", path: "/privacy-policy" },
        { title: "TERMS OF USE", path: "/terms-of-use" },
      ],
    },
    {
      title: "SUPPORT",
      items: [
        { title: "FAQ", path: "/faq" },
        { title: "CONTACT US", path: "/contact-us" },
      ],
    },
  ];

  const socialIcons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="h-60 p-6 bg-black">
      <div className="h-[80%] flex justify-between items-center">
        <div className="h-[100%]">
          <img src={logo} alt="" className="h-[100%]" />
        </div>
        <div className="w-[75%] h-[100%] flex flex-col justify-between">
          <div className="w-full h-[65%] flex justify-between">
            {linkSections.map((section, index) => (
              <FooterLink
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
          <div className="w-full h-[20%] flex justify-between items-center">
            <div className="w-[50%] text-center text-yellow-400 text-base font-normal leading-normal">
              Where Health Meets Hope
            </div>
            <div className="w-[30%] flex justify-between">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={`icon${index + 1}`} className="h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center my-4 before:border-t before:flex-1 before:border-yellow-400 after:border-t after:flex-1 after:border-yellow-400"></div>
      <div className="h-[15%] flex justify-between text-white text-base font-normal leading-normal tracking-wide">
        <p>Copyright© CareConnect 2023</p>
        <p>Powered by CareConnect</p>
      </div>
    </div>
  );
};

export default Footer;
