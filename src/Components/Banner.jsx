import React from "react";
import Fram from "../assets/Images/fram.png";
import Bn from "../assets/Images/bn.png";
import im1 from "../assets/Images/bg.png";

const Banner = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full min-h-[631px] bg-no-repeat  bg-cover justify-center items-center px-4 py-8 relative">
        <div className="relative flex flex-col gap-6 justify-center items-start w-full lg:w-[619px] max-w-full mb-8 lg:mb-0">
          <div className="absolute ball top-0 left-0 w-[120px] h-[120px] bg-orange-400 blur-[50px] rounded-full z-1" />

          <h1
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className="text-[18px] text-white font-bold z-10"
          >
            Welcome To <span className="text-orange-400">Mart Spell</span>
            <div className="bg-violet-500  w-[105px] h-[2px] mt-2"></div>
          </h1>

          <h1
            style={{ fontFamily: "Montserrat" }}
            className="text-[30px] lg:text-[39px] text-white leading-[42px] lg:leading-[54px] font-bold z-10"
          >
            We Grow Your Revenue With Results-Driven Digital Service.
          </h1>

          <p style={{ fontFamily: "Montserrat" }} className="text-white z-10">
            Ready to talk about how we can help improve your marketing
            performance?
          </p>
        </div>

        <div className="w-full lg:w-[619px] h-auto lg:h-full">
          <img className="w-full h-full object-cover" src={im1} alt="" />
        </div>
      </div>

      {/* Why We Are Different Section */}
      <section
        className="w-full flex flex-col lg:flex-row justify-evenly items-center px-4 py-10 relative"
        style={{ fontFamily: "Montserrat" }}
      >
        <div className="flex flex-col gap-8 w-full lg:w-[619px] z-10">
          <p className="text-[18px] text-white font-bold">
            Why We are Different?
          </p>

          <h1 className="text-[24px] lg:text-[29px] text-white leading-[32px] lg:leading-[34px] font-bold">
            Achieve goals in the smartest way possible
          </h1>

          <p className="text-white text-[14px]">
            We’re Pro is all about exploring trending tactics that have been
            proven to deliver amazing organic search results that not only
            translate into quality traffic but a lower bounce rate as well.
          </p>

          {/* Steps */}
          <div className="w-full flex flex-wrap gap-6 text-white">
            {[
              "Market Research",
              "Find New Ideas",
              "Start Optimize",
              "Reach Targets",
            ].map((text, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-[45%] sm:w-[40%] md:w-[22%]"
              >
                <h1 className="text-orange-400 text-3xl">{index + 1}</h1>
                <p className="font-bold text-[12px] text-center mt-1">{text}</p>
              </div>
            ))}
          </div>

          {/* Background Glow */}
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full ball bg-violet-400 blur-[200px] -z-10"></div>
        </div>

        {/* Image Right */}
        <div className="w-full lg:w-[515px] mt-8 lg:mt-0">
          <img className="w-full h-full object-cover" src={Bn} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
