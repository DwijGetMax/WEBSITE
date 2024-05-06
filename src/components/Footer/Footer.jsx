// import React from "react";
// import logo from "../../assets/getmaxWhite.png"
// import { Link } from "react-router-dom";
// function Footer() {
//   return (
//     <div className="pt-16 bg-[#1f2a37] text-white">
//       <div className="w-full border-gray-300 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto">
//         <div className="container mx-auto py-12">
//           <div className="xl:flex lg:flex md:flex pt-6">
//             <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
//               <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
//                 {/* <svg
//                   className="w-12 h-12"
//                   id="logo"
//                   enableBackground="new 0 0 300 300"
//                   height={44}
//                   viewBox="0 0 300 300"
//                   width={43}
//                   xmlns="http://www.w3.org/2000/svg"
//                   xmlnsXlink="http://www.w3.org/1999/xlink"
//                 >
//                   <g>
//                     <path
//                       fill="#4c51bf"
//                       d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
//                     />
//                   </g>
//                 </svg> */}
//                 <Link to="/" className="flex items-center">
//             <img src={logo} className="mr-1 h-10" alt="Logo" />
//           </Link>
//               </div>
//             </div>
//             <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
//               <ul>
//                 <li className="text-white font-bold text-xl mb-6">
//                   Community
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">About Us</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Guidelines and how to</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Quote from the best</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">How to start a blog</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
//               <ul>
//                 <li className="text-white font-bold text-xl mb-6">
//                   Getting Started
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">About Us</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Guidelines and how to</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Quote from the best</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">How to start a blog</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Quote from the best</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Guidelines and how to</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
//               <ul>
//                 <li className="text-white font-bold text-xl mb-6">
//                   Resources
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Accessibility</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Usability</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Marketplace</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Design &amp; Dev</a>
//                 </li>
//                 <li className="text-base text-white hover:text-gray-700 mb-5">
//                   <a href="javascript:void(0)">Marketplace</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
//             <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
//               <p className="text-gray-400 text-base  ">
//                 2024 GetMax. All Rights Reserved
//               </p>
//             </div>
//             <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
//               <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
//                 <li className="text-gray-400 hover:text-gray-900 text-base mb-4 sm:mb-0">
//                   <a href="javascript:void(0)">Terms of service</a>
//                 </li>
//                 <li className="text-gray-400 hover:text-gray-900 text-base mb-4 sm:mb-0">
//                   <a href="javascript:void(0)">Privacy Policy</a>
//                 </li>
//                 <li className="text-gray-400 hover:text-gray-900 text-base mb-4 sm:mb-0">
//                   <a href="javascript:void(0)">Security</a>
//                 </li>
//                 <li className="text-gray-400 hover:text-gray-900 text-base mb-4 sm:mb-0">
//                   <a href="javascript:void(0)">Sitemap</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
//               <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
//                 <div>
//                   <a href="javascript:void(0)">
//                     <svg
//                       aria-label="Twitter"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#718096"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-twitter"
//                     >
//                       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                     </svg>
//                   </a>
//                 </div>
//                 <div>
//                   <a href="javascript:void(0)">
//                     <svg
//                       aria-label="Instagram"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#718096"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-instagram"
//                     >
//                       <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
//                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//                     </svg>
//                   </a>
//                 </div>
//                 <div>
//                   <a href="javascript:void(0)">
//                     <svg
//                       aria-label="Dribble"
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="icon icon-tabler icon-tabler-dribbble"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="#718096"
//                       fill="none"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path stroke="none" d="M0 0h24v24H0z" />
//                       <circle cx={12} cy={12} r={9} />
//                       <path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
//                       <path d="M6.4 19c3.5-3.5 6-6.5 14.5-6.4" />
//                       <path d="M3.1 10.75c5 0 9.814-.38 15.314-5" />
//                     </svg>
//                   </a>
//                 </div>
//                 <div>
//                   <a href="javascript:void(0)">
//                     <svg
//                       aria-label="Github"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width={24}
//                       height={24}
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#718096"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="feather feather-github"
//                     >
//                       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

//==================================================================================

//==================================================================================

// import React from 'react';
// import logo from "../../assets/getmaxWhite.png"

// const Footer = () => {
//   return (
//     <footer className=" text-white bg-[#1f2a37] to-gray-100">
//       <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//           <div>
//             <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
//             <p className="max-w-xs mt-4 text-sm  text-white">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
//             </p>
//             <div className="flex mt-8 space-x-6 text-gray-600">
//               <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
//                 <span className="sr-only"> Facebook </span>
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                   <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                 </svg>
//               </a>
//               {/* Add similar links for Instagram, Twitter, GitHub, and Dribbble */}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
//             <div>
//               <p className="font-medium">Company</p>
//               <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
//                 <a className="hover:opacity-75" href="#">About</a>
//                 <a className="hover:opacity-75" href="#">Meet the Team</a>
//                 <a className="hover:opacity-75" href="#">History</a>
//                 <a className="hover:opacity-75" href="#">Careers</a>
//               </nav>
//             </div>
//             <div>
//               <p className="font-medium">Services</p>
//               <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
//                 <a className="hover:opacity-75" href="#">1on1 Coaching</a>
//                 <a className="hover:opacity-75" href="#">Company Review</a>
//                 <a className="hover:opacity-75" href="#">Accounts Review</a>
//                 <a className="hover:opacity-75" href="#">HR Consulting</a>
//                 <a className="hover:opacity-75" href="#">SEO Optimisation</a>
//               </nav>
//             </div>
//             <div>
//               <p className="font-medium">Helpful Links</p>
//               <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
//                 <a className="hover:opacity-75" href="#">Contact</a>
//                 <a className="hover:opacity-75" href="#">FAQs</a>
//                 <a className="hover:opacity-75" href="#">Live Chat</a>
//               </nav>
//             </div>
//             <div>
//               <p className="font-medium">Legal</p>
//               <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
//                 <a className="hover:opacity-75" href="#">Privacy Policy</a>
//                 <a className="hover:opacity-75" href="#">Terms &amp; Conditions</a>
//                 <a className="hover:opacity-75" href="#">Returns Policy</a>
//                 <a className="hover:opacity-75" href="#">Accessibility</a>
//               </nav>
//             </div>
//           </div>
//         </div>
//         <p className="mt-8 text-xs text-gray-800">
//           © 2023 Getmax
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";

