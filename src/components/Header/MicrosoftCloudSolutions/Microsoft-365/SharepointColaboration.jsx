import React from "react";
import { Link } from "react-router-dom";

const SharepointColaboration = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-8 text-[#1b1c44]">
        Explore Microsoft 365 Collaboration Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Boost Team Collaboration
            </h3>
            <p className="text-gray-700 mb-4">
              Discover strategies to enhance team collaboration with intranet
              software.
            </p>
            <Link
              to="/boost-collaboration"
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Enterprise Content Management (ECM)
            </h3>
            <p className="text-gray-700 mb-4">
              Explore the comprehensive overview of enterprise content
              management (ECM) software.
            </p>
            <Link to="/ecm-software" className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              Unified Communications (UC)
            </h3>
            <p className="text-gray-700 mb-4">
              Get essential insights into unified communications (UC) for
              businesses.
            </p>
            <Link
              to="/unified-communications"
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharepointColaboration;
