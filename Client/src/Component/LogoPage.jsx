import React from "react";
import logo from "../assets/Nitinjcb.jpg";

const LogoPage = () => {
  return (
    <div className="hidden fixed top-4 left-4 z-50">
      <img
        src={logo}
        alt="Shri ChandikaMata EarthMovers Logo"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg border-2 border-yellow-500 bg-white"
      />
    </div>
  );
};

export default LogoPage;
