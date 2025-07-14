import React from "react";
import Fram from "../assets/Images/fram.png";
import Bn from "../assets/Images/bn.png";
import im1 from "../assets/Images/bg.png";

const Banner = () => {
  return (
    <>
      <div
        // style={{
        //   backgroundImage: `linear-gradient(90deg, rgba(131, 58, 180, 0.2) 0%, rgba(253, 29, 29, 0.2) 0%, rgba(252, 176, 69, ) 100%);`,
        // }}
        className="flex w-full h-[631px ]  bg-no-repeat bg-cover justify-center items-center  "
      >
        <div className="flex w-[619px] h-[504px]  flex-col gap-[60px] justify-center ">
          <div className="absolute w-[120px] h-[120px] bg-orange-400 blur-[50px] rounded-full ball"></div>
          <h1
            style={{ fontFamily: "Montserrat", fontWeight: 500 }}
            className="text-[18px] text-white font-bold"
          >
            Welcome To <span className="text-orange-400">Mart Spell</span>
            <div className="bg-violet-500 w-[105px] h-[2px]"></div>
          </h1>

          <h1
            style={{ fontFamily: "Montserrat" }}
            className="text-[39px] text-white leading-[54px] font-bold"
          >
            We Grow Your Revenue With Results-Driven Digital Service.
          </h1>
          <p style={{ fontFamily: "Montserrat" }} className="text-white">
            Ready to talk about how we can help improve your marketing
            performance?
          </p>
        </div>
        <div className="flex w-[619px] h-full  ">
          <img src={im1} alt="" />
        </div>
      </div>
      <section
        style={{ fontFamily: "Montserrat" }}
        className="w-full h-[550px]  flex justify-evenly items-center "
      >
        <div className="flex w-[619px]  h-[506px] flex-col gap-[50px]  ">
          <p className="text-[18px] text-white font-bold relative top-[30px]">
            Why We are Different?
          </p>
          <h1 className="text-[29px] text-white leading-[34px] font-bold">
            Achieve goals in the smartest way possible
          </h1>
          <p className="text-white">
            We’re Pro is all about exploring trending tactics that have been
            proven to deliver amazing organic search results that not only
            translate into quality traffic but a bounce rate as well.
          </p>
          <div className="w-full h-[100px] gap-[30px] flex text-white">
            <div>
              <h1 className="text-orange-400 text-3xl">1</h1>
              <p className="font-bold text-[12px]">Market Research</p>
            </div>
            <div>
              <h1 className="text-orange-400 text-3xl">2</h1>
              <p className="font-bold text-[12px]">Find New Ideas</p>
            </div>
            <div>
              <h1 className="text-orange-400 text-3xl">3</h1>
              <p className="font-bold text-[12px]">Start Optimize</p>
            </div>
            <div>
              <h1 className="text-orange-400 text-3xl">4</h1>
              <p className="font-bold text-[12px] ">Reach Targets</p>
            </div>
            <div className="ball w-[620px] h-[520px] rounded-full bg-violet-400 absolute blur-[200px]"></div>
          </div>
        </div>
        <div className="flex w-[515px]  h-[506px]">
          <img src={Bn} alt="" />
        </div>
      </section>
      {/* 
      <section
        style={{ backgroundImage: `url(${Shap.src})` }}
        className=" w-full h-[471px] bg-no-repeat bg-center bg-contain p-[20px]"
      >
        <Image src={Shap}></Image>
      </section> */}
    </>
  );
};

export default Banner;
