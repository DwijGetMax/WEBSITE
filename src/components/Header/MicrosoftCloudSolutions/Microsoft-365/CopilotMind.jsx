import React, { useState, useEffect } from "react";

const CopilotMind = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "Introduction",
    "Management Skills",
    "Inspiration",
    "Creativity",
    "AI Adoption",
  ];

  const descriptions = [
    "Learn why 70% of users said they were more productive with Copilot—and how your organization can be AI ready.",
    "The key to accessing the true potential of generative AI? Management skills.",
    "Those not-quite-right ideas can spark real inspiration.",
    "Get creative with different asks, feedback, and refinements until you find what works best.",
    "Find out what we’re learning about successful AI adoption from the companies getting it right.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/wiseman_microsoft_wti_november2023_final_CROPS?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=99&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=99&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=97&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/accordion-tabs-1-3?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=95&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Accordion-1.5-The-right-way-to-AI-620x396?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=400&hei=256&qlt=100&fmt=png-alpha&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
          Transform Your Work Methodology with Innovative Strategies
        </h1>
      </div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5].map((part) => (
            <div
              key={part}
              className={`cursor-pointer p-4 border-b border-gray-600 ${
                selectedPart === part ? "bg-blue-600" : ""
              }`}
              onClick={() => handleClick(part)}
              style={{
                transition: "transform 0.5s ease",
                transform: selectedPart === part ? "translateY(0)" : "",
              }}
            >
              {selectedPart === part
                ? `Description for ${partNames[part - 1]}`
                : `${partNames[part - 1]}`}
            </div>
          ))}
        </div>

        {/* Right column with content */}
        <div className="w-3/4 relative">
          <div
            className="right-column"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {[1, 2, 3, 4, 5].map((part) => (
              <div
                key={part}
                className="absolute top-0 right-0 w-full pb-20"
                style={{
                  transform: `translateX(${
                    selectedPart === part ? "0%" : "100%"
                  })`,
                  transition: "transform 0.5s ease",
                  paddingTop: "0px",
                }}
              >
                <div
                  className={`px-8 ${selectedPart === part ? "" : "hidden"}`}
                >
                  {/* Add your text and image content for each part */}
                  <h2 className="text-3xl font-semibold mb-4 text-orange-600 flex justify-center">
                    {partNames[part - 1]}
                  </h2>
                  <div className="mb-4 flex justify-center">
                    <div className="image-container">
                      <img
                        src={imageUrls[part - 1]}
                        alt={`Part ${part}`}
                        className="image border-8 border-gray-500 rounded-3xl"
                      />
                    </div>
                  </div>
                  <p className="text-black flex justify-center">
                    {descriptions[part - 1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CopilotMind;
