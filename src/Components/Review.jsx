import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Subhanka Majhi",
    role: "Marketing Lead at UrbanBloom",
    description: `“Preline’s Mailchimp strategy transformed our customer outreach—engagement increased by 43%, and brand loyalty soared. The platform’s automation saved us hours weekly.”`,
    svgColor: "#FFE01B",
  },
  {
    name: "Rahul Sen",
    role: "CEO at StyleAura",
    description: `“Thanks to Preline’s Shopify optimization, our monthly e‑commerce sales grew by 20%. Their support and recommendations made the setup seamless.”`,
    svgColor: "#95BF46",
  },
  {
    name: "Ananya Roy",
    role: "CTO at DevFlow",
    description: `“The collaboration with Preline and GitLab workflow cut our development cycle by 12%, dramatically improving team coordination and release cadence.”`,
    svgColor: "#E24329",
  },
  {
    name: "Vikram Mukherjee",
    role: "Growth Lead at ShopEase",
    description: `“Their funnel optimization reduced cart abandonment by 35%, boosting our conversion and repeat purchase rates within weeks.”`,
    svgColor: "#FF5A00",
  },
  {
    name: "Sneha Patel",
    role: "Product Manager at FinEdge",
    description: `“Preline’s agile transformation framework helped us reduce time‑to‑market by 50% while improving cross‑function collaboration and clarity.”`,
    svgColor: "#0070F3",
  },
];

export default function Review() {
  return (
    <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
      <p className="text-3xl font-semibold text-white text-center">
        Customer Reviews
      </p>
      <br />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // a11y={{
        //   prevSlideMessage: "Previous review",
        //   nextSlideMessage: "Next review",
        // }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="group relative p-6 h-full flex flex-col bg-neutral-900 rounded-xl overflow-hidden">
              <div className="mb-5 flex items-center">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: t.svgColor }}
                />
                <div className="ml-4">
                  <p className="text-3xl font-semibold text-white">{t.name}</p>
                  <h3 className="mt-2 font-medium text-lg text-white">
                    {t.title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-400 flex-grow">{t.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
