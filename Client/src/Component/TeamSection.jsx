import React, { useState } from "react";
import founder from "../assets/founder.jpg";
import cofounder from "../assets/Co-founder.jpg";
import ceo from "../assets/Ceo.jpg";

const team = [
  {
    id: 1,
    role: {
      en: "Founder",
      mr: "संस्थापक",
      hi: "संस्थापक",
    },
    name: "Mr Rajesh Patil Hiwale",
    photo: founder,
    bio: {
      en: "Founder - Experienced in land equipment and machinery operations. Leads JCB and tractor operations effectively.",
      mr: "संस्थापक - जमीनवरील उपकरणे आणि मशीनरीच्या कामाचा मोठा अनुभव. जेसीबी आणि ट्रॅक्टरचे काम प्रभावीपणे सांभाळतात.",
      hi: "संस्थापक - भूमि उपकरण और मशीनरी संचालन में अनुभवी। जेसीबी और ट्रैक्टर संचालन को प्रभावी रूप से संभालते हैं।",
    },
    phone: "+91-7972411212",
    email: "nitinhiwale67@gmail.com",
  },
  {
    id: 2,
    role: {
      en: "Co-Founder",
      mr: "सह-संस्थापक",
      hi: "सह-संस्थापक",
    },
    name: "Mr. Dagduba Patil Hiwale",
    photo: cofounder,
    bio: {
      en: "Co-Founder - Responsible for operations and logistics. Expert in equipment management and maintenance.",
      mr: "सह-संस्थापक - ऑपरेशन आणि लॉजिस्टिकची जबाबदारी सांभाळतात. उपकरण व्यवस्थापन आणि देखभालीत तज्ज्ञ.",
      hi: "सह-संस्थापक - संचालन और लॉजिस्टिक की ज़िम्मेदारी संभालते हैं। उपकरण प्रबंधन और रखरखाव में विशेषज्ञ।",
    },
    phone: "+91-9765005230",
  },
  {
    id: 3,
    role: {
      en: "CEO",
      mr: "मुख्य कार्यकारी अधिकारी",
      hi: "मुख्य कार्यकारी अधिकारी",
    },
    name: "Mr Sarang Bhai",
    photo: ceo,
    bio: {
      en: "CEO - Responsible for business strategy, client relations, and company expansion.",
      mr: "मुख्य कार्यकारी अधिकारी - व्यवसाय धोरण, ग्राहक संबंध आणि कंपनी विस्ताराची जबाबदारी.",
      hi: "मुख्य कार्यकारी अधिकारी - व्यापार रणनीति, ग्राहक संबंध और कंपनी विस्तार की ज़िम्मेदारी।",
    },
    phone: "+91-8263949216",
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [lang, setLang] = useState("en"); // en | mr | hi

  const languageLabels = {
    en: "English",
    mr: "मराठी",
    hi: "हिंदी",
  };

  return (
    <section className="max-w-6xl mx-auto p-6 md:p-10 font-sans relative">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Shri ChandikaMata EarthMovers
          </h2>
          <p className="mt-2 text-gray-600">
            {lang === "en"
              ? "Information about our Founder, Co-Founder, and CEO"
              : lang === "mr"
              ? "आमच्या संस्थापक, सह-संस्थापक आणि मुख्य कार्यकारी अधिकाऱ्यांची माहिती"
              : "हमारे संस्थापक, सह-संस्थापक और मुख्य कार्यकारी अधिकारी की जानकारी"}
          </p>
        </div>

        {/* Language Selector */}
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border border-yellow-500 rounded-lg px-3 py-1 bg-white text-gray-700 focus:outline-none"
        >
          {Object.entries(languageLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member) => (
          <article
            key={member.id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Profile Photo */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-300 mb-4">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-yellow-700 font-medium mt-1">
              {member.role[lang]}
            </p>

            {/* Short Bio */}
            <p className="text-gray-600 mt-3 text-sm line-clamp-2">
              {member.bio[lang]}
            </p>

            {/* Buttons */}
            <div className="mt-4 flex space-x-3">
              <button
                onClick={() => setSelectedMember(member)}
                className="px-4 py-2 rounded-full border border-yellow-500 text-sm hover:bg-yellow-100"
              >
                {lang === "en"
                  ? "View Details"
                  : lang === "mr"
                  ? "तपशील पहा"
                  : "विवरण देखें"}
              </button>
              <a
                href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                className="px-4 py-2 rounded-full bg-yellow-500 text-white text-sm hover:bg-yellow-600"
              >
                {lang === "en"
                  ? "Contact"
                  : lang === "mr"
                  ? "संपर्क"
                  : "संपर्क करें"}
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Modal (Popup) */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            {/* Member Info */}
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedMember.name}
              </h3>
              <p className="text-yellow-700 font-medium mt-1">
                {selectedMember.role[lang]}
              </p>
              <p className="text-gray-700 mt-3">{selectedMember.bio[lang]}</p>

              <div className="mt-4">
                <p className="text-sm text-blue-600">{selectedMember.phone}</p>
                {selectedMember.email && (
                  <p className="text-sm text-blue-600">
                    {selectedMember.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
