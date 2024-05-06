// import React, { useState } from "react";
// import ImageSlider from "./ImageSlider";

// const Copilot = () => {
//   const sliderImages = [
//     "https://news.microsoft.com/wp-content/uploads/prod/sites/655/2023/03/Copilot-Outlook.gif",
//     "https://techcrunch.com/wp-content/uploads/2023/11/Screenshot-2023-11-15-at-3.33.02-PM.png",
//     "https://upslide.net/wp-content/uploads/2023/05/top-pbonus-copilot.jpg",
//     "https://computingaustralia.com.au/wp-content/uploads/2023/08/Microsoft-Introduces-Copilot-main-banner-small.jpg",
//     "https://www.proserveit.com/hs-fs/hubfs/Microsoft%20Copilots%20(2).png?width=762&height=382&name=Microsoft%20Copilots%20(2).png",
//     "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2023/03/M365Copilot_HeroBanner_Apps_BLOG-FEATURE.jpg",
//     "https://b2729162.smushcdn.com/2729162/wp-content/uploads/2023/11/2ndary-image-for-March-16_-768x432.webp?lossy=1&strip=1&webp=1",
//     "https://mspoweruser.com/wp-content/uploads/2024/01/Microsoft-Copilot-GPTs-1200x610.jpg",
//     "https://media.licdn.com/dms/image/D4E10AQF9sr5NJH8zgg/image-shrink_800/0/1705594214630?e=2147483647&v=beta&t=10y6hRsW1QzGG9rT9uHLMsD3bBpcsHGC6hdmMJNMa6s",
//     "https://futuretrend.co/wp-content/uploads/2023/03/17.3.23-17.00-02.jpg",
//     "https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2024/03/1920x1080-Copilot-Blog-Image-1024x576.jpg",
//     "https://blogs.microsoft.com/wp-content/uploads/prod/2024/02/Copilot_Carousel_Hero_1920x1280.png",
//     "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1aFqF",
//     "https://assets-global.website-files.com/61e14c99ed8a884e4d02f15a/65b3b497cf37a4fe2f57b7f9_Copilot%20przewodnik%20blog.jpg",
//   ];

//   const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
//   const [showGetStartedModal, setShowGetStartedModal] = useState(false);
//   const [email, setEmail] = useState("");

//   const handleLearnMore = () => {
//     setShowLearnMoreModal(true);
//   };

//   const handleGetStarted = () => {
//     setShowGetStartedModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowLearnMoreModal(false);
//     setShowGetStartedModal(false);
//   };

//   const handleChangeEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here, you can handle the submission logic, like sending the email to your backend server or storing it locally.
//     console.log("Submitted email:", email);
//     // For demonstration purposes, let's just close the modal after submission
//     setShowGetStartedModal(false);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-2">
//       <div className="max-w-6xl w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg p-8 mb-8 text-center">
//           <img
//             src="https://www.omnilogicsolutions.com/wp-content/uploads/2024/03/copilot-logo-300.png"
//             alt="Microsoft 365 Copilot Logo"
//             className="w-32 mx-auto mb-6 rounded-full"
//           />
//           <h1 className="text-5xl font-semibold text-gray-800 mb-4">
//             Introducing Microsoft 365 Copilot
//           </h1>
//           <h2 className="text-3xl font-semibold text-gray-800 mb-4">
//             Your Intelligent Partner for Work
//           </h2>
//           <p className="text-lg text-gray-800 mb-4">
//             Humans are naturally inclined to dream, create, and innovate. We all
//             seek purpose in our work — whether it's writing a novel, making
//             discoveries, building communities, or caring for others. However, we
//             often find ourselves bogged down by mundane tasks that drain our
//             time, creativity, and energy. To rediscover the essence of our work,
//             we need more than just improvements; we need a complete shift in how
//             we work.
//           </p>
//           <button
//             onClick={handleLearnMore}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
//           >
//             Learn More
//           </button>
//         </div>
//         {/* <iframe
//           className="w-full rounded-t-lg"
//           height="400"
//           src="https://www.youtube.com/embed/S7xTBa93TX8?start=12"
//           title="Microsoft 365 Copilot Demo"
//           allowFullScreen
//         /> */}
//         <iframe
//           className="mx-auto w-full max-w-6xl rounded-t-lg"
//           height="480"
//           src="https://www.youtube.com/embed/S7xTBa93TX8?start=12"
//           title="Microsoft 365 Copilot Demo"
//           allowFullScreen
//         />

