import React from "react";
import "../Banner.css";
import lap from "../assets/Images/ring.png";
import im2 from "../assets/Images/Img.png";

import im3 from "../assets/Images/pat.png";
import i1 from "../assets/icons/Icon1.png";
import i2 from "../assets/icons/Icon7.png";
import i3 from "../assets/icons/Icon3.png";
import i4 from "../assets/icons/Icon2.png";
import i5 from "../assets/icons/Icon5.png";
import i6 from "../assets/icons/Icon6.png";
// import i1 from "../assets/icons/icon1.png";
import Banner from "./Banner";
// import Container3d from "./Container3d";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="w-full h-auto">
        <div className="" id="">
          <div>
            <div
              style={{ fontFamily: "devil breeze " }}
              className="text-center text-lime-400 text-5xl font-bold px-[5px]  w-full "
            >
              The Service We
              <div>provide for you</div>
            </div>

            <div className=" w-full h-auto  relative top-[50px] flex flex-wrap px-[90px] items-center justify-center gap-[10px]">
              <div className="flex w-[284px] min-h-[284px] min-w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px] ">
                <img className="w-[40px] h-[40px]" src={i1} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Development
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] min-h-[284px] min-w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px] ">
                <img className="w-[40px] h-[40px]" src={i2} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  UI/UX Designer
                </h1>
                <p className="text-center">
                  We provide UI/UX Design services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[40px] h-[40px]" src={i3} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Photography
                </h1>
                <p className="text-center">
                  We provide Photography services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[40px] h-[40px]" src={i4} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Videography
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[40px] h-[40px]" src={i5} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Motion Graphik
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[40px] h-[40px]" src={i6} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Graphik Designer
                </h1>
                <p className="text-center">
                  We provide Graphic Design services, with the best designers
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            {" "}
            <img
              src={im2}
              className=""
              alt
              style={{ width: "30vw", bottom: -100, right: 0 }}
            />
            <img
              src={im3}
              className="decorate "
              alt
              style={{ width: "20vw", bottom: 0, left: 0 }}
            />
          </div>
        </div>

        <div
          style={{ fontFamily: "devil breeze" }}
          className="flex flex-col px-[20px] sm:px-[80px] text-left sm:text-center w-full"
        >
          <div className="text-9xl text-center sm:text-left">01</div>
          <div className="w-full sm:w-[600px] text-left text-5xl sm:text-[60px] ">
            <div className="text-left">
              MART SPELL TECH Where truly great things can happen
            </div>
          </div>
        </div>

        <div className="bg-transparent">
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <span className="text-blue-600 font-semibold text-lg">
                  WHY CHOOSE US
                </span>
                <h2 className="mt-2 text-3xl font-bold  sm:text-4xl">
                  OUnique Pricing Plans
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  Discover what makes our product stand out from the
                  competition.
                </p>
              </div>
              {/* Features Grid */}
              <div className="flex gap-[50px] justify-center items-center  w-full flex-wrap">
                {/* Feature 1 */}
                <div className="backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[350px] h-[250px]">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold  mb-3">
                    eCommerce Website
                  </h3>
                  <p className="">
                    Designed for ease and speed — intuitive shopping, secure
                    checkout, and smart product management for users and admins
                    alike.
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[350px] h-[250px]">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold  mb-3">
                    Portfolio Website
                  </h3>
                  <p className="">
                    A sleek, personal portfolio built for clarity and impact —
                    showcasing projects, skills, and experience with smooth
                    navigation and thoughtful design.
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[350px] h-[250px]">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold  mb-3">
                    Social Media Marketing
                  </h3>
                  <p className="">
                    Strategic content, smart targeting, and real-time engagement
                    — built to grow brand visibility and connect with audiences
                    where they scroll.
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[350px] h-[250px]">
                  <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold  mb-3">
                    Google My Business
                  </h3>
                  <p className="">
                    Optimized listings that put your business on the map —
                    enhancing local visibility, building trust, and driving
                    real-world visits with ease.
                  </p>
                </div>
                {/* Feature 5 */}
                <div className="backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[350px] h-[250px]">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">360° Marketing</h3>
                  <p className="">
                    A full-circle strategy that connects every touchpoint —
                    blending digital, social, and offline channels to deliver a
                    seamless brand experience.
                  </p>
                </div>
                {/* Feature 6 */}
              </div>
            </div>
          </section>
        </div>

        <div
          className=" sm:px-[50px] px-[20px] w-full  flex sm:justify-end justify-center"
          id=""
        >
          <div
            style={{ fontFamily: "devil breeze" }}
            className="flex flex-col w-[600px]"
          >
            <div className="text-9xl text-center sm:text-right">02</div>

            <div className=" text-4xl w-full sm:w-[600px] sm:text-7xl min-h-[90px] text-right p-6   ">
              Beautiful story that make your brand unique
            </div>
            <p>
              "Everything is connected. Your digital communication should be
              too. Let’s unify your message and boost your impact!" "In today’s
              networked world, scattered messages don’t work. I create cohesive,
              powerful digital communication that cuts through the noise." "One
              world. One network. One powerful voice for your brand — let’s
              build your digital communication strategy together!"
            </p>
          </div>
        </div>
      </div>
      {/* <Container3d></Container3d> */}
    </>
  );
};

export default Home;
