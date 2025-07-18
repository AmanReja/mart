import React from "react";
import im1 from "../assets/carrer/digital.jpeg";
import im2 from "../assets/carrer/graphics.jpeg";
import im3 from "../assets/carrer/field.jpeg";
import im4 from "../assets/carrer/developer.jpeg";
import im5 from "../assets/carrer/motion.jpg";
import im6 from "../assets/carrer/seo.jpg";
import im7 from "../assets/carrer/video.jpg";
import im8 from "../assets/carrer/app.jpg";
import join from "../assets/digital/team.svg";

const Carrer = () => {
  const digitalMarketingCareerArray = [
    {
      title: "Digital Marketing Executive",
      image: im1,
    },
    {
      title: "SEO Specialist",
      image: im6,
    },

    {
      title: "Graphic Designer",
      image: im2,
    },
    {
      title: "Motion Graphics Designer & Animator",
      image: im5,
    },
    {
      title: "Field Executive",
      image: im3,
    },
    {
      title: "Web Developer",
      image: im4,
    },
    {
      title: "Video Editor",
      image: im7,
    },
    {
      title: "App Developer",
      image: im8,
    },
  ];

  return (
    <>
      <div class="relative ">
        <div class="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            class="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div>

        <section class="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
              <div class="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                <div class="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                  <h1 class="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                    Join our team
                  </h1>

                  <div class="mt-8 lg:mt-12 lg:flex lg:items-center">
                    <p class="mt-4 text-lg text-white lg:mt-0 lg:ml-4 font-pj">
                      Be a part of a creative and data-driven team that’s
                      shaping the future of online growth. Collaborate with SEO
                      experts, content creators, designers, and strategists to
                      build impactful campaigns, drive engagement, and help
                      brands grow digitally. and start getting feedbacks right
                      now
                    </p>
                  </div>
                </div>
              </div>

              <div class="xl:col-span-3">
                <img class="w-full mx-auto scale-90" src={join} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" min-h-screen">
        <section className="bg-animated cyber-grid py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {digitalMarketingCareerArray.map((p) => (
                <div
                  className="feature-card rounded-lg p-6 floating flex items-center flex-col text-center"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-5xl mb-4 text-pink-500 feature-icon">
                    <img
                      className="rounded w-[300px] h-[300px] object-cover"
                      src={p.image}
                      alt=""
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>

                  <a
                    href="https://forms.gle/YCRFWyHEaZiw6gx56"
                    className="p-4 px-[20px] rounded-2xl bg-amber-600"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carrer;
