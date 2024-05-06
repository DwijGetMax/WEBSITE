// import React, { useState } from "react";

// const SharepointCard = () => {
//   const [selectedPart, setSelectedPart] = useState(1);

//   const handleClick = (part) => {
//     setSelectedPart(selectedPart === part ? null : part);
//   };

//   const partNames = [
//     "Effortless Sharing and Seamless Collaboration Software",
//     "Empower and Enlighten Your Organization",
//     "Unlock the Power of Collective Wisdom",
//     "Revolutionize Your Business Processes",
//     "Elevate the Impact of Your Content",
//     "Leverage the Collective Intelligence",
//     "Create Content-Centric Apps",
//   ];

//   const descriptions = [
//     "Experience Dynamic Teamwork with SharePoint in Microsoft 365. Empower Every Project Team, Department, and Division with Productive Team Sites. Seamlessly Share Files, Data, News, and Resources. Tailor Your Site to Optimize Your Team's Workflow. Collaborate Effortlessly and Securely with Team Members Both Inside and Outside Your Organization, Across PCs, Macs, and Mobile Devices",
//     "Foster Unity and Keep Your Employees Informed Across Your Intranet. Boost Organizational Efficiency by Sharing Essential Resources and Applications on Home Sites and Portals. Craft Compelling Narratives with Stunning Communication Sites. Stay Updated with Personalized, Targeted News on the Web and the SharePoint Mobile App",
//     "Unlock What You Need in an Instant, Thanks to Robust Search and Smart Discovery Features. Access Information, Expertise, and Insights Effortlessly to Make Informed Decisions and Take Action. SharePoint's Advanced Content Management, Paired with Microsoft Viva Engage's Collaborative Connections and Conversations, Empowers Your Organization to Accelerate Knowledge Sharing.",
//     "Supercharge Efficiency by Streamlining Processes—From Routine Notifications and Approvals to Intricate Operational Workflows. Utilize SharePoint Lists and Libraries, Microsoft Power Automate, and Microsoft Power Apps to Craft Immersive Digital Experiences, Complete with Forms, Workflows, and Custom Apps Tailored for Any Device.",
//     "Harness the Power of AI for Content Insights, Translation, Auto-Assembly, and Annotations Seamlessly Integrated into Microsoft 365 and Teams.",
//     "Expand and Build Content Applications with High-Volume Containers, Data, and Robust APIs for Enhanced Functionality",
//     "Leverage AI-Powered Security and Compliance Measures to Analyze and Safeguard Content Throughout Its Lifecycle. Benefit from Backup/Restore Capabilities and Advanced Content Management Features for Enhanced Protection.",
//   ];

//   // Array of image URLs for each part
//   const imageUrls = [
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/01_Storyblade-SharePoint_RE27KzZ?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/02_Storyblade-SharePoint_RE27Fnx?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/03_Storyblade-SharePoint_RE27KAH?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/04_Storyblade-SharePoint_RE3TdW1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_Enhance_750x510_2x_RE59GEE?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade006_Connect_750x510_2x_RE59wjc?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=826&qlt=100&fmt=png-alpha&fit=constrain",
//     "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade007_Manage_750x510_2x_RE59wjt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
//   ];

//   return (
//     <>
//       <div className="flex justify-center ">
//         <h1 className="text-4xl font-semibold text-[#1b1c44] mb-12">
//           Elevate Your Collaboration Experience with Sharepoint
//         </h1>
//       </div>
//       <div className="flex">
//         {/* Left column */}
//         <div className="w-1/4 text-black font-semibold relative">
//           {[1, 2, 3, 4, 5, 6, 7].map((part) => (
//             <div
//               key={part}
//               className={`cursor-pointer p-4 border-b border-gray-600 ${
//                 selectedPart === part ? "bg-blue-600" : ""
//               }`}
//               onClick={() => handleClick(part)}
//               style={{
//                 transition: "transform 0.5s ease",
//                 transform: selectedPart === part ? "translateY(0)" : "",
//               }}
//             >
//               {selectedPart === part
//                 ? `Description for ${partNames[part - 1]}`
//                 : `${partNames[part - 1]}`}
//             </div>
//           ))}
//         </div>