//         <div className="p-8">
//           <div>
//             {/* <h2 className="text-xl font-semibold mb-4">Image Slider</h2> */}
//             <div className="overflow-hidden rounded-lg shadow-lg">
//               <ImageSlider images={sliderImages} />
//             </div>
//           </div>
//           <div className="max-w-5xl mx-auto mt-8"></div>
//           <div>
//             <h2 className="text-xl font-semibold mb-2">About Copilots</h2>
//             <p className="text-lg text-gray-700 mb-4">
//               Today, we're introducing Microsoft 365 Copilot — your partner for
//               work, powered by next-generation AI. By harnessing the
//               capabilities of large language models (LLMs) and integrating with
//               your Microsoft Graph data and apps, Copilot transforms your words
//               into a powerful productivity tool. Copilot seamlessly integrates
//               into your daily Microsoft 365 apps like Word, Excel, PowerPoint,
//               Outlook, Teams, and more, boosting creativity, productivity, and
//               skills. Additionally, we're announcing a new experience: Business
//               Chat. This feature leverages LLMs and your data to perform
//               advanced tasks, such as generating updates based on your meetings,
//               emails, and chat threads.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button
//                 onClick={handleLearnMore}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
//               >
//                 Learn More
//               </button>
//               <button
//                 onClick={handleGetStarted}
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-gray-200"
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Modals */}
//       {showLearnMoreModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-gray-800 opacity-75"
//             onClick={handleCloseModal}
//           ></div>
//           <div className="bg-white p-8 rounded-lg shadow-md z-10">
//             <h2 className="text-xl font-semibold mb-4">Learn More</h2>
//             <p className="text-lg text-gray-700">
//               This is the Learn More modal content. You can replace this with
//               your desired content.
//             </p>
//             <button
//               onClick={handleCloseModal}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg mt-4"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {showGetStartedModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="absolute inset-0 bg-gray-800 opacity-75"
//             onClick={handleCloseModal}
//           ></div>
//           <div className="bg-white p-8 rounded-lg shadow-md z-10">
//             <h2 className="text-xl font-semibold mb-4">Get Started</h2>
//             <p className="text-lg text-gray-700">
//               This is the Get Started modal content. You can replace this with
//               your desired content.
//             </p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full border rounded-md px-4 py-2 mb-4"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={handleChangeEmail}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
//               >
//                 Submit
//               </button>
//             </form>
//             <button
//               onClick={handleCloseModal}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg mt-4"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Copilot;
// ==================================================

