import React from "react";
import "../Banner.css";
import lap from "../assets/Images/ring.png";
import im2 from "../assets/Images/img.png";
import im3 from "../assets/Images/pat.png";
import i1 from "../assets/icons/icon1.png";
import i2 from "../assets/icons/icon7.png";
import i3 from "../assets/icons/icon3.png";
import i4 from "../assets/icons/icon2.png";
import i5 from "../assets/icons/icon5.png";
import i6 from "../assets/icons/icon6.png";
// import i1 from "../assets/icons/icon1.png";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <div className="content-fit">
            <div className="logo">Mart spell Tech</div>
            <nav>
              <ul>
                <li>Contacts</li>
                <li>Category</li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="section" id="banner">
          <div className="content-fit ">
            <div className="title" data-before="Provide For You">
              The Service We
            </div>
            <div className=" w-full h-[500px] relative top-[50px] flex flex-wrap px-[90px] items-center justify-center gap-[10px]">
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl ">
                <img className="w-[40px] h-[40px]" src={i1} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Development
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl ">
                <img className="w-[40px] h-[40px]" src={i2} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  UI/UX Designer
                </h1>
                <p className="text-center">
                  We provide UI/UX Design services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i3} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Photography
                </h1>
                <p className="text-center">
                  We provide Photography services, and of course with the best
                  quality
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i4} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Videography
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
                <img className="w-[40px] h-[40px]" src={i5} alt="" />
                <h1 style={{ fontFamily: "devil breez" }} className="text">
                  Motion Graphik
                </h1>
                <p className="text-center">
                  Create a platform with the best and coolest quality from us.
                </p>
              </div>
              <div className="flex w-[284px] h-[284px] p-[12px] flex-col justify-center items-center backdrop-blur-md bg-gradient-to-bl from-white/10 to-white/5 rounded-2xl">
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
          {/* <img
            src={im2}
            className="decorate"
            alt
            style={{ width: "30vw", bottom: 0, right: 0 }}
          /> */}
          <img
            src={im3}
            className="decorate "
            alt
            style={{ width: "20vw", bottom: 0, left: 0 }}
          />
        </div>
        <div className="section" id="intro">
          <div className="content-fit">
            <div className="number">01</div>
            <div className="des">
              <div className="title">
                MART SPELL TECH Where truly great things can happen
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <div className="section" id="description">
          <div className="content-fit">
            <div className="number">02</div>
            <div className="des">
              <div className="title">
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
            src="img/leaf1.png"
            className="decorate"
            alt
            style={{ width: "70vw", bottom: 0, right: 0, zIndex: 101 }}
          />
        </div>
        <div className="section" id="contact">
          <div className="content-fit">
            <div className="number">03</div>
            <div className="des">
              <div className="title">CONTACT</div>
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
              <div className="sign">mart</div>
            </div>
          </div>
        </div>
      </div>

      <div id="container3D"></div>
    </>
  );
};

export default Home;
