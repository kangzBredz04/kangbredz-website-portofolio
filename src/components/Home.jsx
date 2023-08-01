import { useContext } from "react";
import { ThemeContext, translate } from "../App";

export default function Home() {
  const { theme, setTheme, language, setLanguage } = useContext(ThemeContext);
  return (
    <div
      className={` md:px-10  md:h-full bg-[#1a1a29] ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      } mb-10`}
      id="home"
    >
      <div
        className={`w-full flex flex-col md:flex-row items-center justify-between `}
      >
        {/* Text */}
        <div
          className={`${
            theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
          }`}
        >
          <h6 className="text-3xl mt-12">{translate[language].hello}</h6>
          <h1 className="font-semibold text-3xl md:text-5xl my-4">
            Wahyu Jebred'z
          </h1>
          <p className="md:w-96">{translate[language].words}</p>

          {/* Buttons */}
          <div className="mt-5">
            <button
              className="btn bg-primary py-2 px-4 text-white rounded 
            hover:bg-white hover:text-primary transition-all duration-500"
            >
              {translate[language].aboutMe}
            </button>
            <button className="btn outline px-6 py-1.5 rounded border-none  ml-5">
              {translate[language].projek2}
            </button>
          </div>
        </div>

        {/* Image Kang Bred'z */}
        <div className="order-first md:order-last relative">
          <img src="/KangBredz.png" alt="" />
        </div>
      </div>

      {/* Divider */}
      {/* <div className="w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block"></div> */}
    </div>
  );
}
