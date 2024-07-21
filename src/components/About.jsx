import React from "react";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function About() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`px-10 md:px-10 ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      } mb-9`}
      id="about"
    >
      <h1 className="text-3xl text-primary font-semibold">About Me</h1>
      <p className="text-justify leading-7 ">
        Hi, my name is Kang Bred'z , i am a Fullstack web developer, UI
        designer, and Mobile developer. I have honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skiills i have. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Pariatur error nesciunt qui dicta
        itaque corrupti obcaecati nihil laboriosam non? Quisquam quod officia
        repellendus, numquam error quam quia est vero illo? A inventore
        repudiandae corporis facilis! Deserunt eveniet velit similique
        accusantium quos, enim dignissimos quae in labore eaque saepe!
        Asperiores iste dicta voluptate non consequatur architecto quos totam
        dolor quod aspernatur.
      </p>
    </div>
  );
}
