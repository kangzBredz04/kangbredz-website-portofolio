import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function About() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`px-7 md:px-10 ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      } mb-9`}
      id="about"
    >
      <h1 className="text-3xl  text-primary font-semibold">About Me</h1>
      <p className="md:w-2/3 leading-[2]">
        Hi, my name is Kang Bred'z , i am a Fullstack web developer, UI
        designer, and Mobile developer. I have honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
    </div>
  );
}
