import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Contact() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`md:px-10 px-7 my-10 ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      }`}
      id="contact"
    >
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-primary font-semibold text-3xl mt-16">
            Connect with me:
          </h1>
          <p className="my-3  md:w-3/4 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          {/* social icons */}
          <div className="flex ">
            <a href="#" target="_blank" rel="noreferrer">
              <img src="/facebook.png" alt="" />
            </a>
            <a className="ml-4" href="#" target="_blank" rel="noreferrer">
              <img src="/instagram.png" alt="" />
            </a>
            <a className="ml-4" href="#" target="_blank" rel="noreferrer">
              <img src="/github.png" alt="" />
            </a>
            <a className="ml-4" href="#" target="_blank" rel="noreferrer">
              <img src="/linkedin.png" alt="" />
            </a>
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className="mt-16  text-2xl mb-6">
            Contact me, let's make magic together
          </p>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Name:"
              className={` py-3 px-3 md:w-3/4 w-full rounded ${
                theme === "dark"
                  ? "bg-[#27374D] text-white placeholder:text-white "
                  : "bg-[#ECF2FF] text-black placeholder:text-black"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email:"
              className={` py-3 px-3 md:w-3/4 w-full rounded  my-3 ${
                theme === "dark"
                  ? "bg-[#27374D] text-white placeholder:text-white "
                  : "bg-[#ECF2FF] text-black placeholder:text-black"
              }`}
            />
            <textarea
              name="message"
              id="message"
              cols="54"
              rows="4"
              className={` py-3 px-3 md:w-3/4 w-full rounded mb-2 ${
                theme === "dark"
                  ? "bg-[#27374D] text-white placeholder:text-white "
                  : "bg-[#ECF2FF] text-black placeholder:text-black"
              }`}
              placeholder="Message:"
            ></textarea>
            <button
              className={`btn transition-all duration-500  py-2 px-12 rounded text-white  block ${
                theme === "dark"
                  ? "bg-primary hover:bg-white hover:text-primary"
                  : "bg-primary hover:bg-primary hover:text-white"
              }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
