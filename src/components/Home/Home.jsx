// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import Success from "../SuccessStory/Success";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <>
//       <section>
//         <span className="block mb-4 text-xs md:text-sm text-black font-medium">
//           Our Global Presence EMEA | <Link to="/">North America | APAC</Link>
//         </span>
//         <span className="block mb-4 text-xs md:text-sm text-black font-medium">
//           Want to know more? <Link to="/">Talk to an Expert</Link>
//         </span>
//       </section>
//       <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
//         <div>
//           <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
//             Better every day
//           </span>
//           <h3 className="text-4xl md:text-6xl font-semibold">
//             Let's change it up a bit
//           </h3>
//           <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
//             in error repellat voluptatibus ad.
//           </p>
//           <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
//             Find a class
//           </button>
//         </div>
//         <ShuffleGrid />
//       </section>
//       <section>
//         <div className="container mx-auto pt-16">
//           <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
//             <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
//               Our Partners
//             </h1>
//             <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
//               Our success has come from being committed to the property and
//               investing in the development of the product to maximize sales. At
//               the same time and maintaining the integrity.
//             </p>
//           </div>
//           <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
//               <img
//                 src="https://getmax.ae/wp-content/uploads/2021/11/getmaxpartner_12.png"
//                 alt
//               />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
//               <img
//                 src="https://getmax.ae/wp-content/uploads/2021/11/getmaxpartner_2.png"
//                 alt
//               />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
//               <img
//                 src="https://getmax.ae/wp-content/uploads/2021/11/getmaxpartner_3.png"
//                 alt
//               />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
//               <img
//                 src="https://getmax.ae/wp-content/uploads/2021/11/getmaxpartner_4.png"
//                 alt
//               />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
//               <img
//                 src="https://th.bing.com/th/id/OIP.35VHANhf5GFdpQmGbtViewAAAA?rs=1&pid=ImgDetMain"
//                 alt
//               />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
//               <img src="https://cdn.tuk.dev/assets/berry-dark.png" alt />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
//               <img src="https://cdn.tuk.dev/assets/min-dark.png" alt />
//             </div>
//             <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
//               <img src="https://cdn.tuk.dev/assets/honda-dark.png" alt />
//             </div>
//           </div>
//         </div>
//       </section>
//       <section>
//         <Success />
//       </section>
//     </>
//   );
// };

// const shuffle = (array) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
//   },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 8,
//     src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
//   },
//   {
//     id: 10,
//     src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 11,
//     src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
//   },
//   {
//     id: 12,
//     src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
//   },
//   {
//     id: 13,
//     src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   },
//   {
//     id: 14,
//     src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
//   },
//   {
//     id: 15,
//     src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
//   },
//   {
//     id: 16,
//     src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState(generateSquares());

//   useEffect(() => {
//     shuffleSquares();

//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

// export default Home;

// ===========================================================

import { FiGlobe, FiChevronDown } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Success from "../SuccessStory/Success";
import SecondScreen from "./SecondScreen"
import Partner from "./Partner";
import Team from "./Team";
import Brand from "./Brand";
import Service from "./Services";
import HomeSlat from "./HomeSlat"
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import Image1 from "../../assets/heroImage/image1.png";
import Image2 from "../../assets/heroImage/image2.png";
import Image3 from "../../assets/heroImage/image3.png";
import Image4 from "../../assets/heroImage/image4.png";
import Image5 from "../../assets/heroImage/image5.png";
import Image6 from "../../assets/heroImage/image6.jpg";
import Image7 from "../../assets/heroImage/image7.png";
import Image8 from "../../assets/heroImage/image8.png";
import Image9 from "../../assets/heroImage/image9.png";
import Image10 from "../../assets/heroImage/image10.jpeg";
import Image11 from "../../assets/heroImage/image11.jpeg";
import Image12 from "../../assets/heroImage/image12.png";
import Image13 from "../../assets/heroImage/image13.png";
import Image14 from "../../assets/heroImage/image14.png";
import Image15 from "../../assets/heroImage/image15.png";
import Image16 from "../../assets/heroImage/image16.png";

