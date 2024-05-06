import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeamsCard from "./TeamsCard";
import Work_smarter_with_AI_powered_meetings from "../../../../assets/Work_smarter_with_AI_powered_meetings.mp4";
import TeamComponent from "./TeamComponent";
import TeamDropdown from "./TeamDropdown";
import TeamExplore from "./TeamExplore";

const MicrosoftTeams = () => {
  const [isOpen1, setIsOpen1] = useState(false);

  const options1 = [
    {
      text: "Download for Windows",
      link: "https://go.microsoft.com/fwlink/?linkid=2196106&clcid=0x4009&culture=en-in&country=in",
    },
    {
      text: "Download for Mac",
      link: "https://apps.apple.com/ph/app/microsoft-teams/id1113153706",
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <section
          className="bg-cover bg-center py-24 px-4 relative"
          style={{
            backgroundImage: `url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Teams_Hero_1920x720:VP3-1083x640?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=85&fmt=png-alpha&fit=constrain')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10">
            <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white leading-tight mb-4">
                Discover the Power of Microsoft 365 Teams:
                <br className="hidden lg:inline" />
                Get Started Today
              </h1>
              <p className="text-lg text-white mb-6 leading-relaxed">
                Revolutionize Collaboration: Experience a Faster, Simpler,
                Smarter, and More Flexible Teams Platform
              </p>
              <div className="flex mt-8">
                <button className="px-6 py-3 mr-4 text-white bg-blue-600 border border-blue-600 rounded-lg text-md hover:bg-blue-700 transition duration-300">
                  Sign up for free
                </button>
                <Link
                  to="#"
                  className="px-6 py-3 text-blue-500 uppercase border border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md transition duration-300"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20 px-4 ">
          <div className="container mx-auto flex flex-col items-center justify-center text-center">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4XXgg?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=77&qlt=100&fit=constrain"
              alt="microsoft-365 onedrive logo"
              className=" p-2 h-auto mb-8 bg-none"
            />
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#1b1c44] mb-4">
              Get Microsoft Teams for your laptop, smartphone, iOS, Android, and
              Windows devices
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform">
              <div className="p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Microsoft Teams for Windows & Mac
                </h1>
                <p className="text-gray-600 mb-4">
                  Effortlessly Connect with Customers and Team Members. Download
                  the Teams App to Begin Collaborating, Sharing, and Safely
                  Storing Files.
                </p>
                <div className="relative inline-block px-2 ">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => setIsOpen1(!isOpen1)}
                  >
                    Download Teams
                  </button>

                  <TeamDropdown
                    isOpen={isOpen1}
                    setIsOpen={setIsOpen1}
                    options={options1}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform">
              <div className="p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-4">
                  Microsoft Teams for Android and iOS
                </h1>
                <p className="text-gray-600 mb-4">
                  Stay on top of your life and communities effortlessly. Grab
                  the Teams app for Android and iOS now, and stay connected
                  without missing a beat.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.microsoft.teams&hl=en&gl=US&pli=1"
                    target="_blank"
                  >
                    Download Teams
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-[#1b1c44] mb-4">
              Upgrade to Microsoft Teams: Your Intelligent Workspace Solution
            </h1>
            <p className="text-lg text-[#1b1c44] mb-6 leading-relaxed">
              Transform Your Meetings with Intelligence, Engagement, and
              Security
            </p>
            <div className="relative w-full h-auto">
              <video
                autoPlay
                muted
                loop
                className="w-1/2 mx-auto rounded-lg shadow-xl"
                src={Work_smarter_with_AI_powered_meetings}
                type="video/mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#1b1c44] mb-8 text-center">
              Discover the Power of Teams Premium
            </h1>
            <p className="text-lg text-[#1b1c44] mb-8 text-center">
              Tailor Your Meetings to Perfection: Whether it's a One-on-One,
              Webinar, or Virtual Appointment, Ensure Every Interaction Matches
              Your Audience's Needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade004_b_intelligent_40x40_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=98&fmt=png-alpha&fit=constrain"
                  alt="logo"
                  className="w-16 h-16 mb-4"
                />
                <h2 className="text-xl font-semibold text-[#1b1c44] mb-2 text-center">
                  Infuse Meetings with Enhanced Intelligence
                </h2>
                <p className="text-sm text-gray-700 text-center">
                  Empower Your Meetings with AI for Optimal Focus and Impact
                </p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade004_a_personalized_40x40_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=99&fmt=png-alpha&fit=constrain"
                  alt="logotwo"
                  className="w-16 h-16 mb-4"
                />
                <h2 className="text-xl font-semibold text-[#1b1c44] mb-2 text-center">
                  Amplify Engagement in Every Meeting
                </h2>
                <p className="text-sm text-gray-700 text-center">
                  Craft Tailored Collaboration Experiences for Enhanced Business
                  Results
                </p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center transition duration-300 transform hover:scale-105">
                <img
                  src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade004_c_secure_40x40_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=99&fmt=png-alpha&fit=constrain"
                  alt="logothree"
                  className="w-16 h-16 mb-4"
                />
                <h2 className="text-xl font-semibold text-[#1b1c44] mb-2 text-center">
                  More Protected
                </h2>
                <p className="text-sm text-gray-700 text-center">
                  Collaborate more securely to meet your organization’s unique
                  needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <TeamsCard />
          <TeamComponent />
          <TeamExplore />
        </section>
      </div>
    </>
  );
};

export default MicrosoftTeams;
