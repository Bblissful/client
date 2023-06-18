import React, { useState } from "react";

const Map = () => {
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState(null);

  const key = "550ade442cba4566a92fd4c9dcbac54e";

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const handleClick = () => {
    var requestOptions = {
      method: "GET",
    };

    fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=${key}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setDistance(data.features[0].properties))
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-screen bg-gradient-to-b from-white via-white to-[#007fff]">
      <div className="flex justify-center text-center">
        <div className="  items-center justify-between mt-28 border border-[#007fff] rounded-xl p-4 md:w-2/4">
          <div className="justify-center mb-4">
            <input
              className="border border-gray-300 rounded px-2 py-1"
              placeholder="Type address..."
              type="text"
              value={address}
              onChange={handleChange}
            />
            <button
              className="font-bold cursor-pointer bg-[#007fff] text-white py-2 px-9 rounded hover:bg-blue-800 hover:duration-500 "
              onClick={handleClick}>
              Get
            </button>
          </div>
          <div className="flex flex-col justify-center items-center text-lg mt-[30px]">
            <h1>Latitude: {distance && distance.lat}</h1>
            <h1>Longitude: {distance && distance.lon}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
