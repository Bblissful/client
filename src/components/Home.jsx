import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main>
        <div className="md:h-screen md:w-full md:bg-cover w-full bg-home bg-cover bg-no-repeat">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-20 pt-28">
              Tired of calculating distance by the paper method?
            </h1>
            <p className="text-center text-lg md:text-xl mb-12 text-[#ffffff] font-bold md:text-[#000000]">
              Simplify Your Distance Calculations today!
            </p>
            <Link
              to="/dashboard"
              className="mt-20 bg-blue-500 hover:bg-blue-600 text-white py-3 px-7 rounded font-bold">
              Get Started for Free
            </Link>
          </div>
        </div>

        <section className="bg-[#f9fbfc] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Why Choose space metric?
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center ">
              <div className="md:w-1/3 p-4 md:border border-[#cec9c9] rounded-xl bg-[#d3d9e4] m-5">
                <h3 className="text-xl font-semibold mb-4">Accuracy</h3>
                <p className="text-black">
                  No more guessing or relying on inapproximate calculations and
                  guessing. Our App provides precise and reliable calculation of
                  air distance by the Haversine formula which is commonly used
                  for calculating distances between two points on a
                  sphere(Earth's surface).
                </p>
              </div>

              <div className="md:w-1/3 p-4 md:border border-[#cec9c9] rounded-xl bg-[#d3d9e4] m-5">
                <h3 className="text-xl font-semibold mb-4">Easy to navigate</h3>
                <p className="text-black">
                  Our App is built in a user-friendly manner, making it easy for
                  users to navigate it easily and calculate their distance in
                  less than 30secs. There's also an option to find your desired
                  address longitude and latitude without leaving the app.
                </p>
              </div>

              <div className="md:w-1/3 p-4 md:border border-[#cec9c9] rounded-xl bg-[#d3d9e4] m-5">
                <h3 className="text-xl font-semibold mb-4">
                  Efficient and Fast
                </h3>
                <p className="text-black">
                  Say goodbye to the manual process of measuring distances on
                  maps or using complex formulas. Our calculator instantly
                  provides you with the easiest way of calculating air distance
                  between two points, saving you valuable time and effort.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              How space metric works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2 p-4 m-7 md:border border-[#cec9c9] rounded-xl bg-[#d3d9e4]">
                <h3 className="text-xl font-semibold mb-4">
                  Step 1: Enter the Coordinates
                </h3>
                <p className="text-gray-700">
                  Provide the latitude and longitude coordinates of the starting
                  point (Point A) and the destination point (Point B). Simply
                  fill in the input fields with the latitude and longitude and
                  they should be in decimal points and should be seperated by a
                  comma. Click on "Go"
                </p>
              </div>
              <div className="md:w-1/2 p-4 m-7 md:border border-[#cec9c9] rounded-xl bg-[#d3d9e4]">
                <h3 className="text-xl font-semibold mb-4">
                  Step 2: Get the Air Distance
                </h3>
                <p className="text-gray-700">
                  Once you click the "Go" button, the air distance between the
                  two points will be authomatically calculated using algorithms
                  based on the Haversine formula. The result will be displayed
                  instantly too.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 m-7">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Start Using Space Metric Now
            </h2>
            <p className="text-center text-lg md:text-xl mb-12">
              Take advantage of the most accurate air distance calculator today.
              It's available on all platforms and all devices
            </p>
            <div className="flex justify-center">
              <Link
                to="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded font-bold">
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>

        <footer className="bg-[#1f1e19] py-8">
          <div className="flex container mx-auto px-4 text-center text-[#ffffff]">
            <p className="w-1/2">
              &copy; {new Date().getFullYear()} Air Distance Calculator. All
              rights reserved.
            </p>
            <p className="w-1/2">
              Contact us @Gmail with blessingedeh121@gmail.com
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
