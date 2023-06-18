import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [pointA, setPointA] = useState("");
  const [pointB, setPointB] = useState("");
  const [distance, setDistance] = useState("");
  const [showInput, setShowInput] = useState(true);
  const rightArrow = '\u2192';


  const calculateDistance = () => {
    // Splitting the longitude and latitude values
    const [latA, lonA] = pointA.split(",");
    const [latB, lonB] = pointB.split(",");

    // Converting latitude and longitude to radians
    const radLatA = toRadians(parseFloat(latA));
    const radLonA = toRadians(parseFloat(lonA));
    const radLatB = toRadians(parseFloat(latB));
    const radLonB = toRadians(parseFloat(lonB));

    // Calculating the difference between latitudes and longitudes
    const dLat = radLatB - radLatA;
    const dLon = radLonB - radLonA;

    // Applying Haversine formula to calculate distance
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(radLatA) *
        Math.cos(radLatB) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const earthRadius = 6371; // Earth's radius in kilometers
    const distanceInKm = earthRadius * c;

    // Setting the calculated distance
    setDistance(distanceInKm.toFixed(2));

    // Hiding the input fields
    setShowInput(false);
  };

  const resetForm = () => {
    // Clearing the input fields and showing them again
    setPointA("");
    setPointB("");
    setDistance("");
    setShowInput(true);
  };

  const toRadians = (degrees) => {
    return (degrees * Math.PI) / 180;
  };

  

  return (
    <>
      <>
        <div className="h-screen bg-gradient-to-b from-white via-white to-[#007fff]">
          <div className="flex justify-center text-center">
            <div className="flex flex-col items-center justify-between mt-28 border border-[#007fff] rounded-xl p-4 md:w-2/4">
              {showInput ? (
                <>
                  <div className="mb-4">
                    <label htmlFor="pointA" className="mr-2 font-bold">
                      Point A:
                    </label>
                    <input
                      type="text"
                      id="pointA"
                      placeholder="Latitude, Longitude"
                      value={pointA}
                      onChange={(e) => setPointA(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pointB" className="mr-2 font-bold">
                      Point B:
                    </label>
                    <input
                      type="text"
                      id="pointB"
                      value={pointB}
                      placeholder="Latitude, Longitude"
                      onChange={(e) => setPointB(e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <button
                    onClick={calculateDistance}
                    className="font-bold cursor-pointer bg-[#007fff] text-white py-2 px-9 rounded hover:bg-blue-800 hover:duration-500 ">
                    Go {rightArrow}
                  </button>
                </>
              ) : (
                <>
                  <p className="mt-4">Distance: {distance} km</p>
                  <button
                    onClick={resetForm}
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
                    Back
                  </button>
                </>
              )}
            </div>
          </div>
          <section className="mt-20 text-center">
            <p>Don't know your cordinates?</p>
            <Link to="/map"> Click here</Link>
          </section>
        </div>
      </>
    </>
  );
};


export default Dashboard;