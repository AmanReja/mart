import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[30px] bg-transparent   flex  ">
        <div className="flex justify-center w-full h-full items-center gap-[10px] text-white">
          <a href="">Call Us : +91 79088 54829</a>
          <a href="">Email Us : martspelltech@gmail.com</a>
          <a href="">
            Reach Us : Spencer Building Chinar Park, Kolkata – 700136
          </a>
        </div>
        <div className="text-white flex w-[600px] gap-[10px]">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            id="facebook"
            width="30"
            height="30"
            fill="#fff"
          >
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm2.274 6.634h-1.443c-.171 0-.361.225-.361.524V8.6h1.805l-.273 1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545v-.874c0-1.254.87-2.273 2.064-2.273h1.443v1.581z"></path>
          </svg> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 33.867 33.867"
            id="youtube"
          >
            <path
              fill="#fff"
              d="M6.35 3.704h21.167a5.28 5.28 0 0 1 5.291 5.292V24.87a5.28 5.28 0 0 1-5.291 5.292H6.35a5.28 5.28 0 0 1-5.292-5.292V8.996A5.28 5.28 0 0 1 6.35 3.704z"
              paint-order="fill markers stroke"
            ></path>
            <path
              fill="red"
              d="M13.315 21.222c-1.115-.587-1.113-3.646-1.12-4.831-.009-1.186-.053-4.245 1.054-4.844 1.107-.6 3.972.931 5.087 1.518 1.115.586 4.002 2.08 4.01 3.266.008 1.186-2.858 2.714-3.965 3.313-1.107.6-3.95 2.164-5.066 1.578z"
              paint-order="fill markers stroke"
            ></path>
          </svg> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="7.025 7.025 497.951 497.95"
            id="linkedin"
            fill="#fff"
          >
            <linearGradient
              id="a"
              x1="-974.482"
              x2="-622.378"
              y1="1306.773"
              y2="1658.877"
              gradientTransform="translate(1054.43 -1226.825)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#FFF"></stop>
              <stop offset="1" stop-color="#FFF"></stop>
            </linearGradient>
            <path
              fill="url(#a)"
              d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
            ></path>
          </svg> */}
        </div>
      </div>
      <div className="flex w-full h-[71px] bg-[#fff] opacity-[0.57] justify-evenly  items-center px-[80px]">
        <h1 className="text-4xl">Martspell</h1>
        <div className="flex w-[800px] justify-center items-center gap-[20px] text-[18px]">
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
