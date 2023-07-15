import React from "react";

export default function Footer() {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Kang Bred'z 04</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">Web Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">Designed by KangBred'z04</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
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
  );
}
