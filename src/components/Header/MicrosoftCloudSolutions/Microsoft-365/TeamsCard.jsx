import React, { useState, useEffect } from "react";

const TeamsCard = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "Work smarter with AI-powered meetings",
    "Create deeper engagements with personalized experiences",
    "Help safeguard confidential information",
    "Infuse your orhanization's standards into every interaction",
    "Enable advanced Virtual Appointments for Teams Premium",
    "Host advanced, high-quality webinars",
    "Deliver large-scale, professionally produced town halls",
    "Create custom 3d immersive experiences",
  ];

  const descriptions = [
    `Work smarter with AI-powered meetings
    Stay focused on the meeting information that matters most with intelligent recap.`,
    `Create deeper engagements with personalized experiences
    Delight your audience with personalized meetings that embody your company brand.`,
    `Help safeguard confidential information
    Apply advanced meeting protection to help avoid data leaks, enhance encryption, and automate meeting safety options.`,
    `Infuse your organization's standards into every interaction
    Ensure quality experiences with real-time meeting performance insights and advanced reporting. Customize organizational policies for safer, more effective collaboration.`,
    `Enable advanced Virtual Appointments for Teams Premium
    Turn on advanced personalized features that track business performance, manage queues, and help reduce no-shows.`,
    `Host advanced, high-quality webinars
    Engage any audience using advanced webinar functionality that automates communications and customizes presenter and attendee experiences.`,
    `Deliver large-scale, professionally produced town halls​
    Create meaningful connections with your audience using advanced functionality in town halls.`,
    `Create custom 3D immersive experiences
    Design immersive experiences with Microsoft Mesh to elevate engagement at larger sized company events- such as for training and onboarding, tours, and internal showcases.`,
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_GT_Review%20content%20that%E2%80%99s%20most%20relevant%20to%20you_NotZoomed?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_a_enjoy_simple_2200x1200_1x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_h_help_safeguard_2200x1200_1x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_infuse_standards_dashboard_2200x1200_1x-1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_l_enable_personalized_2200x1200_1x1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_q_host_advance_2200x1200_1x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Deliver-large-scaleprofessionally-producedtownhalls_Waiting%20-%20organizer%209%20-%20town%20hall_CB?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OasisSmall_Context_03_Web_Blade_CB?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=90&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center">
        {/* <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
          Transform Your Work Methodology with Innovative Strategies
        </h1> */}
      </div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5,6,7,8].map((part) => (
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
        <div className="w-3/4 relative ">
          <div
            className="right-column"
            style={{ maxHeight: "70vh", overflowY: "auto" }}
          >
            {[1, 2, 3, 4, 5, 6, 7,8].map((part) => (
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
                        className="image border-8 border-gray-500 rounded-3xl max-w-full"
                        style={{ maxWidth: "500px" }} // Set the maximum width for the image
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

export default TeamsCard;

// import React, { useState } from "react";

// const TeamsCard = () => {
//   const [selectedPart, setSelectedPart] = useState(0);
//   const [selectedSubPart, setSelectedSubPart] = useState(null);

//   const handleClick = (partIndex, subPartIndex = null) => {
//     setSelectedPart(partIndex);
//     setSelectedSubPart(subPartIndex);
//   };

//   const partNames = [
//     "Work smarter with AI-powered meetings",
//     [
//       "Get a summary of every meeting",
//       "Keep up on action items with AI-generated tasks",
//       "Review content that's most relevant to you",
//       "Translate in real-time",
//     ],
//     "Create deeper engagements with personalized experiences",
//     [
//       "Easily schedule the right type of meeting",
//       "See what resonates with your audience",
//       "Make meetings more fun and personal",
//     ],
//     "Help safeguard confidential information",
//     [
//       "Help deter leaks with watermarking",
//       "Increase confidentiality with more meeting options",
//       "Automate meeting protection with sensitivity labels",
//     ],
//     "Infuse your organization's standards into every interaction",
//     [
//       "Proactively monitor meeting quality using real-time telemetry",
//       "Let your brand shine",
//       "Empower your IT team with Advanced Collaboration Tools",
//     ],
//     "Enable advanced Virtual Appointments for Teams Premium",
//     [
//       "Deliver seamless customer experiences",
//       "Get flexible scheduling and appointment management",
//       "Improve outcomes with reports and analytics",
//       "Let clients easily join from a mobile browser",
//     ],
//     "Host advanced, high-quality webinars",
//     [
//       "Streamline webinar communications",
//       "Customise webinar communications",
//       "Present with ease using behind-the-scenes tools",
//       "Keep attendees interested and focused",
//       "Analyse attendee engagement",
//       "Maintain the privacy of attendees",
//     ],
//     "Deliver large-scale, professionally produced town halls",
//     [
//       "Increase audience capacity for a broader reach",
//       "Deliver a high-quality, seamless event experience",
//       "Tailor town hall communications",
//       "Moderate the discussion and interact with attendees",
//       "Monitor event performance in real time",
//     ],
//     "Create custom 3d immersive experiences",
//     ["Built-in tools for creators", "Mesh toolkit for developers"],
//   ];

//   const subPartDescriptions = [
//     " Di", // Placeholder for main part description
//     [
//       `Get a summary of every meeting - Stay focused on the meeting information that matters most with intelligent recap.`,

//       `Keep up on action items with AI-generated tasks - Delight your audience with personalized meetings that embody your company brand.`,

//       `Review content that's most relevant to you - Apply advanced meeting protection to help avoid data leaks, enhance encryption, and automate meeting safety options.`,

//       `Translate in real-time - Ensure quality experiences with real-time meeting performance insights and advanced reporting. Customize organizational policies for safer, more effective collaboration.`,
//     ],
//     "D2",
//     ["D1", "D2", "D3"],
//     "D3",
//     ["D1", "D2", "D3"],
//     "D4",
//     ["D1", "D2", "D3"],
//     "D5",
//     ["D1", "D2", "D3", "D4"],
//     "D6",
//     ["D1", "D2", "D3", "D4", "D5"],
//     "D7",
//     ["D1", "D2", "D3", "D4", "D5", "D6"],
//     D8,
//     ["D1", "D2"],
//   ];

//   const imageUrls = [
//     "I1", // Placeholder for main part image
//     [
//       "https://cdn.example.com/image1_subpart1.jpg",
//       "https://cdn.example.com/image1_subpart2.jpg",
//       "https://cdn.example.com/image1_subpart3.jpg",
//       "https://cdn.example.com/image1_subpart4.jpg",
//     ],
//     "https://cdn.example.com/image2.jpg",
//     ["I1", "I2", "I3"],
//     "https://cdn.example.com/image3.jpg",
//     ["I1", "I2", "I3"],
//     "https://cdn.example.com/image4.jpg",
//     ["I1", "I2", "I3"],
//     "https://cdn.example.com/image5.jpg",
//     ["I1", "I2", "I3", "I4"],
//     "https://cdn.example.com/image6.jpg",
//     ["I1", "I2", "I3", "I4", "I5"],
//     "https://cdn.example.com/image7.jpg",
//     ["I1", "I2", "I3", "I4", "I5", "I6"],
//     "https://cdn.example.com/image8.jpg",
//     ["I1", "I2"],
//   ];

//   return (
//     <>
//       <div className="flex justify-center">
//         {/* <h1 className="text-4xl font-semibold text-[#1b1c44] mb-8">
//           Transform Your Work Methodology with Innovative Strategies
//         </h1> */}
//       </div>
//       <div className="flex">
//         {/* Left column */}
//         <div className="w-1/4 text-black font-semibold relative">
//           {partNames.map((part, index) => (
//             <div
//               key={index}
//               className="cursor-pointer p-4 border-b border-gray-600"
//             >
//               {Array.isArray(part) ? (
//                 <div>
//                   {part.map((subPart, subIndex) => (
//                     <div
//                       key={subIndex}
//                       className={`cursor-pointer p-2 border-b border-gray-400 ${
//                         selectedPart === index && selectedSubPart === subIndex
//                           ? "bg-blue-600"
//                           : ""
//                       }`}
//                       onClick={() => handleClick(index, subIndex)}
//                     >
//                       {subPart}
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div
//                   className={`cursor-pointer p-2 border-b border-gray-400 ${
//                     selectedPart === index && !Array.isArray(partNames[index])
//                       ? "bg-blue-600"
//                       : ""
//                   }`}
//                   onClick={() => handleClick(index)}
//                 >
//                   {part}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right column with content */}
//         <div className="w-3/4 relative">
//           {/* Add your text and image content for each part */}
//           <h2 className="text-3xl font-semibold mb-4 text-orange-600">
//             {Array.isArray(partNames[selectedPart])
//               ? partNames[selectedPart][selectedSubPart]
//               : partNames[selectedPart]}
//           </h2>
//           <div className="mb-4 flex justify-center">
//             <div className="image-container">
//               <img
//                 src={
//                   Array.isArray(partNames[selectedPart])
//                     ? imageUrls[selectedPart][selectedSubPart]
//                     : imageUrls[selectedPart]
//                 }
//                 alt={`Part ${selectedPart}`}
//                 className="image border-8 border-gray-500 rounded-3xl"
//               />
//             </div>
//           </div>
//           <p className="text-black">
//             {Array.isArray(subPartDescriptions[selectedPart]) &&
//             selectedSubPart !== null
//               ? subPartDescriptions[selectedPart][selectedSubPart]
//               : null}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeamsCard;
