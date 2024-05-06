import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeMainLinkIndex, setActiveMainLinkIndex] = useState(null);
  const [activeSublinkIndex, setActiveSublinkIndex] = useState(null);
  const [activeSubSublinkIndex, setActiveSubSublinkIndex] = useState(null);

  const menuItems = [
    {
      title: "Microsoft Cloud Solutions",

      sublinks: [
        {
          title: "Microsoft 365",

          subSublinks: [
            { title: "Copilot", link: "/microsoft-365/copilot" },
            {
              title: "Exchange Online",
              link: "/microsoft-365/outlook-exchange-online",
            },
            {
              title: "SharePoint and One Drive",
              link: "/microsoft-365/sharepoint-one-drive",
            },
            {
              title: "Microsoft Teams",
              link: "/microsoft-365/microsoft-teams",
            },
            {
              title: "Microsoft Teams Telephony System",
              link: "/microsoft-365/microsoft-teams-telephony-system",
            },
            {
              title: "Power Platform",
              link: "/microsoft-365/power-application",
            },
            // {
            //   title: "Power Automation",
            //   link: "/microsoft-365/power-automation",
            // },
            // { title: "Power Pages", link: "/microsoft-365/power-pages" },
            {
              title: "Microsoft 365 Defender",
              link: "/microsoft-365/microsoft-365-defender",
            },
            {
              title: "Microsoft 365 Intune",
              link: "/microsoft-365/microsoft-365-intune",
            },
            {
              title: "Microsoft Collaboration Tools",
              link: "/microsoft-365/microsoft-collaboration-tools",
            },
            {
              title: "Productivity Tools",
              link: "/microsoft-365/productivity-tools",
            },
            {
              title: "API Integration",
              link: "/microsoft-365/api-integration",
            },
          ],
        },
        {
          title: "Microsoft Azure",
          subSublinks: [
            { title: "Azure Entra ID", link: "/microsoft-azure/azure-id" },
            {
              title: "Azure Virtual World",
              link: "/microsoft-azure/azure-virtual-world",
            },
            {
              title: "Azure AI Services",
              link: "/microsoft-azure/azure-ai-services",
            },
            {
              title: "Azure Cognitive Services",
              link: "/microsoft-azure/azure-cognitive-services",
            },
            {
              title: "Azure Devops Services",
              link: "/microsoft-azure/azure-devops-services",
            },
            {
              title: "Storage",
              link: "/microsoft-azure/storage-and-backup",
            },
            {
              title: "Backup & Recovery",
              link: "/microsoft-azure/storage-and-recovery",
            },
            { title: "Logic Apps", link: "/microsoft-azure/logic-apps" },
            {
              title: "IOT Management",
              link: "/microsoft-azure/iot-management",
            },
            {
              title: "Application and API Integration",
              link: "/microsoft-azure/application-and-api-integration",
            },
          ],
        },
        {
          title: "Microsoft 365 Dynamics",
          subSublinks: [
            {
              title: "Microsoft Dynamics 365 Sales and Marketing",
              link: "/microsoft-365-dynamics/dynamics-365-sales-and-marketing",
            },
            {
              title: "Microsoft Dynamics 365 Business Central",
              link: "/microsoft-365-dynamics/dynamics-365-business-central",
            },
            {
              title: "Microsoft Dynamics 365 Customer Service",
              link: "/microsoft-365-dynamics/dynamics-365-customer-service",
            },
            {
              title: "Microsoft Dynamics 365 Field Service",
              link: "/microsoft-365-dynamics/dynamics-365-field-service",
            },
            {
              title: "Dynamics 365 Supply Chain Management",
              link: "/microsoft-365-dynamics/dynamics-365-supply-chain-management",
            },
            {
              title: "IOT Management",
              link: "/microsoft-365-dynamics/iot-management",
            },
            {
              title: "API Integrations",
              link: "/microsoft-365-dynamics/api-integrations",
            },
          ],
        },
        {
          title: "Data and Email Migration",
          subSublinks: [
            {
              title: "Server to Cloud",
              link: "/data-email-migration/server-to-cloud",
            },
            {
              title: "Cloud to Cloud",
              link: "/data-email-migration/cloud-to-cloud",
            },
            {
              title: "Server to Server",
              link: "/data-email-migration/server-to-server",
            },
          ],
        },
      ],
    },
    {
      title: "Security Solutions",

      sublinks: [
        {
          title: "Email Security",

          subSublinks: [
            {
              title: "Sophos",
              link: "/security-solutions/email-security/sophos",
            },
            {
              title: "Barracuda",
              link: "/security-solutions/email-security/barracuda",
            },
          ],
        },
        {
          title: "Endpoint Security",
          link: "/security-solutions/endpoint-security",
          subSublinks: [
            {
              title: "Microsoft Defender",
              link: "/security-solutions/endpoint-security/microsoft-defender",
            },
            {
              title: "Sophos",
              link: "/security-solutions/endpoint-security/sophos",
            },
            {
              title: "Barracuda",
              link: "/security-solutions/endpoint-security/barracuda",
            },
            {
              title: "Kaspersky",
              link: "/security-solutions/endpoint-security/kaspersky",
            },
          ],
        },
      ],
    },
    {
      title: "Backup Solutions",

      sublinks: [
        {
          title: "Data Backup",

          subSublinks: [
            {
              title: "Azure Storage",
              link: "/backup-solutions/data-backup/azure-storage",
            },
            { title: "Acronis", link: "/backup-solutions/data-backup/acronis" },
            {
              title: "Cloud Ally",
              link: "/backup-solutions/data-backup/cloud-alley",
            },
          ],
        },
        {
          title: "Email backup",
          link: "/backup-solutions/email-backup",
          subSublinks: [
            {
              title: "Cloud Alley",
              link: "/backup-solutions/email-backup/cloud-alley",
            },
          ],
        },
      ],
    },
    {
      title: "Migration",

      sublinks: [
        {
          title: "Cloud to Cloud Migration",
          link: "/migration/cloud-to-cloud-migration",
        },
        {
          title: "Server to Cloud Migration",
          link: "/migration/server-to-cloud-migration",
        },
        {
          title: "Server to Server Migration",
          link: "/migration/server-to-server-migration",
        },
        { title: "Website Migration", link: "/migration/website-migration" },
        {
          title: "Application Migration",
          link: "/migration/application-migration",
        },
      ],
    },
    {
      title: "Development & Integration Services",
      sublinks: [
        {
          title: "Website Development",
          link: "/development-integration-services/website-development",
        },
        {
          title: "Custom Web App",
          link: "/development-integration-services/custom-web-app",
        },
        {
          title: "Customer API Integrations",
          link: "/development-integration-services/customer-api-integrations",
        },
        {
          title: "Microsoft Teams",
          link: "/development-integration-services/microsoft-teams",
        },
        {
          title: "Power App",
          link: "/development-integration-services/power-app",
        },
        {
          title: "Power Pages",
          link: "/development-integration-services/power-pages",
        },
        {
          title: "Dataverse",
          link: "/development-integration-services/dataverse",
        },
      ],
    },
    {
      title: "Professional Support and Services",
      sublinks: [
        {
          title: "Remote Support (24/7)",
          link: "/professional-support-services/remote-support",
        },
        {
          title: "On-site Support",
          link: "/professional-support-services/on-site-support",
        },
        {
          title: "Managed Support Services",
          link: "/professional-support-services/managed-support-services",
        },
      ],
    },
  ];
  const handleDropdownToggle = () => {
    setActiveDropdown(!activeDropdown);
  };

  const handleMainLinkMouseEnter = (index) => {
    setActiveMainLinkIndex(index);
    setActiveSublinkIndex(null);
    setActiveSubSublinkIndex(null);
  };

  const handleSublinkMouseEnter = (sublinkIndex) => {
    setActiveSublinkIndex(sublinkIndex);
    setActiveSubSublinkIndex(null);
  };

  const handleSubSublinkMouseEnter = (subSublinkIndex) => {
    setActiveSubSublinkIndex(subSublinkIndex);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(false);
    setActiveMainLinkIndex(null);
    setActiveSublinkIndex(null);
    setActiveSubSublinkIndex(null);
  };

  return (
    <div className="relative">
      <button
        className="text-white hover:text-gray-400 focus:outline-none bg-transparent border-none px-4 py-2 rounded-md"
        onClick={handleDropdownToggle}
      >
        Our Solution & Services
      </button>
      {activeDropdown && (
        <div
          className="absolute top-full mt-4 bg-white text-gray-800 rounded-md shadow-lg"
          onMouseLeave={handleDropdownClose}
        >
          <div className="py-1">
            {menuItems.map((menuItem, index) => (
              <React.Fragment key={index}>
                <Link
                  to={menuItem.link}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                  onMouseEnter={() => handleMainLinkMouseEnter(index)}
                >
                  {menuItem.title}
                </Link>

                {activeMainLinkIndex === index && menuItem.sublinks && (
                  <div
                    className="absolute top-0 left-full mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg"
                    style={{ marginTop: `${index * 36}px` }}
                  >
                    <div className="py-1">
                      {menuItem.sublinks.map((sublink, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <Link
                            to={sublink.link}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                            onMouseEnter={() =>
                              handleSublinkMouseEnter(subIndex)
                            }
                          >
                            {sublink.title}
                          </Link>

                          {activeSublinkIndex === subIndex &&
                            sublink.subSublinks && (
                              <div
                                className="absolute top-0 left-full mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg"
                                style={{ marginTop: `${subIndex * 36}px` }}
                              >
                                <div className="py-1">
                                  {sublink.subSublinks.map(
                                    (subSublink, subSubIndex) => (
                                      <Link
                                        to={subSublink.link}
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                        onMouseEnter={() =>
                                          handleSubSublinkMouseEnter(
                                            subSubIndex
                                          )
                                        }
                                        key={subSubIndex}
                                      >
                                        {subSublink.title}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const DropdownMenu = () => {
//   const [activeDropdown, setActiveDropdown] = useState(false);
//   const [activeMainLinkIndex, setActiveMainLinkIndex] = useState(null);
//   const [activeSublinkIndex, setActiveSublinkIndex] = useState(null);
//   const [activeSubSublinkIndex, setActiveSubSublinkIndex] = useState(null);

//   const menuItems = [
//     {
//       title: "Microsoft Cloud Solutions",
//       link: "/microsoft-cloud-solutions",
//       sublinks: [
//         {
//           title: "Microsoft 365",
//           link: "/microsoft-365",
//           subSublinks: [
//             { title: "Copilot", link: "/microsoft-365/copilot" },
//             {
//               title: "Outlook and Exchange Online",
//               link: "/microsoft-365/outlook-exchange-online",
//             },
//             {
//               title: "SharePoint and One Drive",
//               link: "/microsoft-365/sharepoint-one-drive",
//             },
//             {
//               title: "Microsoft Teams",
//               link: "/microsoft-365/microsoft-teams",
//             },
//             {
//               title: "Microsoft Teams Telephony System",
//               link: "/microsoft-365/microsoft-teams-telephony-system",
//             },
//             {
//               title: "Power Application",
//               link: "/microsoft-365/power-application",
//             },
//             {
//               title: "Power Automation",
//               link: "/microsoft-365/power-automation",
//             },
//             { title: "Power Pages", link: "/microsoft-365/power-pages" },
//             {
//               title: "Microsoft 365 Defender",
//               link: "/microsoft-365/microsoft-365-defender",
//             },
//             {
//               title: "Microsoft 365 Intune",
//               link: "/microsoft-365/microsoft-365-intune",
//             },
//             {
//               title: "Microsoft Collaboration Tools",
//               link: "/microsoft-365/microsoft-collaboration-tools",
//             },
//             {
//               title: "Productivity Tools",
//               link: "/microsoft-365/productivity-tools",
//             },
//             {
//               title: "API Integration",
//               link: "/microsoft-365/api-integration",
//             },
//           ],
//         },
//         {
//           title: "Microsoft Azure",
//           link: "/microsoft-azure",
//           subSublinks: [
//             { title: "Azure ID", link: "/microsoft-azure/azure-id" },
//             {
//               title: "Azure Virtual World",
//               link: "/microsoft-azure/azure-virtual-world",
//             },
//             {
//               title: "Azure AI Services",
//               link: "/microsoft-azure/azure-ai-services",
//             },
//             {
//               title: "Azure Cognitive Services",
//               link: "/microsoft-azure/azure-cognitive-services",
//             },
//             {
//               title: "Azure Devops Services",
//               link: "/microsoft-azure/azure-devops-services",
//             },
//             {
//               title: "Storage and Backup",
//               link: "/microsoft-azure/storage-and-backup",
//             },
//             { title: "Logic Apps", link: "/microsoft-azure/logic-apps" },
//             {
//               title: "IOT Management",
//               link: "/microsoft-azure/iot-management",
//             },
//             {
//               title: "Application and API Integration",
//               link: "/microsoft-azure/application-and-api-integration",
//             },
//           ],
//         },
//         {
//           title: "Microsoft 365 Dynamics",
//           link: "/microsoft-365-dynamics",
//           subSublinks: [
//             {
//               title: "Microsoft Dynamics 365 Sales and Marketing",
//               link: "/microsoft-365-dynamics/dynamics-365-sales-and-marketing",
//             },
//             {
//               title: "Microsoft Dynamics 365 Business Central",
//               link: "/microsoft-365-dynamics/dynamics-365-business-central",
//             },
//             {
//               title: "Microsoft Dynamics 365 Customer Service",
//               link: "/microsoft-365-dynamics/dynamics-365-customer-service",
//             },
//             {
//               title: "Microsoft Dynamics 365 Field Service",
//               link: "/microsoft-365-dynamics/dynamics-365-field-service",
//             },
//             {
//               title: "Dynamics 365 Supply Chain Management",
//               link: "/microsoft-365-dynamics/dynamics-365-supply-chain-management",
//             },
//             {
//               title: "IOT Management",
//               link: "/microsoft-365-dynamics/iot-management",
//             },
//             {
//               title: "API Integrations",
//               link: "/microsoft-365-dynamics/api-integrations",
//             },
//           ],
//         },
//         {
//           title: "Data and Email Migration",
//           link: "/data-email-migration",
//           subSublinks: [
//             {
//               title: "Server to Cloud",
//               link: "/data-email-migration/server-to-cloud",
//             },
//             {
//               title: "Cloud to Cloud",
//               link: "/data-email-migration/cloud-to-cloud",
//             },
//             {
//               title: "Server to Server",
//               link: "/data-email-migration/server-to-server",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Security Solutions",
//       link: "/security-solutions",
//       sublinks: [
//         {
//           title: "Email Security",
//           link: "/security-solutions/email-security",
//           subSublinks: [
//             {
//               title: "Sophos",
//               link: "/security-solutions/email-security/sophos",
//             },
//             {
//               title: "Barracuda",
//               link: "/security-solutions/email-security/barracuda",
//             },
//           ],
//         },
//         {
//           title: "Endpoint Security",
//           link: "/security-solutions/endpoint-security",
//           subSublinks: [
//             {
//               title: "Microsoft Defender",
//               link: "/security-solutions/endpoint-security/microsoft-defender",
//             },
//             {
//               title: "Sophos",
//               link: "/security-solutions/endpoint-security/sophos",
//             },
//             {
//               title: "Barracuda",
//               link: "/security-solutions/endpoint-security/barracuda",
//             },
//             {
//               title: "Kaspersky",
//               link: "/security-solutions/endpoint-security/kaspersky",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Backup Solutions",
//       link: "/backup-solutions",
//       sublinks: [
//         {
//           title: "Data Backup",
//           link: "/backup-solutions/data-backup",
//           subSublinks: [
//             {
//               title: "Azure Storage",
//               link: "/backup-solutions/data-backup/azure-storage",
//             },
//             { title: "Acronis", link: "/backup-solutions/data-backup/acronis" },
//             {
//               title: "Cloud Alley",
//               link: "/backup-solutions/data-backup/cloud-alley",
//             },
//           ],
//         },
//         {
//           title: "Email backup",
//           link: "/backup-solutions/email-backup",
//           subSublinks: [
//             {
//               title: "Cloud Alley",
//               link: "/backup-solutions/email-backup/cloud-alley",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Migration",
//       link: "/migration",
//       sublinks: [
//         {
//           title: "Cloud to Cloud Migration",
//           link: "/migration/cloud-to-cloud-migration",
//         },
//         {
//           title: "Server to Cloud Migration",
//           link: "/migration/server-to-cloud-migration",
//         },
//         {
//           title: "Server to Server Migration",
//           link: "/migration/server-to-server-migration",
//         },
//         { title: "Website Migration", link: "/migration/website-migration" },
//         {
//           title: "Application Migration",
//           link: "/migration/application-migration",
//         },
//       ],
//     },
//     {
//       title: "Development & Integration Services",
//       link: "/development-integration-services",
//       sublinks: [
//         {
//           title: "Website Development",
//           link: "/development-integration-services/website-development",
//         },
//         {
//           title: "Custom Web App",
//           link: "/development-integration-services/custom-web-app",
//         },
//         {
//           title: "Customer API Integrations",
//           link: "/development-integration-services/customer-api-integrations",
//         },
//         {
//           title: "Microsoft Teams",
//           link: "/development-integration-services/microsoft-teams",
//         },
//         {
//           title: "Power App",
//           link: "/development-integration-services/power-app",
//         },
//         {
//           title: "Power Pages",
//           link: "/development-integration-services/power-pages",
//         },
//         {
//           title: "Dataverse",
//           link: "/development-integration-services/dataverse",
//         },
//       ],
//     },
//     {
//       title: "Professional Support and Services",
//       link: "/professional-support-services",
//       sublinks: [
//         {
//           title: "Remote Support (24/7)",
//           link: "/professional-support-services/remote-support",
//         },
//         {
//           title: "On-site Support",
//           link: "/professional-support-services/on-site-support",
//         },
//         {
//           title: "Managed Support Services",
//           link: "/professional-support-services/managed-support-services",
//         },
//       ],
//     },
//   ];
//   const handleDropdownToggle = () => {
//     setActiveDropdown(!activeDropdown);
//   };

//   const handleMainLinkMouseEnter = (index) => {
//     setActiveMainLinkIndex(index);
//     setActiveSublinkIndex(null);
//     setActiveSubSublinkIndex(null);
//   };

//   const handleSublinkMouseEnter = (sublinkIndex) => {
//     setActiveSublinkIndex(sublinkIndex);
//     setActiveSubSublinkIndex(null);
//   };

//   const handleSubSublinkMouseEnter = (subSublinkIndex) => {
//     setActiveSubSublinkIndex(subSublinkIndex);
//   };

//   const handleDropdownClose = () => {
//     setActiveDropdown(false);
//     setActiveMainLinkIndex(null);
//     setActiveSublinkIndex(null);
//     setActiveSubSublinkIndex(null);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="text-white hover:text-gray-400 focus:outline-none bg-transparent border-none px-0 py-0 rounded-md text-sm"
//         onClick={handleDropdownToggle}
//       >
//         Our Solution & Services
//       </button>
//       {activeDropdown && (
//         <div
//           className="absolute top-full mt-4 bg-white text-gray-800 rounded-md shadow-lg"
//           onMouseLeave={handleDropdownClose}
//         >
//           <div className="py-1">
//             {menuItems.map((menuItem, index) => (
//               <React.Fragment key={index}>
//                 <Link
//                   to={menuItem.link}
//                   className="block px-4 py-2 text-sm hover:bg-gray-100"
//                   onMouseEnter={() => handleMainLinkMouseEnter(index)}
//                 >
//                   {menuItem.title}
//                 </Link>

//                 {activeMainLinkIndex === index && menuItem.sublinks && (
//                   <div
//                     className="absolute top-0 left-full mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg"
//                     style={{ marginTop: `${index * 36}px` }}
//                   >
//                     <div className="py-1">
//                       {menuItem.sublinks.map((sublink, subIndex) => (
//                         <React.Fragment key={subIndex}>
//                           <Link
//                             to={sublink.link}
//                             className="block px-4 py-2 text-sm hover:bg-gray-100"
//                             onMouseEnter={() =>
//                               handleSublinkMouseEnter(subIndex)
//                             }
//                           >
//                             {sublink.title}
//                           </Link>

//                           {activeSublinkIndex === subIndex &&
//                             sublink.subSublinks && (
//                               <div
//                                 className="absolute top-0 left-full mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg"
//                                 style={{ marginTop: `${subIndex * 36}px` }}
//                               >
//                                 <div className="py-1">
//                                   {sublink.subSublinks.map(
//                                     (subSublink, subSubIndex) => (
//                                       <Link
//                                         to={subSublink.link}
//                                         className="block px-4 py-2 text-sm hover:bg-gray-100"
//                                         onMouseEnter={() =>
//                                           handleSubSublinkMouseEnter(
//                                             subSubIndex
//                                           )
//                                         }
//                                         key={subSubIndex}
//                                       >
//                                         {subSublink.title}
//                                       </Link>
//                                     )
//                                   )}
//                                 </div>
//                               </div>
//                             )}
//                         </React.Fragment>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
