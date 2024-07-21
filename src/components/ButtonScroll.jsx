import React from "react";
import { useEffect } from "react";
import { RxPinTop } from "react-icons/rx";

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
      className="sticky top-3/4 left-full z-20 mr-5 -mb-12  w-12 h-12 bg-[#7C96AB] p-4 rounded-full cursor-pointer"
      onClick={() => {
        handleScroll(scrollRef.current);
      }}
    >
      <RxPinTop />
    </div>
  );
}

export default ButtonScroll;
