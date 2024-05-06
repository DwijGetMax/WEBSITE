import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// Sample data for partner information
const partners = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150", // Placeholder image URL
    about:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Add more partner information as needed
];

// MegaMenu component
const Partner = () => {
  return (
    <div className="mega-menu bg-white rounded-lg shadow-lg p-4 space-y-4">
      <div className="menu-title font-semibold text-xl mb-2 flex items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="mr-2 text-blue-500 text-2xl"
        />
        Our Partners
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner-card bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={partner.image}
                alt={partner.name}
                className="h-32 w-auto rounded-full"
              />
            </div>
            <div className="text-center mb-2">
              <div className="text-lg font-semibold mb-2">{partner.name}</div>
              <p className="text-sm text-gray-700">{partner.about}</p>
            </div>
            <div className="flex justify-center">
              <a
                href={partner.social.facebook}
                className="text-gray-600 hover:text-blue-600 mr-2"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  style={{ color: "#3b5998" }}
                />
              </a>
              <a
                href={partner.social.twitter}
                className="text-gray-600 hover:text-blue-600 mr-2"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  style={{ color: "#1da1f2" }}
                />
              </a>
              <a
                href={partner.social.linkedin}
                className="text-gray-600 hover:text-blue-600"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="lg"
                  style={{ color: "#0077b5" }}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
