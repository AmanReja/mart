import React from "react";

const Contactus = () => {
  return (
    <>
      {/* Contact */}
      <div id="contact" className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              Contact us
            </h2>
            <p className="mt-1 text-neutral-400">
              Whatever your goal - we will get you there.
            </p>
          </div>
          {/* End Title */}
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form>
                <div className="space-y-4">
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-name"
                      className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="hs-tac-input-name"
                      className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:-translate-y-1.5
              peer-not-placeholder-shown:text-neutral-400"
                    >
                      Name
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="email"
                      id="hs-tac-input-email"
                      className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="hs-tac-input-email"
                      className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:-translate-y-1.5
              peer-not-placeholder-shown:text-neutral-400"
                    >
                      Email
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-company"
                      className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Company"
                    />
                    <label
                      htmlFor="hs-tac-input-company"
                      className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:-translate-y-1.5
              peer-not-placeholder-shown:text-neutral-400"
                    >
                      Company
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="hs-tac-input-phone"
                      className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Phone"
                    />
                    <label
                      htmlFor="hs-tac-input-phone"
                      className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:-translate-y-1.5
              peer-not-placeholder-shown:text-neutral-400"
                    >
                      Phone
                    </label>
                  </div>
                  {/* End Input */}
                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      id="hs-tac-message"
                      className="peer p-3 sm:p-4 block w-full bg-neutral-800 border-transparent rounded-lg sm:text-sm text-white placeholder:text-transparent focus:outline-hidden focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            not-placeholder-shown:pt-6
            not-placeholder-shown:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="This is a textarea placeholder"
                      data-hs-textarea-auto-height
                      defaultValue={""}
                    />
                    <label
                      htmlFor="hs-tac-message"
                      className="absolute top-0 start-0 p-3 sm:p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-not-placeholder-shown:text-xs
              peer-not-placeholder-shown:-translate-y-1.5
              peer-not-placeholder-shown:text-neutral-400"
                    >
                      Tell us about your project
                    </label>
                  </div>
                  {/* End Textarea */}
                </div>
                <div className="mt-2">
                  <p className="text-xs text-neutral-500">
                    All fields are required
                  </p>
                  <p className="mt-5">
                    <a
                      className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                      href="#"
                    >
                      Submit
                      <svg
                        className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </form>
            </div>
            {/* End Col */}
            <div className="space-y-14">
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Our address:</h4>
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    Rajarhat, Kolkata, West Bengal near The Great Biryani Co.
                    <br />
                    rajarhat
                  </address>
                </div>
              </div>
              <div className="flex gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  id="phone"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="gray"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 15.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 15.92z"
                  ></path>
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Call us:</h4>
                  <a className="mt-1 text-neutral-400 text-sm not-italic">
                    +91 79088 54829
                  </a>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Email us:</h4>
                  <a
                    className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-hidden focus:text-neutral-200"
                    href="mailto:martspelltech@gmail.com"
                    target="_blank"
                  >
                    martspelltech@gmail.com
                  </a>
                </div>
              </div>
              {/* End Item */}
              {/* Item */}
              <div className="flex gap-x-5">
                <svg
                  className="shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 11 18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">We're hiring</h4>
                  <p className="mt-1 text-neutral-400">
                    We're thrilled to announce that we're expanding our team and
                    looking for talented individuals like you to join us.
                  </p>
                  <p className="mt-2">
                    <a
                      className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-hidden focus:underline"
                      href="#"
                    >
                      Job openings
                      <svg
                        className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              {/* End Item */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Contact */}
    </>
  );
};

export default Contactus;
