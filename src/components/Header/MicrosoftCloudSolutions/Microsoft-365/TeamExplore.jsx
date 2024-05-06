// import React from "react";
// import { Link } from "react-router-dom";

// const TeamExplore = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
//           Unlocking the Power of Teams: A Journey of Exploration
//         </h1>
//       </div>
//       <div className="flex flex-wrap justify-center -mx-4">
//         <div className="max-w-md mx-4 mb-8 rounded-lg overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-8">
//             <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
//               Microsoft Teams Phone
//             </h2>
//             <p className="text-gray-700 text-base">
//               Transform Communication with Teams Phone: Elevate Your
//               Collaboration Game! Experience Seamless Integration and Smart
//               Communication, Exclusively Designed for Teams.
//             </p>
//           </div>
//           <div className="px-6 py-4 bg-gray-100">
//             <Link
//               to="#"
//               className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//         <div className="max-w-md mx-4 mb-8 rounded-lg overflow-hidden shadow-lg bg-white">
//           <div className="px-6 py-8">
//             <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
//               Microsoft Teams Phone
//             </h2>
//             <p className="text-gray-700 text-base">
//               Transform Communication with Teams Phone: Elevate Your
//               Collaboration Game! Experience Seamless Integration and Smart
//               Communication, Exclusively Designed for Teams.
//             </p>
//           </div>
//           <div className="px-6 py-4 bg-gray-100">
//             <Link
//               to="#"
//               className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamExplore;

import React from "react";
import ReactPlayer from "react-player";
import { useState } from "react";
import VideoOne from "../../../../assets/Copilotstudio.mp4";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  videoUrl,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Card content */}
      <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-gray-200 to-blue-200 shadow-2 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="img" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-6 xl:p-6">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <button
              onClick={handlePopupOpen}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-purple-900 dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </button>
          )}
        </div>
      </div>

      {/* Popup */}

      {showPopup && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-80">
          <div className="bg-transperant p-4 rounded-lg shadow-2xl relative">
            <button
              className="absolute top-2 right-0 text-gray-600 hover:text-gray-800 focus:outline-none"
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
            <div className="aspect-w-16 aspect-h-9 rounded-2xl">
              <ReactPlayer
                url={videoUrl}
                controls
                playing
                config={{
                  file: {
                    attributes: {
                      muted: true,
                    },
                  },
                }}
                width="60%"
                height="60%"
                className="rounded-2xl mx-auto "
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const TeamExplore = () => {
  return (
    <>
      <section>
        <div className="p-10">
          <div className="max-w-3xl mx-auto mt-8"></div>
          <div>
            <h1 className="text-3xl md:text-4xl text-[#1b1c44] font-semibold text-center mb-4 mt-12">
              Unlocking the Power of Teams: A Journey of Exploration
            </h1>

            <section className="pb-0 pt-20 dark:bg-dark lg:pb-0 lg:pt-[20px]">
              <div className="container">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <SingleCard
                    image="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/450241iD7E2582439A6E9C3/image-size/large?v=v2&px=999"
                    CardTitle="Microsoft Teams Phone"
                    CardDescription=" Transform Communication with Teams Phone: Elevate Your
                    Collaboration Game! Experience Seamless Integration and Smart
                    Communication, Exclusively Designed for Teams."
                    Button="View Details"
                    videoUrl={VideoOne}
                  />
                  <SingleCard
                    image="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/11/Copilot-in-Teams-and-Whiteboard-to-visualize-meeting-discussions-1.gif"
                    CardTitle="Copilot for Microsoft Teams"
                    CardDescription="Empower your team with Copilot for Microsoft Teams: Your ultimate companion for streamlined collaboration and productivity, seamlessly integrated into your workflow"
                    Button="View Details"
                    videoUrl="https://cdn.techcommunity.microsoft.com/assets/MicrosoftTeams/Phone%20copilot.mp4"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamExplore;
