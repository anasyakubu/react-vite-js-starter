
import React from "react";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io5";
import { FaReact, FaGithub, FaNpm } from "react-icons/fa";
import { SiAxios, SiPrettier } from "react-icons/si";

import { Star } from "lucide-react";

function Home() {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen ">
        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            {/* <div className="w-8 h-8 bg-purple-600 rounded-lg"></div> */}
            <a href="https://anasyakubu.vercel.app" target="_blank">
              <img
                src="https://res.cloudinary.com/do52dpekr/image/upload/v1733041485/logo-me_pszwld.png"
                alt="logo"
                className="w-10"
              />
              {/* <span className="font-semibold text-white text-lg">
              Anas Yakubu
            </span> */}
            </a>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/anasyakubu/react-vite-js-starter"
              className="text-gray-100 hover:text-gray-300 text-lg sm:text-base flex gap-3"
              target="_blank"
            >
              <span className="py-1">
                <FaGithub />
              </span>
              Github
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 py-5 sm:py-10 text-center">
          <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Launch your react app
            <br />
            in seconds, <span className="text-purple-600">not minutes</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            The react vite.js Startup Boilerplate for busy developers,
            <br className="hidden sm:block" />
            with{" "}
            <span className="border-b-2 border-purple-500">
              all you need
            </span>{" "}
            to build and launch your app soon.
          </p>

          <button className="bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-purple-700 mb-4 sm:mb-6 flex items-center mx-auto space-x-2 text-sm sm:text-base">
            <a
              href="https://www.npmjs.com/package/react-vite-js-starter"
              target="_blank"
              className="flex gap-5"
            >
              <span>Read docs</span>
              <span className="my-1">
                <FaNpm />
              </span>
            </a>
          </button>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10 sm:mb-16 space-y-4 sm:space-y-0">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 border-2 border-white"
                >
                  <img
                    src="https://res.cloudinary.com/do52dpekr/image/upload/v1733041485/logo-me_pszwld.png"
                    alt="logo"
                    className="w-10"
                  />
                </div>
              ))}
            </div>
            <div className="sm:ml-4 flex items-center">
              <span className="text-gray-300 text-sm sm:text-base">
                Loved by 160,070 developers
              </span>
              <div className="flex ml-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feature Diagram */}
          <div className="bg-gray-800 rounded-2xl p-4 sm:p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: "Vitejs",
                  icon: <SiVite className="text-white" />,
                },
                { title: "React", icon: <FaReact className="text-white" /> },
                {
                  title: "Tailwindcss",
                  icon: <RiTailwindCssFill className="text-white" />,
                },
                { title: "Sass", icon: <IoLogoSass className="text-white" /> },
                { title: "Axios", icon: <SiAxios className="text-white" /> },

                {
                  title: "Prettier",
                  icon: <SiPrettier className="text-white" />,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-2 p-3 sm:p-4 bg-gray-700 rounded-lg shadow-sm"
                >
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                  <span className="text-xs sm:text-sm text-gray-50">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 s text-gray-300">
            <hr className="bg-[#aeaeae]" style={{ textDecoration: "doted" }} />
            <div className="p-5 flex justify-center text-center">
              <h6 className="flex gap-3">
                designed & built with love 💛 by{" "}
                <span>
                  <a
                    href="https://anasyakubu.vercel.app"
                    target="_blank"
                    className="flex gap-3"
                  >
                    {" "}
                    <span>
                      <img
                        src="https://res.cloudinary.com/do52dpekr/image/upload/v1733041485/logo-me_pszwld.png"
                        alt="logo"
                        className="w-10"
                      />
                    </span>
                    <span className="underline">Anas Yakubu</span>
                  </a>
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

  