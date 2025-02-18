import React from 'react';
import basketball1 from "../assets/homepage/basketball1.jpg";
import basketball2 from "../assets/homepage/basketball2.jpg";
import basketball3 from "../assets/homepage/basketball3.jpg";
import basketball4 from "../assets/homepage/basketball4.jpg";
import basketball5 from "../assets/homepage/basketball5.jpg";

export default function LandingPage() {
  return (
    <div className="relative isolate w-full font-main">
      {/* Background Blur Element */}
      <div
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
          }}
        />
      </div>

      {/* Constrain the main content width with a larger max width */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-36 pb-32 sm:pt-60 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
              Connecting Hoopers Worldwide
            </h1>
            <p className="mt-8 text-lg font-medium text-grey-text sm:text-xl">
              HoopsConnect is your go-to platform for finding teammates, joining local pick-up games, and sharing your passion for basketball. Whether you're looking to connect with fellow enthusiasts or organize the next big game, we bring the hoops community together.
            </p>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block rounded-md bg-main px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-main/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
              >
                Get started
              </a>
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="flex justify-end">
            <div className="flex gap-8">
              {/* First Column */}
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:pt-80 lg:pt-36 xl:pt-80">
                <div className="relative">
                  <img
                    src={basketball1}
                    alt="People playing basketball"
                    className="aspect-[2/3] w-full rounded-xl bg-black/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />
                </div>
              </div>
              {/* Second Column */}
              <div className="mr-auto w-44 flex-none space-y-8 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    src={basketball2}
                    alt="People playing basketball"
                    className="aspect-[2/3] w-full rounded-xl bg-black/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    src={basketball3}
                    alt="People playing basketball"
                    className="aspect-[2/3] w-full rounded-xl bg-black/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />
                </div>
              </div>
              {/* Third Column */}
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    src={basketball4}
                    alt="People playing basketball"
                    className="aspect-[2/3] w-full rounded-xl bg-black/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />
                </div>
                <div className="relative">
                  <img
                    src={basketball5}
                    alt="People playing basketball"
                    className="aspect-[2/3] w-full rounded-xl bg-black/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
