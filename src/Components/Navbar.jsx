import React, { useState } from "react";
import phone from "../assets/icons/phone.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handelopen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex w-full h-[71px] bg-transparent justify-between sm:justify-evenly items-center px-[20px] sticky top-[5px] z-50 ">
        <h1 className="text-4xl">Martspelltech</h1>
        <div
          className={`${
            open ? "flex w-full" : "hidden w-0"
          } sm:flex sm:flex-row flex-col w-full sm:w-auto absolute sm:static top-[80px] sm:backdrop-blur-none  backdrop-blur-md    left-0  justify-center items-center gap-[20px] text-[18px]`}
        >
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/aboutus"
          >
            About Us
          </Link>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/contactus"
          >
            Contact us
          </Link>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/carrer"
          >
            Carrer
          </Link>
        </div>

        <div className="sm:hidden flex">
          <a
            onClick={() => {
              handelopen();
            }}
            className="text-white flex justify-center items-center bg-yellow-500 p-2 rounded-full text-2xl"
          >
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                fill="#fff"
              />
              <path
                d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                fill="#fff"
              />
              <path
                d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
