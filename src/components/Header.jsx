import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";
import { AiOutlineClose, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useState } from "react";
import { ThemeContext, translate } from "../App";
import { useContext } from "react";

export default function Header({ scrollRef }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme, language, setLanguage } = useContext(ThemeContext);
  let Links = [
    { name: `${translate[language].home}`, link: "home" },
    { name: `${translate[language].about}`, link: "about" },
    { name: `${translate[language].projek}`, link: "projects" },
    { name: `${translate[language].contact}`, link: "contact" },
  ];

  return (
    <div
      className={`w-full max-w-7xl sticky top-0 z-50 ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-[#1a1a29]"
      }`}
      ref={scrollRef}
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white">KangzBred'z 04</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`${
            theme === "dark"
              ? "absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
              : "absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-black"
          }`}
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 ${
            theme === "dark" ? "bg-[#1a1a29]" : "bg-white"
          } transition-all duration-500 ease-in cursor-pointer ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((l) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={l.name}>
              <Link
                to={l.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="hover:text-white text-primary duration-50"
              >
                {l.name}
              </Link>
            </li>
          ))}
          <li
            className="md:ml-8 md:my-0 my-7 font-semibold relative"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center cursor-pointer text-primary hover:text-white">
              {language === "id" ? "Indonesia" : "English"}
              {dropdownOpen ? (
                <AiFillCaretUp className="ml-2" />
              ) : (
                <AiFillCaretDown className="ml-2" />
              )}
            </div>
            {dropdownOpen && (
              <ul
                className={`absolute top-8 left-0 ${
                  theme === "dark" ? "bg-[#1a1a29]" : "bg-white"
                } border border-gray-300 rounded-md`}
              >
                <li
                  className={`p-2 ${
                    theme === "dark" ? "text-primary" : "text-black"
                  } hover:bg-primary hover:text-white`}
                  onClick={() => {
                    setLanguage("id");
                    setDropdownOpen(false);
                  }}
                >
                  Indonesia
                </li>
                <li
                  className={`p-2 ${
                    theme === "dark" ? "text-primary" : "text-black"
                  } hover:bg-primary hover:text-white`}
                  onClick={() => {
                    setLanguage("en");
                    setDropdownOpen(false);
                  }}
                >
                  English
                </li>
              </ul>
            )}
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold md:mt-1">
            {theme === "light" ? (
              <button onClick={() => setTheme("dark")}>
                <MdDarkMode className="text-primary" />
              </button>
            ) : (
              <button onClick={() => setTheme("light")}>
                <LuSunMedium className="text-primary" />
              </button>
            )}
          </li>
        </ul>
        {/* button */}
      </div>
    </div>
  );
}
