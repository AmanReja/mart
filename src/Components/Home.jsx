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

const Home = () => {
  return (
    <>
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
              <div className="flex w-[284px] min-h-[284px] min-w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl ">
                <img className="w-[40px] h-[40px]" src={i1} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Development
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] min-h-[284px] min-w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl ">
                <img className="w-[40px] h-[40px]" src={i2} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  UI/UX Designer
                </h1>
                <p className="text-center">
                  We provide UI/UX Design services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i3} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Photography
                </h1>
                <p className="text-center">
                  We provide Photography services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i4} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Videography
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i5} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Motion Graphik
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] min-h-[284px] min-w-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i6} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
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
        <div className=" px-[50px]" id="">
          <div style={{ fontFamily: "devil breeze" }} className="">
            <div className="text-9xl">01</div>
            <div className="w-[600px]">
              <div className="text-7xl">
                MART SPELL TECH Where truly great things can happen
              </div>
            </div>
          </div>
        </div>
        <div className=" px-[50px]" id="">
          <div
            style={{ fontFamily: "devil breeze" }}
            className="flex flex-row-reverse"
          >
            <div className="text-9xl">02</div>
            <div className="w-[600px]">
              <div className="text-7xl">
                Beautiful story that make your brand unique
              </div>
              <p>
                "Everything is connected. Your digital communication should be
                too. Let’s unify your message and boost your impact!" "In
                today’s networked world, scattered messages don’t work. I create
                cohesive, powerful digital communication that cuts through the
                noise." "One world. One network. One powerful voice for your
                brand — let’s build your digital communication strategy
                together!"
              </p>
            </div>
          </div>
        </div>
        <div className="" id="">
          <div className="">
            <div className="">02</div>
            <div className="">
              <div className="">
                Beautiful story that make your brand unique
              </div>
              <p>
                "Everything is connected. Your digital communication should be
                too. Let’s unify your message and boost your impact!" "In
                today’s networked world, scattered messages don’t work. I create
                cohesive, powerful digital communication that cuts through the
                noise." "One world. One network. One powerful voice for your
                brand — let’s build your digital communication strategy
                together!"
              </p>
            </div>
          </div>
          <img
            src=""
            className=""
            alt
            style={{ width: "70vw", bottom: 0, right: 0, zIndex: 101 }}
          />
        </div>
        <div className="" id="">
          <div className="">
            <div className="">03</div>
            <div className="">
              <div className="">CONTACT</div>
              <table>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>martspelltech@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>979645451</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td>martspwll.com</td>
                  </tr>
                  <tr>
                    <td>Youtube</td>
                    <td>@martspell</td>
                  </tr>
                </tbody>
              </table>
              <div className="">mart</div>
            </div>
          </div>
        </div>
      </div>

      <div id=""></div>
    </>
  );
};

export default Home;
