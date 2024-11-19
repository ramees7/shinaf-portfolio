import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Contact() {
  const { theme, textColor } = useContext(ThemeContext);
  return (
    <div
      className={`relative flex justify-center items-center group w-full h-full ${
        theme === "dark" ? "bg-[#222] text-white" : "bg-[#e7e7e7] text-black"
      } overflow-hidden`}
    >
      {/* Initial Text Container */}
      <div className="flex space-x-2 items-center ">
        <h1 className="md:text-5xl text-2xl font-bold uppercase  transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0 ">
          <span>Get</span>
        </h1>
        <h1
          className="md:text-5xl text-2xl font-bold uppercase transition-all duration-500 transform group-hover:translate-y-full group-hover:opacity-0"
          style={{ color: textColor }}
        >
          <span>In Touch</span>
        </h1>
      </div>

      {/* Hovered Text Container */}
      <div className="absolute inset-0 flex justify-center items-center space-x-2">
        <h1
          className="md:text-5xl text-2xl font-bold uppercase transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ color: theme === "dark" ? textColor : "black" }}
        >
          <span>Get</span>
        </h1>
        <h1 className="md:text-5xl text-2xl font-bold uppercase transition-all duration-500 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <span>in touch</span>
        </h1>
      </div>
    </div>
  );
}