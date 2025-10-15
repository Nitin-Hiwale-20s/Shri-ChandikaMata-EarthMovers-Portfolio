import React from "react";
import logo from "../assets/Nitinjcb.jpg";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-gray-700 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center">
        {/* Logo and Brand */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-3 md:space-y-0 md:space-x-3 text-center md:text-left">
          <img
            src={logo}
            alt="EarthMovers Logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-yellow-600"
          />
          <h2 className="text-2xl font-bold text-yellow-700">
            Shri ChandikaMata 
<span className="text-gray-800"> EarthMovers</span>
          </h2>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-700">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-700 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-700 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-700 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-700 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-700">
            Contact Us
          </h3>
          <p>📍 Mandna , Sillod , Chhatrapati Sambhaji Nagar , Maharashtra, India</p>
          <p>📞 +91 8262882056</p>
          <p>✉️ nitinhiwale67@gmail.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-yellow-200 text-center py-3 mt-6 text-sm text-gray-700">
        © {new Date().getFullYear()} EarthMovers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
