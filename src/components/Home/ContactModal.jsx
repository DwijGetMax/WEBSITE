import React, { useState } from "react";
import Modal from "react-modal";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import { SiMicrosoftteams } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactModal = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleEmail = () => {
    window.open("mailto:example@example.com", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/whatsappphonenumber", "_blank");
  };

  const handlePhone = () => {
    // Replace phonenumber with the desired phone number
    window.open("tel:+1234567890", "_blank");
  };

  const handleFacebook = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com", "_blank");
  };

  const handleTeams = () => {
    // Check if Microsoft Teams app is installed
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isWindows = navigator.platform.toUpperCase().indexOf("WIN") !== -1;
    const isMac = navigator.platform.toUpperCase().indexOf("MAC") !== -1;

    if (isWindows || isMac) {
      // For Windows and Mac, try opening Teams URI
      window.open("msteams:", "_self");
    } else {
      // For other platforms, open Teams web app
      window.open("https://teams.microsoft.com", "_blank");
    }
  };

  const handleContact = (contactMethod) => {
    switch (contactMethod) {
      case "email":
        handleEmail();
        break;
      case "whatsapp":
        handleWhatsApp();
        break;
      case "phone":
        handlePhone();
        break;
      case "facebook":
        handleFacebook();
        break;
      case "twitter":
        handleTwitter();
        break;
      case "teams":
        handleTeams();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button
        className="bg-orange-600 text-white font-medium py-3 px-4 rounded-full transition-all hover:bg-orange-700 active:scale-95"
        onClick={toggleModal}
      >
        {buttonText}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Contact Modal"
        className="modal fixed inset-0 flex items-center justify-center z-50 transition-opacity"
        overlayClassName="overlay fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      >
        <div className="bg-white rounded-lg overflow-hidden w-full max-w-md">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Contact an Expert</h2>
              <button
                className="text-gray-600"
                onClick={toggleModal}
                aria-label="Close Modal"
              >
                Close
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("email")}
              >
                <MdEmail size={48} color="#007bff" />
                <span className="text-sm mt-2">Email</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("whatsapp")}
              >
                <FaWhatsapp size={48} color="#25d366" />
                <span className="text-sm mt-2">WhatsApp</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("phone")}
              >
                <MdPhone size={48} color="#007bff" />
                <span className="text-sm mt-2">Phone</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("facebook")}
              >
                <FaFacebook size={48} color="#3b5998" />
                <span className="text-sm mt-2">Facebook</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("twitter")}
              >
                <FaTwitter size={48} color="#1da1f2" />
                <span className="text-sm mt-2">Twitter</span>
              </div>
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded p-4 transition duration-300"
                onClick={() => handleContact("teams")}
              >
                <SiMicrosoftteams size={48} color="#6264a7" />
                <span className="text-sm mt-2">Teams</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ContactModal;
