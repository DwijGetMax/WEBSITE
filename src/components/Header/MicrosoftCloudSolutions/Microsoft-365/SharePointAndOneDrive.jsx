import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Microsoft360sharePoint from "../../../../assets/Microsoft365sharepoint.mp4";
import SharepointCard from "./SharepointCard";
import SharepointColaboration from "./SharepointColaboration";
import Onedrive from "./Onedrive";
import SharepointFAQ from "./SharePointFAQ";
const SharePointAndOneDrive = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="bg-gradient-to-l from-gray-100 to-blue-300 ">
        <main class="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
          <div class="container mx-auto flex items-center justify-between ">
            <div class="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 class="text-4xl md:text-6xl lg:text-6xl font-bold text-[#1b1c44] leading-tight mb-4">
                Microsoft 365
                <br class="hidden lg:inline" /> Sharepoint Online
              </h1>
              <p class="text-lg text-[#1b1c44] mb-6 leading-relaxed">
                Your Mobile, Intelligent Intranet Solution
              </p>
              <div class="flex mt-8">
                <Link
                  href="#"
                  class="px-4 py-2 mr-4 text-black uppercase bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </Link>
              </div>
              <div className="text-start mt-4">
                <button
                  onClick={handlePopupOpen}
                  className="text-sm text-blue-700 hover:underline focus:outline-none"
                >
                  Watch the video
                </button>
              </div>
            </div>
            <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-9   ">
              <img
                // src={HeroImage}
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ExchangeHero_2x_RE4gLlt-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2150&hei=1536&qlt=95&fmt=png-alpha&fit=constrain"
                class="max-w-xs m-auto md:max-w-3xl  "
              />
            </div>
          </div>
        </main>
        <section>
          <div className="p-6 pt-0 mt-0 mb-8 items-center text-center bg-gradient-to-l from-gray-100 to-blue-300">
            <h2 className="text-2xl font-semibold text-[#1b1c44] mb-2 mt-4">
              Empower your team with seamless collaboration, efficient content
              management and easy access to knowledge and applications.
            </h2>
            <p className="text-lg text-[#1b1c44] mb-0">
              Share and manage content effortlessly, enabling swift information
              retrieval and fostering collaboration across your organization.
            </p>
          </div>
          {showPopup && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80 z-50">
              <div className="bg-white p-4 rounded-lg shadow-2xl relative">
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="aspect-w-16 aspect-h-9">
                  <ReactPlayer
                    url={Microsoft360sharePoint}
                    controls
                    playing
                    config={{
                      file: {
                        attributes: {
                          muted: true,
                        },
                      },
                    }}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
        <section>
          <SharepointCard />
          <SharepointColaboration />
          {/* OneDrive Section */}
          <Onedrive />
          <SharepointFAQ />
        </section>
      </div>
    </>
  );
};

export default SharePointAndOneDrive;
