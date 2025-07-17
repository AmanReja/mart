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
import Bussiness from "../assets/digital/business.png";
import Ads from "../assets/digital/ads.png";
import Studio from "../assets/digital/studio.png";
import Word from "../assets/digital/word.png";
import Vs from "../assets/digital/vs.png";
// import i1 from "../assets/icons/icon1.png";
import Banner from "./Banner";
import Section1 from "./Section1";
import Container3d from "./Container3d";
import Review from "./Review";
// import Container3d from "./Container3d";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div id="banner" className="w-full h-auto section">
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
                <img className="w-[70px] h-[70px]" src={i1} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Development
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] min-h-[284px] min-w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px] ">
                <img className="w-[70px] h-[70px]" src={i2} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  UI/UX Designer
                </h1>
                <p className="text-center">
                  We provide UI/UX Design services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[70px] h-[70px]" src={i3} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Photography
                </h1>
                <p className="text-center">
                  We provide Photography services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[70px] h-[70px]" src={i4} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Videography
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[70px] h-[70px]" src={i5} alt="" />
                <h1 style={{ fontFamily: "Montserrat" }} className="text">
                  Motion Graphik
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl gap-[10px]">
                <img className="w-[70px] h-[70px]" src={i6} alt="" />
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
                <h2 className="mt-2 text-3xl font-bold  sm:text-4xl">
                  Our Affiliations
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  Discover what makes our product stand out from the
                  competition.
                </p>
              </div>
              {/* Features Grid */}
              <div className="flex w-full flex-wrap justify-center items-center gap-[20px]">
                <div className="flex w-[220px] p-2 h-[120px] bg-lime-300 rounded">
                  <img
                    className="object-contain w-full h-full"
                    src={Bussiness}
                    alt=""
                  />
                </div>
                <div className="flex w-[220px] h-[120px] p-2 bg-yellow-300 rounded">
                  <img
                    className="object-contain w-full h-full"
                    src={Ads}
                    alt=""
                  />
                </div>
                <div className="flex w-[220px] h-[120px] p-2 bg-pink-300 rounded">
                  <img
                    className="object-contain w-full h-full"
                    src={Studio}
                    alt=""
                  />
                </div>
                <div className="flex w-[220px] h-[120px] p-2 bg-amber-500 rounded">
                  <img
                    className="object-contain w-full h-full"
                    src={Vs}
                    alt=""
                  />
                </div>
                <div className="flex w-[220px] h-[120px] p-2 bg-white rounded">
                  <img
                    className="object-contain w-full h-full"
                    src={Word}
                    alt=""
                  />
                </div>
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

      <Review></Review>

      {/* Stats */}
      <div id="intro" className="section">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border border-neutral-800 rounded-xl">
            <div className="p-4 lg:p-8 bg-linear-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      10+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      partners
                    </p>
                  </div>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div className="section relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <img
                      className="relative z-2 shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="relative z-1 shrink-0 size-8 rounded-full border-3 border-neutral-800 -mt-7"
                      src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <img
                      className="relative shrink-0 size-8 rounded-full border-3 border-neutral-800"
                      src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      85%
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      Happy customers
                    </p>
                  </div>
                </div>
                {/* End Stats */}
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 16 6 6" />
                    <circle cx={16} cy={9} r="2.9" />
                    <circle cx={6} cy={5} r={3} />
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-white">
                      $5M+
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-neutral-400">
                      Ads managed yearly
                    </p>
                  </div>
                </div>
                {/* End Stats */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section1></Section1>
      <Container3d></Container3d>
    </>
  );
};

export default Home;
