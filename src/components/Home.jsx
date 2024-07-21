import { useContext } from "react";
import { ThemeContext, translate } from "../App";
import Typical from "react-typical";
import kangBredzImage from "../../public/bg-home.png"; // Adjust the path to your uploaded image

export default function Home() {
  const { theme, language } = useContext(ThemeContext);

  return (
    <div
      className={`w-full bg-cover bg-center ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      } mb-10`}
      id="home"
    >
      <div
        className={`w-full h-full flex flex-col md:flex-row items-center justify-between bg-opacity-50 ${
          theme === "dark"
            ? "bg-[#1a1a29] bg-opacity-75"
            : "bg-white bg-opacity-75"
        } p-6 rounded-lg`}
      >
        {/* Text */}
        <div
          className={`text-center md:text-left p-4 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <h6 className="text-3xl mt-12">{translate[language].hello}</h6>
          <h1 className="font-medium text-3xl md:text-5xl my-4">
            I am{" "}
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
                "Fullstack Developer",
                2000,
              ]}
            />
          </h1>
          <p className="md:w-96 leading-7">{translate[language].words}</p>

          {/* Buttons */}
          <div className="mt-5 flex justify-center md:justify-start">
            <button className="btn bg-primary py-2 px-5 text-white w-44 hover:bg-white hover:text-primary transition-all duration-500 text-lg font-medium tracking-wide">
              {translate[language].contact} Me
            </button>
            {/* <button className="btn outline px-6 py-1.5 rounded border-none ml-5">
              {translate[language].projek2}
            </button> */}
          </div>
        </div>

        {/* Image Kang Bred'z */}
        <div className="order-first md:order-last relative hidden md:block w-1/3 mr-20">
          {/* <img src={kangBredzImage} alt="Kang Bred'z" /> */}
          <img src="KangzBredz.png" alt="Kang Bred'z" />
        </div>
      </div>
    </div>
  );
}
