import React from "react";
import { Link } from "react-router-dom";
import OnedriveOne from "../../../../assets/onediveOne.mp4";
import OnedriveTwo from "../../../../assets/onedriveTwo.mp4";
import OnedriveThree from "../../../../assets/onedriveThree.mp4";
import OnedriveFour from "../../../../assets/onedriveFour.mp4";

const OnedrivePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero section with background image */}
      <section
        className="bg-cover bg-center py-24 px-4"
        style={{
          backgroundImage: `url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/112Blade001_Hero_1920x600_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fit=constrain')`,
        }}
      >
        <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1b1c44] leading-tight mb-4">
            Safely Store and Share
            <br className="hidden lg:inline" />
            Your Important Files with OneDrive
          </h1>
          <p className="text-lg text-[#1b1c44] mb-6 leading-relaxed">
            Ensure Your Files and Memories are Secure, Up-to-Date, and
            Accessible Across All Devices.
          </p>
          <div className="flex mt-8">
            <button className="px-4 py-2 mr-4 text-black  bg-gradient-to-r from-blue-400 to-blue-300 border-2 border-transparent rounded-lg text-md hover:text-white">
              Signup for free
            </button>
            <Link
              to="#"
              className="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto flex flex-col items-center justify-center text-center ">
          <img
            src="https://logodownload.org/wp-content/uploads/2022/06/onedrive-logo.png"
            alt="microsoft-365 onedrive logo"
            className="w-64 h-auto mb-6  bg-none"
          />
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-[#1b1c44] mb-4">
            All Your Content Securely Stored in One Convenient Location
          </h1>
          <p className="text-lg text-[#1b1c44] mb-8 leading-relaxed">
            Begin with 5 GB of complimentary cloud storage or opt for Microsoft
            365 subscription for ample space to safeguard hundreds of thousands
            of photos, videos, and files, ensuring peace of mind.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-4">
        <div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            {/* Content Section */}
            <div className="lg:w-1/2 lg:ml-8">
              <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                OneDrive: Your Ultimate Backup Buddy
              </h2>
              <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                Protect your valuable data against device failures, theft, or
                unexpected disasters. With automatic backup features, your files
                are continuously secured without any hassle. Rest easy knowing
                that even in the face of adversity, your important information
                remains safe and accessible.
              </p>
              <Link
                to="/learn-more"
                className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
              >
                Learn more
              </Link>
            </div>
            {/* Video Section */}
            <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
              <video
                src={OnedriveOne}
                alt="microsoft-365 onedrive image"
                className="w-full h-auto"
                autoPlay
                muted // Add this to autoplay the video (usually required for autoplay)
                loop // Add this to loop the video
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            {/* Video Section */}
            <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
              <video
                src={OnedriveTwo}
                alt="microsoft-365 onedrive image"
                className="w-full h-auto"
                autoPlay
                muted // Add this to autoplay the video (usually required for autoplay)
                loop // Add this to loop the video
              />
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 lg:ml-8">
              <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                Share Memories, Reconnect with Joy
              </h2>
              <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                Capture and privately share cherished photos, videos, and albums
                with loved ones. Whether it's a recent event or a precious
                memory from the past, OneDrive brings your fondest moments to
                life, together
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
        <div className="mt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            {/* Content Section */}
            <div className="lg:w-1/2 lg:ml-8">
              <h2 className="text-2xl md:text-2xl lg:text-2xl  text-[#1b1c44] mb-4">
                Your Content Secured, Sorted, and Synced Anytime, Anywhere
              </h2>
              <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                our Content Safeguarded, Streamlined, and Always Up-to-Date on
                the Go Effortlessly manage, edit, and arrange your files across
                all devices, no matter where you are. Stay connected even
                offline, with updates syncing seamlessly across your devices.
              </p>
              <Link
                to="/learn-more"
                className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
              >
                Learn more
              </Link>
            </div>
            {/* Video Section */}
            <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
              <video
                src={OnedriveThree}
                alt="microsoft-365 onedrive image"
                className="w-full h-auto"
                autoPlay
                muted // Add this to autoplay the video (usually required for autoplay)
                loop // Add this to loop the video
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
            {/* Video Section */}
            <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
              <video
                src={OnedriveFour}
                alt="microsoft-365 onedrive image"
                className="w-full h-auto"
                autoPlay
                muted // Add this to autoplay the video (usually required for autoplay)
                loop // Add this to loop the video
              />
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 lg:ml-8">
              <h2 className="text-2xl md:text-2xl lg:text-2xl text-[#1b1c44] mb-4">
                Bring Your Digital World Everywhere Life Leads You
              </h2>
              <p className="text-sm text-[#1b1c44] mb-2 leading-relaxed">
                Seamlessly Integrate Your Digital World with Your Reality With
                the OneDrive mobile app, carry your photos, videos, and files
                wherever life leads you. Edit and share on the go, and safeguard
                important documents and cherished memories by scanning and
                storing them securely in the cloud.
              </p>
              <Link
                to="/learn-more"
                className="text-blue-500 hover:text-blue-700 transition duration-500 relative"
              >
                Get the Mobile App Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <h1>Enhanced Features for a Simpler, Safer, and More Connected Life</h1>
        <div>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_1_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
            alt="logo"
          />
          <h2>Backup and Safeguard</h2>
          <p>
            Rest assured, even if your device encounters issues, your files are
            safe and sound.
          </p>
        </div>
        <div>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_2_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
            alt="logotwo"
          />
          <h2>Anywhere access</h2>
          <p>
            Access Your Files and Photos Across All Devices, Wherever You Roam.
          </p>
        </div>
        <div>
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_3_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
            alt="logothree"
          />
          <h2>Share and Stay Connected</h2>
          <p>
            Share Your Files and Photos Privately with Loved Ones, and
            Collaborate in Real-Time with Office Apps.
          </p>
        </div>
      </section> */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-3xl lg:text-3xl font-semibold text-[#1b1c44] mb-8 text-center">
            Enhanced Features for a Simpler, Safer, and More Connected Life
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_1_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
                alt="logo"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1b1c44] mb-2">
                Backup and Safeguard
              </h2>
              <p className="text-sm text-gray-700 text-center">
                Rest assured, even if your device encounters issues, your files
                are safe and sound.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_2_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
                alt="logotwo"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1b1c44] mb-2">
                Anywhere access
              </h2>
              <p className="text-sm text-gray-700 text-center">
                Access Your Files and Photos Across All Devices, Wherever You
                Roam.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade008_FeaturesToMake_3_75x75_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=40&hei=40&qlt=90&fit=constrain"
                alt="logothree"
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-xl font-semibold text-[#1b1c44] mb-2">
                Share and Stay Connected
              </h2>
              <p className="text-sm text-gray-700 text-center">
                Share Your Files and Photos Privately with Loved Ones, and
                Collaborate in Real-Time with Office Apps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnedrivePage;