const Home = () => {
  return (
    < >
    <section >
      <section className=" py-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center">
            <h2 className="text-sm font-semibold">
              Our Global Presence:
              <span className="hidden md:inline">
                <Link
                  to="/emea"
                  className="text-orange-600 hover:underline hover:text-orange-700 text-sm ml-2"
                >
                  EMEA
                </Link>{" "}
                |
                <Link
                  to="/north-america"
                  className="text-orange-600 hover:underline hover:text-orange-700  text-sm ml-2"
                >
                  North America
                </Link>{" "}
                |
                <Link
                  to="/apac"
                  className="text-orange-600 hover:underline hover:text-orange-700  text-sm ml-2"
                >
                  APAC
                </Link>
              </span>
            </h2>
          </div>
          <div className="relative">
            <button
              onClick={() =>
                document.getElementById("dropdown").classList.toggle("hidden")
              }
              className="flex items-center space-x-2"
            >
              <FiGlobe className="h-5 w-5 cursor-pointer" />
              <span className="text-sm font-semibold">Language</span>
              <FiChevronDown className="h-5 w-5 text-gray-400" />
            </button>
            <div
              id="dropdown"
              className="absolute mt-2 py-2 w-40 bg-white rounded-lg shadow-xl z-10 hidden"
            >
              <p className="font-semibold px-4 py-2 flex items-center space-x-2">
                Select Language
                <FiChevronDown className="h-4 w-4 text-gray-400" />
              </p>
              <div className="px-4">
                <Link
                  to="/emea"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="IN"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Hindi
                </Link>
                <Link
                  to="/north-america"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  English (USA)
                </Link>
                <Link
                  to="/apac"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="AE"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Arabic (UAE)
                </Link>
                <Link
                  to="/south-africa"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="ZA"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Afrikaans (South Africa)
                </Link>
                <Link
                  to="/china"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="CN"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Mandarin (China)
                </Link>
                <Link
                  to="/saudi-arabia"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="SA"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Arabic (Saudi Arabia)
                </Link>
                <Link
                  to="/kuwait"
                  className="text-sm flex items-center hover:underline mb-1"
                >
                  <ReactCountryFlag
                    countryCode="KW"
                    svg
                    alt="Location"
                    className="h-4 w-4 mr-2"
                  />
                  Arabic (Kuwait)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-14 grid grid-cols-1 md:grid-cols-2 items-center gap-4 max-w-6xl mx-auto">
        <div>
          <h3 className="text-4xl md:text-4xl font-semibold text-[#1b1c44] ">
            {/* Let's change it up a bit */}
            Explore a{" "}
            <span className="text-orange-600 font-bold">versatile</span>{" "}
            marketplace offering{" "}
            <span className="text-orange-600 font-bold">seamless</span>{" "}
            implementation of IT services and Cloud solutions
            {/* Discover a versatile marketplace for seamless IT services and Cloud
            solutions implementation. */}
          </h3>
          <p className="text-base md:text-lg text-slate-600 my-4 md:my-6">
            Unlocking the true potential of technology isn't just about
            acquiring new tools; it's about implementing them effectively
          </p>
          <div className="flex justify-start">
            <ContactModal buttonText="Talk to an Expert" />
          </div>
        </div>
        <ShuffleGrid />
      </section>

      <section>
        {/* <Service /> */}
        <SecondScreen/>
        <Partner />
        {/* <Brand /> */}
        {/* <HomeSlat/> */}
      </section>
      <section>

      </section>
      <section>
        <Success />
        <Team />
      </section>
      </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Image1,
  },
  {
    id: 2,
    src: Image2,
  },
  {
    id: 3,
    src: Image3,
  },
  {
    id: 4,
    src: Image4,
  },
  {
    id: 5,
    src: Image5,
  },
  {
    id: 6,
    src: Image6,
  },
  {
    id: 7,
    src: Image7,
  },
  {
    id: 8,
    src: Image8,
  },
  {
    id: 9,
    src: Image9,
  },
  {
    id: 10,
    src: Image10,
  },
  {
    id: 11,
    src: Image11,
  },
  {
    id: 12,
    src: Image12,
  },
  {
    id: 13,
    src: Image13,
  },
  {
    id: 14,
    src: Image14,
  },
  {
    id: 15,
    src: Image15,
  },
  {
    id: 16,
    src: Image16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      // className="w-full h-full "
      className="square"
      style={{
        backgroundImage: `url(${sq.src})`,
        // backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;

{
  /* <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
            Better every day
          </span>
          <h3 className="text-4xl md:text-6xl font-semibold">
            Let's change it up a bit
          </h3>
          <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad.
          </p>
          <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Find a class
          </button>
        </div>
        <ShuffleGrid />
      </section> */
}

// <div className="flex flex-col gap-4 ">
//       <div className="bg-white rounded-lg p-4">
//         <div className="flex items-center space-x-4">
//           <span className="text-sm text-gray-700 font-medium">
//             Our Global Presence:
//           </span>
//           <Link
//             to="/"
//             className="text-blue-600 hover:text-red-600 text-sm font-medium transition-colors duration-300"
//           >
//             EMEA
//           </Link>
//           <span className="text-gray-500">|</span>
//           <Link
//             to="/"
//             className="text-blue-600 hover:text-red-600 text-sm font-medium transition-colors duration-300"
//           >
//             North America
//           </Link>
//           <span className="text-gray-500">|</span>
//           <Link
//             to="/"
//             className="text-blue-600 hover:text-red-600 text-sm font-medium transition-colors duration-300"
//           >
//             APAC
//           </Link>
//         </div>
//       </div>
//     </div>
// <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium pt-3">
//       Better every day
//     </span>
