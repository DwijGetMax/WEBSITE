import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Onedrive = () => {
  const navigate = useNavigate();

  const handleStartOneDrive = () => {
    navigate("/microsoft-365/onedrive");
    
  };

  return (
    <section className="mt-10">
      <main className="relative h-screen overflow-hidden bg-gradient-to-l from-gray-100 to-blue-300 dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1b1c44] leading-tight mb-4">
              Microsoft 365
              <br className="hidden lg:inline" />
              Access OneDrive for Seamless File Storage and Sharing
            </h1>
            <p className="text-lg text-[#1b1c44] mb-6 leading-relaxed">
              "If you're using Windows 11, you already have OneDrive installed
              on your PC. For other Windows versions, simply install OneDrive to
              begin."
            </p>
            <div className="flex mt-8">
              <button
                onClick={handleStartOneDrive}
                className="px-4 py-2 mr-4 text-black  bg-gradient-to-r from-orange-500 to-pink-500 border-2 border-transparent rounded-lg text-md hover:text-white"
              >
                Start OneDrive
              </button>
              <Link
                to="#"
                className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Download
              </Link>
            </div>
          </div>
          <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5 py-0 pl-9">
            <img
              src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneDriveforbusinessheroimage_RE4n1fX?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain"
              className="max-w-xs m-auto md:max-w-3xl"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Onedrive;
