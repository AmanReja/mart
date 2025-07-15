import React from "react";
import phone from "../assets/icons/phone.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-[71px] bg-transparent justify-between sm:justify-evenly items-center px-[20px] sticky top-[5px] ">
        <h1 className="text-4xl">Martspell</h1>
        <div className=" w-[800px] justify-center items-center gap-[20px] text-[18px] hidden sm:flex">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>

          <a href="">Contact us</a>
        </div>
        <div>
          <a
            className="text-white flex justify-center items-center bg-yellow-500 p-2 rounded-full text-2xl"
            href="tell-7908854829"
          >
            <div className="hidden sm:block">Call Us</div>
            <img className="w-[40px] h-[40px]" src={phone} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
