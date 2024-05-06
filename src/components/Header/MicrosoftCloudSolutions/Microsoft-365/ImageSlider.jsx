// import React, { useState, useEffect } from "react";

// const ImageSlider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to move to the next slide
//   const nextSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to rotate to the next slide automatically
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [currentImageIndex]); // Re-run when currentImageIndex changes

//   return (
//     <div className="relative overflow-hidden h-64 md:h-80 lg:h-96 rounded-lg shadow-xl">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Slide ${index + 1}`}
//           className={`absolute top-0 left-${
//             index === currentImageIndex ? "0" : "full"
//           } transition-transform duration-500`}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             borderRadius: "inherit",
//           }}
//         />
//       ))}
//       <button
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-transparent rounded-full p-4 md:p-6 lg:p-8 hover:from-gray-900 hover:bg-opacity-90 transition duration-300"
//         onClick={prevSlide}
//       >
//         {"<"}
//       </button>
//       <button
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-l from-gray-800 to-transparent rounded-full p-4 md:p-6 lg:p-8 hover:from-gray-900 hover:bg-opacity-90 transition duration-300"
//         onClick={nextSlide}
//       >
//         {">"}
//       </button>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to rotate to the next slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Re-run when currentImageIndex changes

  return (
    <div className="relative overflow-hidden h-80 md:h-96 lg:h-120 rounded-lg shadow-xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-${
            index === currentImageIndex ? "0" : "full"
          } transition-transform duration-500`}
          style={{
            width: "100%", // Make sure the image takes the full width
            height: "100%", // Make sure the image takes the full height
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      ))}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-gray-300 to-transparent rounded-full p-4 md:p-6 lg:p-8 hover:from-gray-400 hover:bg-opacity-90 transition duration-300"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-l from-gray-300 to-transparent rounded-full p-4 md:p-6 lg:p-8 hover:from-gray-400 hover:bg-opacity-90 transition duration-300"
        onClick={nextSlide}
      >
        {">"}
        
      </button>
    </div>
  );
};

export default ImageSlider;

