import { createContext } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import { useState } from "react";
import { useRef } from "react";
import { RxPinTop } from "react-icons/rx";
import { useEffect } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
  language: null,
  setLanguage: () => {},
});

export const translate = {
  en: {
    hello: "Hello I'm",
    words:
      "Software development enthusiast that has a high learning curve, seek best practices, stay up-to-date on emerging technologies, and eager to learn something new",
    aboutMe: "About Me",
    home: "Home",
    about: "About",
    projek: "Project",
    contact: "Contact",
    projek2: "Projects",
  },
  id: {
    hello: "Halo saya",
    words:
      "Penggemar pengembangan perangkat lunak yang memiliki kurva belajar tinggi, mencari praktik terbaik, selalu mengikuti perkembangan teknologi baru, dan bersemangat untuk mempelajari sesuatu yang baru",
    aboutMe: "Tentang saya",
    home: "Beranda",
    about: "Tentang",
    projek: "Projek",
    contact: "Contact",
    projek2: "Projek",
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const scrollRef = useRef(null);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(
      `${
        theme === "dark"
          ? "Berhasil mengubah tema menjadi gelap"
          : "Berhasil mengubah tema menjadi terang"
      }`
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <div
        className={`max-w-7xl mx-auto ${
          theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
        }`}
      >
        <Header scrollRef={scrollRef} />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
        {/* <ButtonScroll s /> */}
        <div
          className="absolute right-2 bg-red-600 p-4  rounded-full cursor-pointer"
          onClick={() => {
            handleScroll(scrollRef.current);
          }}
        >
          <RxPinTop />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
