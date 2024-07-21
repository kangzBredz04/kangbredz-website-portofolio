import React from "react";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ButtonScroll({ scrollRef }) {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onScroll={useEffect(() => {
        window.addEventListener("scroll", () => {
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          console.log("Scroll Top:", scrollTop);
        });
        () => {
          window.removeEventListener("scroll", () => {
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            // console.log("Scroll Top:", scrollTop);
          });
        };
      }, [])}
      className="sticky top-3/4 left-full z-50  w-12 h-12 bg-transparent border-[1px] border-white  flex items-center justify-center  cursor-pointer"
      onClick={() => {
        handleScroll(scrollRef.current);
      }}
    >
      <IoIosArrowUp size={26} />
    </div>
  );
}

export default ButtonScroll;