import React, { useState } from "react";
import CoCard from "./CoCard";
import { Link } from "react-router-dom";
import CopilotPrice from "./CopilotPrice";
import CopilotCart from "./CopilotCart";
import CopilotFAQ from "./CopilotFAQ";
import CopilotMind from "./CopilotMind";
const Copilot = () => {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [showGetStartedModal, setShowGetStartedModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleLearnMore = () => {
    setShowLearnMoreModal(true);
  };

  const handleGetStarted = () => {
    setShowGetStartedModal(true);
  };

  const handleCloseModal = () => {
    setShowLearnMoreModal(false);
    setShowGetStartedModal(false);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the submission logic, like sending the email to your backend server or storing it locally.
    console.log("Submitted email:", email);
    // For demonstration purposes, let's just close the modal after submission
    setShowGetStartedModal(false);
  };

  return (
    <div className="bg-gradient-to-l from-gray-100 to-blue-200 min-h-screen flex flex-col items-center justify-center py-0  ">
      <div className="max-w-8xl w-full  shadow-md rounded-lg overflow-hidden">
        <div className=" rounded-lg p-8 mb-8 text-center ">
          <img
            src="https://www.omnilogicsolutions.com/wp-content/uploads/2024/03/copilot-logo-300.png"
            alt="Microsoft 365 Copilot Logo"
            className="w-32 mx-auto mb-6 rounded-full"
          />
          <h1 className="text-4xl font-semibold text-[#1b1c44] mb-4">
            Introducing{" "}
            <span className="text-orange-600 font-bold">
              Microsoft 365 Copilot
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-[#1b1c44]">
            Your{" "}
            <span className="text-orange-600 font-bold">
              Intelligent Partner
            </span>{" "}
            for Work
          </h2>
          <p className="text-lg text-gray-800 mb-3 mt-4 mx-10">
            Humans are naturally inclined to dream, create, and innovate. We all
            seek purpose in our work — whether it's writing a novel, making
            discoveries, building communities, or caring for others. However, we
            often find ourselves bogged down by mundane tasks that drain our
            time, creativity, and energy. To rediscover the essence of our work,
            we need more than just improvements; we need a complete shift in how
            we work.
          </p>

          <div className="buttons mt-4 ">
            <button className="btn-hover bg-gradient-to-r from-purple-700 via-blue-700 to-blue-800 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Request Now
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
          <div className="p-8 md:col-span-1">
            <h2 className="text-5xl font-semibold mb-2 mt-10  text-gray-900">
              Microsoft Copilot
            </h2>
            <p className="text-lg text-gray-800 mb-4">
              Achieve anything you can imagine with your everyday AI companion.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={handleLearnMore}
                className="bg-blue-500 hover:bg-blue-600 text-white font-lg py-3 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              >
                Download Copilot App
              </button>
            </div>
          </div>

          <div className=" aspect-video  mr-8 ">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/S7xTBa93TX8?start=12"
              width="100%"
              title="Microsoft 365 Copilot Demo"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
        {/* <section>
          <div class="text-center">
            <h2 class="text-4xl font-semibold mb-2 mt-0 text-[#1b1c44]">
              Empower the future of your business with Copilot
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 pt-12 px-20">
            <div className="p-8 md:col-span-1">
              <h3 class="text-3xl font-semibold text-[#1b1c44] mb-2 mt-10 ">
                Achieve anything you can imagine with your everyday AI
                companion.
              </h3>
              <p class="text-lg text-[#1b1c44] mb-4">
                Use our Copilot Success Kit to help drive user enablement and
                technical readiness in your organization
              </p>
              <div className="flex flex-wrap gap-4 mt-10 justify-start">
                <button
                  onClick={handleLearnMore}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-black scale-105 font-lg hover:text-white py-3 px-6 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                >
                  Download Copilot App
                </button>
              </div>
            </div>

            <div className="relative aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 bg-gradient-to-r from-blue-400 to-blue-700 rounded-3xl overflow-hidden md:col-span-1 border-8 border-gray-400">
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <iframe
                  className="absolute w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/S7xTBa93TX8?start=12"
                  title="Microsoft 365 Copilot Demo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section> */}
        <section pt-0>
          <div class="text-center">
            <h2 class="text-4xl font-semibold mb-4 mt-0 text-[#1b1c44]">
              Empower the future of your business with{" "}
              <span className="text-orange-600 font-bold">
                Microsoft 365 Copilot
              </span>
            </h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20 pt-12 px-20">
            <div class="p-8 md:col-span-1  rounded-lg">
              <h2 class="text-3xl font-semibold text-[#1b1c44] mb-3 mt-0 ">
                Achieve anything you can imagine with your everyday{" "}
                <span className="text-orange-600 font-bold">AI companion</span>
              </h2>
              <p class="text-lg text-[#1b1c44] mb-3">
                Use our Copilot Success Kit to help drive user enablement and
                technical readiness in your organization
              </p>
              <div class="flex flex-wrap gap-4 mt-10 justify-start">
                <Link
                  to="https://aka.ms/Copilot/SuccessKitDownload"
                  target="_blank"
                  download
                  rel="noopener noreferrer"
                >
                  <button
                    onClick={handleLearnMore}
                    class="bg-gradient-to-r from-orange-500 to-pink-500 text-black scale-105 font-lg hover:text-white py-3 px-6 rounded-full  focus:outline-none focus:ring focus:ring-orange-400"
                  >
                    Download Copilot Kit
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative aspect-w-16 aspect-h-12 md:aspect-w-16 md:aspect-h-9 bg-gradient-to-r from-blue-400 to-blue-700 rounded-3xl overflow-hidden md:col-span-1 border-8 border-gray-400">
              <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <iframe
                  class="absolute w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/S7xTBa93TX8?start=12"
                  title="Microsoft 365 Copilot Demo"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section>
          <CoCard />
          <CopilotCart />
          <CopilotMind />
          <CopilotPrice />
          <CopilotFAQ />
        </section>
      </div>
    </div>
  );
};

export default Copilot;
