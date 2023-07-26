import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Project() {
  const { theme, setTheme } = useContext(ThemeContext);
  const projects = [
    {
      title: "PROJECT 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur similique porro fugit eos, dicta veritatis consequuntur veniam corrupti nam odio delectus. Voluptatum atque voluptatibus aliquid suscipit quos, quaerat voluptate?",
      photo: "/Code 1.jpeg",
      url: "https://github.com/kangzBredz04/project-vba-excel.git",
    },
    {
      title: "PROJECT 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur similique porro fugit eos, dicta veritatis consequuntur veniam corrupti nam odio delectus. Voluptatum atque voluptatibus aliquid suscipit quos, quaerat voluptate?",
      photo: "/Code 2.jpeg",
      url: "https://github.com/kangzBredz04/projekan-html-wahyu.git",
    },
    {
      title: "PROJECT 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur similique porro fugit eos, dicta veritatis consequuntur veniam corrupti nam odio delectus. Voluptatum atque voluptatibus aliquid suscipit quos, quaerat voluptate?",
      photo: "/Code 3.jpeg",
      url: "https://github.com/kangzBredz04/uts-react-kebab-case.git",
    },
  ];
  return (
    <div
      className={`md:px-10 px-7 ${
        theme === "dark" ? "bg-[#1a1a29] text-white" : "bg-white text-black"
      }`}
      id="projects"
    >
      <h1 className="text-primary font-semibold text-3xl ">
        Featured projects:
      </h1>
      <p className="my-3  md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col shadow-sm md:w-[343px]  p-4 rounded ${
                theme === "dark"
                  ? "bg-[#070A52] text-white"
                  : "bg-[#DBDFEA] text-black"
              }`}
            >
              <a rel="noreferrer" className="mb-4 my-auto">
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className="  mt-1">{project.description}</p>
              <div className="mt-5 flex">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                  About Projects
                </button>
                <button
                  className={`btn outline py-1.5 px-9 rounded border-none ml-5 ${
                    theme === "dark"
                      ? "bg-[#070A52] text-white"
                      : "bg-[#DBDFEA] text-black"
                  } `}
                >
                  <a href={project.url}>View Projects </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
