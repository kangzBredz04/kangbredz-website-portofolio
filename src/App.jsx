import { createContext } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import { useState } from "react";

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`max-w-7xl mx-auto ${
          theme === "dark"
            ? "bg-[#1a1a29] text-white"
            : "bg-white text-black"
        }`}
      >
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
