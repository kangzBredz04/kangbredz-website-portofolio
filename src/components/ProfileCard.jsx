import React from "react";
import profileImage from "../../public/bg-home.png"; // Adjust the path to your image

function ProfileCard() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-dark text-white mb-10 w-full">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-lg w-3/4 h-auto"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 flex flex-col">
        <h2 className="text-primary text-3xl font-bold mb-2">Who am I?</h2>
        <h1 className="text-3xl font-semibold mb-4">
          I'm Wahyu, Fullstack Developer
        </h1>
        <p className="text-gray-300 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex flex-col justify-between md:flex-row mb-4">
          <div className="w-1/3">
            <div className="mb-2 md:mb-0 md:mr-4 flex gap-10">
              <span className="block font-semibold">Name</span>: Wahyu
            </div>
            <div className="mb-2 md:mb-0 md:mr-4 flex gap-14">
              <span className="block font-semibold">Age</span>: 22
            </div>
          </div>
          <div className="w-2/3">
            <div className="mb-2 md:mb-0 md:mr-4 flex gap-7">
              <span className="block font-semibold">From</span>: Banjar City,
              West Java, Indonesia
            </div>
            <div className="mb-2 md:mb-0 md:mr-4 flex gap-7">
              <span className="font-semibold">Email</span>: wabredz123@gmail.com
            </div>
          </div>
        </div>
        <button className="bg-primary text-white py-3 px-4 hover:bg-hover transition duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
