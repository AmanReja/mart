import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-[71px] bg-transparent justify-between sm:justify-evenly items-center px-[80px] sticky top-[5px] ">
        <h1 className="text-4xl">Martspell</h1>
        <div className=" w-[800px] justify-center items-center gap-[20px] text-[18px] hidden sm:flex">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>
          <a href="">Clint case studies</a>
          <a href="">Contact us</a>
          <a href="">Career</a>
          <a href="">Shop</a>
          <a href="">Pay now</a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="search"
            fill="#fff"
          >
            <path d="M9 18c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zM9 2C5.1 2 2 5.1 2 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path>
            <path d="M23 24c-.3 0-.5-.1-.7-.3l-8-8c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l8 8c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
