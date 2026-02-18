import React from "react";
import Logo from "../assets/logo.png";
import "../styles/footer.css";


const linkSection = [
  {
    tag: "Email:",
    link: "shubh24dewangan@gmail.com",
    href: "mailto:shubh24dewangan@gmail.com",
  },
  {
    tag: "Github:",
    link: "https://www.github.com/Shubh24Dewangan",
    href: "https://www.github.com/Shubh24Dewangan",
  },
];

const Footer = () => {
  return (
    <div className="text-amber-50 p-10 md:p-0 flex flex-col rounded-t-3xl mx-1 md:mx-0 items-center md:px-40 bg-gray-800 ">
      <div className="bg flex flex-col gap-10 md:flex-row md:py-4 w-full md:justify-between">
        <div className="flex w-1/2 md:justify-between text-[10px] md:text-[13px] gap-3">
          <img
            className="h-0 w-0 md:h-[110px] md:w-[155px] -translate-x-3 md:-translate-x-6"
            src={Logo}
            alt=""
          />
          <div className="flex flex-col gap-4">
            {linkSection.map((li) => {
              return (
                <div className="text-amber-50 text-[13px] md:text-[14px] flex flex-col">
                  <h5 className="font-semibold py-1">{li.tag}</h5>
                  <a
                    href={li.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {li.link}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:w-1/3 flex text-[12px] mb-2 md:mb-0 gap-3 flex-col justify-between md:text-right">
          <h2>
            I am working on another Major Section of this porfolio which will be
            my Art showcasing section...
          </h2>
          <h3 className="text-amber-50 md:p-2">
            Building creative and new things is what i love, cause I remember a
            line "What is this Earth without Art, just a Rock"!!
          </h3>
        </div>
      </div>
      <h5 className="p-2 translate-y-5 text-indigo-300 text-[10px] md:text-[13px] text-center">
        © 2026 Shubh Dewangan. All rights reserved.
      </h5>
    </div>
  );
};

export default Footer;