import logo from "../../assets/getmaxWhite.png";
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#1f2a37] pb-10 pt-14 dark:bg-dark lg:pb-20 lg:pt-[50px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full ml-10">
                <a href="/#" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src={logo}
                    alt="logo"
                    className="max-w-full dark:hidden"
                  />
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                    alt="logo"
                    className="max-w-full hidden dark:block"
                  />
                </a>
                <p className="mb-7 text-sm text-white dark:text-dark-6">
                  We are a marketplace offering top-tier cloud solutions and
                  value-added services, all provided by a dedicated team of
                  experts committed to driving growth for Managed Service
                  Providers (MSPs).
                </p>
                <p className="flex items-center text-sm font-medium text-white dark:text-white pb-2">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_941_15626)">
                        <path
                          d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688ZM2.37502 3.46878C1.78127 4.12503 1.81252 5.46877 2.50002 7.18752C3.28127 9.15627 4.78127 11.3125 6.75002 13.2813C8.68752 15.2188 10.875 16.7188 12.8125 17.5C14.5 18.1875 15.8438 18.2188 16.5313 17.625L18.0313 15.0625C18.0313 15.0313 18.0313 15.0313 18.0313 15L15.2813 13.1563C15.2813 13.1563 15.2188 13.1875 15.1563 13.2813L14.4688 14.2813C14.0313 14.9063 13.1875 15.0938 12.5625 14.6875C8.62502 12.25 6.18752 8.84377 5.31252 7.46877C4.90627 6.81252 5.06252 5.96878 5.68752 5.53128L6.81252 4.75002V4.71878L4.96877 1.96877C4.96877 1.93752 4.93752 1.93752 4.90627 1.96877L2.37502 3.46878Z"
                          fill="currentColor"
                        />
                        <path
                          d="M18.3125 8.90633C17.9375 8.90633 17.6563 8.62508 17.625 8.25008C17.375 5.09383 14.7813 2.56258 11.5938 2.34383C11.2188 2.31258 10.9063 2.00008 10.9375 1.59383C10.9688 1.21883 11.2813 0.906333 11.6875 0.937583C15.5625 1.18758 18.7188 4.25008 19.0313 8.12508C19.0625 8.50008 18.7813 8.84383 18.375 8.87508C18.375 8.90633 18.3438 8.90633 18.3125 8.90633Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.2187 9.18755C14.875 9.18755 14.5625 8.93755 14.5312 8.56255C14.3437 6.87505 13.0312 5.56255 11.3437 5.3438C10.9687 5.31255 10.6875 4.93755 10.7187 4.56255C10.75 4.18755 11.125 3.9063 11.5 3.93755C13.8437 4.2188 15.6562 6.0313 15.9375 8.37505C15.9687 8.75005 15.7187 9.0938 15.3125 9.1563C15.25 9.18755 15.2187 9.18755 15.2187 9.18755Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_941_15626">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>+971 800 438629</span>
                </p>
                <p className="flex items-center text-sm font-medium text-white dark:text-white pb-2">
                  <span className="mr-3 text-primary">Mail:</span>
                  <span>ict@getmax.ae</span>
                </p>
              </div>
            </div>

            <LinkGroup header="Our Offerings">
              <NavLink link="/#" label="Microsoft 365" />
              <NavLink link="/#" label="Dynamics 365" />
              <NavLink link="/#" label="Microsoft Azure" />
              <NavLink link="/#" label="Teams PBX" />
              <NavLink link="/#" label="Cloud Protection" />
            </LinkGroup>
            <LinkGroup header="About GetMax">
              <NavLink link="/#" label="Awards" />
              <NavLink link="/#" label="Our Hubs" />
              <NavLink link="/#" label="Executive Team" />
              <NavLink link="/#" label="Our Team" />
              <NavLink link="/#" label="Why GetMax?" />
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Careers" />
              <NavLink link="/#" label="Blogs" />
              <NavLink link="/#" label="GetMax Forum" />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-orange-600 dark:text-white">
                  Follow Us On
                </h4>
                <div className="mb-6 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      className="fill-current text-gray-200"
                    >
                      <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current text-gray-200"
                    >
                      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      className="fill-current text-gray-200"
                    >
                      <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                    </svg>
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      className="fill-current text-gray-200"
                    >
                      <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                    </svg>
                  </a>
                </div>
                <p className="text-base text-white dark:text-dark-6 mb-2">
                  &copy; 2024 GetMax.Ae All Rights Reserved
                </p>
                <p className="text-base text-gray-400 dark:text-dark-6 mb-2">
                  Address:
                </p>
                <p className="text-base text-white dark:text-dark-6">
                  Unit No: 1404-A Fortune Executive Tower, Jumeirah Lakes Towers
                  Dubai UAE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-8 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-orange-600 dark:text-white">
            {header}
          </h4>
          <ul className="space-y-1">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-white hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