//         {/* Right column with content */}
//         <div className="w-3/4 relative">
//           <div
//             className="right-column"
//             style={{ maxHeight: "70vh", overflowY: "auto" }}
//           >
//             {[1, 2, 3, 4, 5, 6, 7].map((part) => (
//               <div
//                 key={part}
//                 className="absolute top-0 right-0 w-full pb-20"
//                 style={{
//                   transform: `translateX(${
//                     selectedPart === part ? "0%" : "100%"
//                   })`,
//                   transition: "transform 0.5s ease",
//                   paddingTop: "0px",
//                 }}
//               >
//                 <div
//                   className={`px-8 ${selectedPart === part ? "" : "hidden"}`}
//                 >
//                   {/* Add your text and image content for each part */}
//                   <h2 className="text-3xl font-semibold mb-4 text-orange-600 flex justify-center">
//                     {partNames[part - 1]}
//                   </h2>
//                   <div className="mb-4 flex justify-center">
//                     <div className="image-container">
//                       <img
//                         src={imageUrls[part - 1]}
//                         alt={`Part ${part}`}
//                         className="image border-8 border-gray-500 rounded-2xl max-w-full"
//                         style={{ maxWidth: "400px" }} // Set the maximum width for the image
//                       />
//                     </div>
//                   </div>
//                   <p className="text-black flex justify-center">
//                     {descriptions[part - 1]}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SharepointCard;

import React, { useState } from "react";

const SharepointCard = () => {
  const [selectedPart, setSelectedPart] = useState(1);

  const handleClick = (part) => {
    setSelectedPart(selectedPart === part ? null : part);
  };

  const partNames = [
    "Effortless Sharing and Seamless Collaboration Software",
    "Empower and Enlighten Your Organization",
    "Unlock the Power of Collective Wisdom",
    "Revolutionize Your Business Processes",
    "Elevate the Impact of Your Content",
    "Leverage the Collective Intelligence",
    "Create Content-Centric Apps",
  ];

  const descriptions = [
    "Experience Dynamic Teamwork with SharePoint in Microsoft 365. Empower Every Project Team, Department, and Division with Productive Team Sites. Seamlessly Share Files, Data, News, and Resources. Tailor Your Site to Optimize Your Team's Workflow. Collaborate Effortlessly and Securely with Team Members Both Inside and Outside Your Organization, Across PCs, Macs, and Mobile Devices",
    "Foster Unity and Keep Your Employees Informed Across Your Intranet. Boost Organizational Efficiency by Sharing Essential Resources and Applications on Home Sites and Portals. Craft Compelling Narratives with Stunning Communication Sites. Stay Updated with Personalized, Targeted News on the Web and the SharePoint Mobile App",
    "Unlock What You Need in an Instant, Thanks to Robust Search and Smart Discovery Features. Access Information, Expertise, and Insights Effortlessly to Make Informed Decisions and Take Action. SharePoint's Advanced Content Management, Paired with Microsoft Viva Engage's Collaborative Connections and Conversations, Empowers Your Organization to Accelerate Knowledge Sharing.",
    "Supercharge Efficiency by Streamlining Processes—From Routine Notifications and Approvals to Intricate Operational Workflows. Utilize SharePoint Lists and Libraries, Microsoft Power Automate, and Microsoft Power Apps to Craft Immersive Digital Experiences, Complete with Forms, Workflows, and Custom Apps Tailored for Any Device.",
    "Harness the Power of AI for Content Insights, Translation, Auto-Assembly, and Annotations Seamlessly Integrated into Microsoft 365 and Teams.",
    "Expand and Build Content Applications with High-Volume Containers, Data, and Robust APIs for Enhanced Functionality",
    "Leverage AI-Powered Security and Compliance Measures to Analyze and Safeguard Content Throughout Its Lifecycle. Benefit from Backup/Restore Capabilities and Advanced Content Management Features for Enhanced Protection.",
  ];

  // Array of image URLs for each part
  const imageUrls = [
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/01_Storyblade-SharePoint_RE27KzZ?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/02_Storyblade-SharePoint_RE27Fnx?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/03_Storyblade-SharePoint_RE27KAH?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/04_Storyblade-SharePoint_RE3TdW1?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=700&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade005_Enhance_750x510_2x_RE59GEE?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade006_Connect_750x510_2x_RE59wjc?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=826&qlt=100&fmt=png-alpha&fit=constrain",
    "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade007_Manage_750x510_2x_RE59wjt?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
  ];

  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-4xl font-semibold text-[#1b1c44] mb-12">
          Elevate Your Collaboration Experience with Sharepoint
        </h1>
      </div>
      <div className="flex">
        {/* Left column */}
        <div className="w-1/4 text-black font-semibold relative">
          {[1, 2, 3, 4, 5, 6, 7].map((part) => (
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
            {[1, 2, 3, 4, 5, 6, 7].map((part) => (
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
                        className="image border-8 border-gray-500 rounded-2xl max-w-full h-auto"
                        style={{ width: "600px", maxHeight: "400px" }} // Set the maximum height for the image
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

export default SharepointCard;
