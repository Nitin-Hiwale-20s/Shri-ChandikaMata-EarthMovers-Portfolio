import React from "react";
import heroImage from "../assets/Eartm.jpg";

const Homepage = () => {
  return (
    <div className="bg-yellow-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="w-full h-screen flex items-center justify-center text-center bg-black bg-opacity-50 relative"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 sm:p-10 rounded-2xl text-white max-w-xl mx-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-400"> Shri ChandikaMata EarthMovers</span>
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Your trusted partner in heavy equipment and construction machinery.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition">
            Explore Services
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
