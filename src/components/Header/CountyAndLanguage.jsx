// import React, { useState, useEffect } from "react";

// const CountryAndLanguageDropdown = () => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountryLanguage, setSelectedCountryLanguage] = useState("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const countryOptions = data.map((country) => ({
//           key: country.cca2,
//           value: country.cca2,
//           text: `${country.name.common} - ${
//             country.languages ? Object.values(country.languages)[0] : "Unknown"
//           }`,
//         }));
//         setCountries(countryOptions);

//         // Set the default selected value to UK English
//         const ukEnglishOption = countryOptions.find(
//           (option) =>
//             option.text.includes("United Kingdom") &&
//             option.text.includes("English")
//         );
//         if (ukEnglishOption) {
//           setSelectedCountryLanguage(ukEnglishOption.value);
//         }
//       });
//   }, []);

//   const handleCountryLanguageChange = (e) => {
//     setSelectedCountryLanguage(e.target.value);
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <select
//         className="block appearance-none w-32 h-8 bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-6 rounded leading-tight focus:outline-none focus:border-blue-500"
//         value={selectedCountryLanguage}
//         onChange={handleCountryLanguageChange}
//       >
//         {countries.map((option) => (
//           <option key={option.key} value={option.value}>
//             {option.text}
//           </option>
//         ))}
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         <svg
//           className="fill-current h-2 w-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path d="M14.293 5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L10 10.586l4.293-4.293z" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default CountryAndLanguageDropdown;

// import React, { useState, useEffect } from "react";
// import { useLanguage } from "../../LanguageProvider";

// const CountryAndLanguage = () => {
//   const { switchLanguage } = useLanguage();
//   const [countries, setCountries] = useState([]);
//   const [selectedCountryLanguage, setSelectedCountryLanguage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch countries");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const countryOptions = data.map((country) => ({
//           key: country.cca2,
//           value: country.cca2,
//           text: `${country.name.common} - ${
//             country.languages ? Object.values(country.languages)[0] : "Unknown"
//           }`,
//         }));
//         setCountries(countryOptions);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleCountryLanguageChange = (e) => {
//     const selectedLanguage = e.target.value;
//     setSelectedCountryLanguage(selectedLanguage);
//     switchLanguage(selectedLanguage);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="relative inline-block text-left">
//       <select
//         className="block appearance-none w-32 h-8 bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-6 rounded leading-tight focus:outline-none focus:border-blue-500"
//         value={selectedCountryLanguage}
//         onChange={handleCountryLanguageChange}
//       >
//         <option value="">Select Language</option>
//         {countries.map((option) => (
//           <option key={option.key} value={option.value}>
//             {option.text}
//           </option>
//         ))}
//       </select>
//       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//         <svg
//           className="fill-current h-2 w-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path d="M14.293 5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L10 10.586l4.293-4.293z" />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default CountryAndLanguage;

// CountryAndLanguage.js
import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageProvider";

const CountryAndLanguage = () => {
  const { switchLanguage } = useLanguage();
  const [countries, setCountries] = useState([]);
  const [selectedCountryLanguage, setSelectedCountryLanguage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        return response.json();
      })
      .then((data) => {
        const countryOptions = data.map((country) => ({
          key: country.alpha2Code,
          value: country.alpha2Code,
          text: `${country.name} - ${country.languages[0]?.name || "Unknown"}`,
        }));
        setCountries(countryOptions);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCountryLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setSelectedCountryLanguage(selectedLanguage);
    switchLanguage(selectedLanguage);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="relative inline-block text-left">
      <select
        className="block appearance-none w-32 h-8 bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-6 rounded leading-tight focus:outline-none focus:border-blue-500"
        value={selectedCountryLanguage}
        onChange={handleCountryLanguageChange}
      >
        <option value="">Select Language</option>
        {countries.map((option) => (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-2 w-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.293 5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L10 10.586l4.293-4.293z" />
        </svg>
      </div>
    </div>
  );
};

export default CountryAndLanguage;
