import React from "react";

const Services = () => {
  return (
    <>
      <main id="content">
        {/* Hero */}
        <div className="overflow-hidden bg-neutral-900">
          <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
            <h1 className="font-semibold text-white text-5xl md:text-6xl">
              <span className="text-[#ff0] ">Martspell</span> Transforming ideas
              into reality
            </h1>
            <div className="mt-5 max-w-4xl">
              <p className="text-neutral-400 text-lg">
                It is a creative hub where imagination meets craftsmanship to
                transform ideas into tangible realities. At Preline Agency, we
                specialize in turning conceptual visions into concrete forms,
                whether it be through design, artistry, or technological
                innovation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
