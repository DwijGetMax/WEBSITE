// import React from "react";
// import {Link } from "react-router-dom"

// const TeamComponent = () => {
//   return (
//     <>
//       <section className="bg-gray-100 py-16 px-4">
//         <div>
//           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//             {/* Content Section */}
//             <div className="lg:w-1/2 lg:ml-8">
//               <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
//                 OneDrive: Your Ultimate Backup Buddy
//               </h2>
//               <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
//                 Protect your valuable data against device failures, theft, or
//                 unexpected disasters. With automatic backup features, your files
//                 are continuously secured without any hassle. Rest easy knowing
//                 that even in the face of adversity, your important information
//                 remains safe and accessible.
//               </p>
//               <Link
//                 to="/learn-more"
//                 className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
//               >
//                 Learn more
//               </Link>
//             </div>
//             {/* Video Section */}
//             <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
//               <video
//                 src={OnedriveOne}
//                 alt="microsoft-365 onedrive image"
//                 className="w-full h-auto"
//                 autoPlay
//                 muted // Add this to autoplay the video (usually required for autoplay)
//                 loop // Add this to loop the video
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-20">
//           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//             {/* Video Section */}
//             <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
//               <video
//                 src={OnedriveTwo}
//                 alt="microsoft-365 onedrive image"
//                 className="w-full h-auto"
//                 autoPlay
//                 muted // Add this to autoplay the video (usually required for autoplay)
//                 loop // Add this to loop the video
//               />
//             </div>
//             {/* Content Section */}
//             <div className="lg:w-1/2 lg:ml-8">
//               <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
//                 Share Memories, Reconnect with Joy
//               </h2>
//               <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
//                 Capture and privately share cherished photos, videos, and albums
//                 with loved ones. Whether it's a recent event or a precious
//                 memory from the past, OneDrive brings your fondest moments to
//                 life, together
//               </p>
//               <Link
//                 to="/learn-more"
//                 className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
//               >
//                 Learn more
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="mt-20">
//           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//             {/* Content Section */}
//             <div className="lg:w-1/2 lg:ml-8">
//               <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
//                 Your Content Secured, Sorted, and Synced Anytime, Anywhere
//               </h2>
//               <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
//                 our Content Safeguarded, Streamlined, and Always Up-to-Date on
//                 the Go Effortlessly manage, edit, and arrange your files across
//                 all devices, no matter where you are. Stay connected even
//                 offline, with updates syncing seamlessly across your devices.
//               </p>
//               <Link
//                 to="/learn-more"
//                 className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
//               >
//                 Learn more
//               </Link>
//             </div>
//             {/* Video Section */}
//             <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
//               <video
//                 src={OnedriveThree}
//                 alt="microsoft-365 onedrive image"
//                 className="w-full h-auto"
//                 autoPlay
//                 muted // Add this to autoplay the video (usually required for autoplay)
//                 loop // Add this to loop the video
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-20">
//           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
//             {/* Video Section */}
//             <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
//               <video
//                 src={OnedriveFour}
//                 alt="microsoft-365 onedrive image"
//                 className="w-full h-auto"
//                 autoPlay
//                 muted // Add this to autoplay the video (usually required for autoplay)
//                 loop // Add this to loop the video
//               />
//             </div>
//             {/* Content Section */}
//             <div className="lg:w-1/2 lg:ml-8">
//               <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
//                 Bring Your Digital World Everywhere Life Leads You
//               </h2>
//               <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
//                 Seamlessly Integrate Your Digital World with Your Reality With
//                 the OneDrive mobile app, carry your photos, videos, and files
//                 wherever life leads you. Edit and share on the go, and safeguard
//                 important documents and cherished memories by scanning and
//                 storing them securely in the cloud.
//               </p>
//               <Link
//                 to="/learn-more"
//                 className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
//               >
//                 Get the Mobile App Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TeamComponent;

import React from "react";
import { Link } from "react-router-dom";
import ImgOne from "../../../../assets/screenOne.jpeg";
import ImgTwo from "../../../../assets/screenTwo.jpeg";
import ImgThree from "../../../../assets/screenThree.jpeg";
import ImgFour from "../../../../assets/screenFour.jpeg";
import ImgFive from "../../../../assets/screenFive.jpeg";
import ImgSix from "../../../../assets/screenSix.jpeg";

const TeamComponent = () => {
  return (
    <>
      <div className="text-center mt-8 bg-gray-100">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight mb-4">
          Navigating Your Microsoft 365 Teams Journey
        </h1>

        <section className="bg-gray-100 py-16 px-4">
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Upgrade to the Latest Version of Teams
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed justify-start">
                  Introducing the Latest Teams: Enjoy Faster, Simpler, and More
                  Flexible Collaboration!
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src="https://support.content.office.net/en-us/media/fe56d353-f4aa-4148-926c-c5fe9cf23d60.jpg"
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src="https://support.content.office.net/en-us/media/34e88df9-30f3-4daa-9874-bc0864ab1beb.png"
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Immersive spaces enhance collaboration in Teams.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Forge deeper connections in a 3D immersive space, elevating
                  virtual meetings and events to a more lifelike experience.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Explore custom backgrounds in Teams for unique virtual
                  meetings.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Custom backgrounds in Microsoft Teams let you express your
                  personal style and add a touch of fun and inclusivity to
                  meetings. Keep the focus on you by minimizing distractions in
                  the room with these backgrounds, bringing a fresh perspective
                  to face-to-face interactions.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgOne}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgTwo}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Guidance for hosting successful virtual events.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  This guidance is designed to aid event organizers, technical
                  producers, IT professionals, and content creators in
                  delivering seamless virtual events. Organized by role and
                  event phase, it offers ongoing updates with best practices,
                  incorporating new product features and guidelines to ensure
                  your success.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Frontline Worker Support: Essential Guidance
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Frontline workers are indispensable—they're your
                  customer-facing ambassadors, witnessing your offerings in
                  action and embodying your brand. Their drive, creativity, and
                  initiative spark innovation, enhance customer experiences, and
                  breathe life into your organizational strategies.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgThree}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgFour}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Empowering small and medium businesses to maximize
                  productivity with Microsoft Teams.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  We're thrilled to assist your company in enhancing
                  communication, collaboration, and workflow efficiency with
                  Microsoft Teams, whether your employees are working remotely,
                  collaborating with external partners, or innovating to serve
                  customers better.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Engage seamlessly with meetings, webinars, and town halls
                  using Microsoft Teams.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Leverage Microsoft Teams and Microsoft 365 services to enhance
                  communication with employees, customers, and partners. Dive
                  into our best practice guidance below to kickstart your
                  journey, featuring the latest town hall experience.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgFive}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
          <div className="mb-0">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
              {/* Image Section */}
              <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
                <img
                  src={ImgSix}
                  alt="microsoft-365 onedrive image"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              {/* Content Section */}
              <div className="lg:w-1/2 lg:ml-8">
                <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                  Enhancing education through remote learning.
                </h2>
                <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                  Today, students need equitable access to technology more than
                  ever. Introducing Microsoft Windows 11 SE and Microsoft
                  Surface Laptop SE. Join us at Reimagine, a Microsoft virtual
                  event where changemakers and industry leaders collaborate to
                  bridge pandemic-induced gaps, leverage innovative technology,
                  and share best practices for inclusive learning. Available
                  now, on-demand.
                </p>
                <Link
                  to="/learn-more"
                  className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamComponent;
