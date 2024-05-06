import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        className="flex justify-between items-center w-full p-4  hover:bg-gray-200 focus:outline-none"
        onClick={toggleAnswer}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-gray-600 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const SharepointFAQ = () => {
  const faqs = [
    {
      question: "What is SharePoint Online?",
      answer:
        "SharePoint Online is a cloud-based platform that allows organizations to create, share, and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization.",
    },
    {
      question: "What are the key features of SharePoint Online?",
      answer:
        "SharePoint Online offers a variety of features, including document management, team collaboration, intranet and portals, workflow automation, enterprise search, and business intelligence.",
    },
    {
      question: "How can SharePoint Online benefit my organization?",
      answer:
        "SharePoint Online can benefit your organization by improving collaboration, increasing productivity, enhancing communication, simplifying document management, and providing a secure and compliant platform for your business needs..",
    },
    {
      question: "Is SharePoint Online secure?",
      answer:
        "Yes, SharePoint Online is secure and compliant with industry standards and regulations. It offers built-in security features such as encryption, authentication, access controls, and compliance tools to help protect your data.",
    },
    {
      question: "Can I access SharePoint Online from anywhere?",
      answer:
        "Yes, SharePoint Online is a cloud-based platform, so you can access it from anywhere with an internet connection using a web browser or the SharePoint mobile app.",
    },
    {
      question: "What are the different types of sites in SharePoint Online?",
      answer:
        "SharePoint Online offers various types of sites, including team sites for collaboration, communication sites for sharing information, hub sites for organizing and connecting sites, and personal sites (OneDrive for Business) for individual users",
    },
    {
      question:
        "How can I customize SharePoint Online to fit my business needs?",
      answer:
        "SharePoint Online offers various customization options, such as creating custom lists, libraries, and views, designing custom forms and workflows, using SharePoint Framework (SPFx) to develop custom solutions, and integrating with other Microsoft 365 services and third-party applications.",
    },
    {
      question: "How can I get started with SharePoint Online?",
      answer:
        "To get started with SharePoint Online, you can sign up for a Microsoft 365 subscription that includes SharePoint Online, create a new SharePoint site, and start exploring its features and capabilities. Microsoft also offers documentation, training, and support resources to help you get started.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-0">
      <h1 className="text-3xl font-semibold text-[#1b1c44] mb-6 mx-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default SharepointFAQ;
