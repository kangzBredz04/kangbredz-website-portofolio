import { Link, ScrollLink } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Project", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <div className="w-full max-w-7xl">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white">Kang Bred'z 04</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in cursor-pointer ${
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
                className="text-white hover:text-primary duration-500"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
}
