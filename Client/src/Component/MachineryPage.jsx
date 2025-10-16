import React from "react";
import jcb1 from "../assets/Jcb1.jpg";
import jcb2 from "../assets/Earth.jpg";
import jcb3 from "../assets/jcb7.jpg";
import jcb4 from "../assets/jcb6.jpg";
import jcb5 from "../assets/jcb8.jpg";
import jcb6 from "../assets/Eartm.jpg";

const machineryImages = [
  { src: jcb1, alt: "JCB digging", caption: "JCB digging efficiently" },
  { src: jcb2, alt: "JCB lifting", caption: "JCB lifting heavy load" },
  { src: jcb3, alt: "JCB leveling", caption: "JCB leveling the ground" },
  { src: jcb4, alt: "JCB road work", caption: "JCB working on road site" },
  { src: jcb5, alt: "JCB construction", caption: "JCB helping in construction" },
  { src: jcb6, alt: "JCB site", caption: "JCB operating at full power" },
];

const MachineryPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-700">
          Our JCB Machinery in Action
        </h1>
        <p className="text-gray-700 mt-2">
          Watch our JCB machinery working efficiently at your service!
        </p>
      </header>

      {/* Grid of Images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {machineryImages.map((machine, index) => (
          <div key={index} className="text-center">
            <img
              src={machine.src}
              alt={machine.alt}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg shadow-md mb-2 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-700 font-medium">{machine.caption}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MachineryPage;
