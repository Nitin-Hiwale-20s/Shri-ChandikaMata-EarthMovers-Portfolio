import React, { useState } from 'react';

const Aboutpage = () => {
  const [language, setLanguage] = useState('mr'); // 'mr' = Marathi, 'en' = English, 'hi' = Hindi

  // मजकूर data
  const content = {
    mr: {
      headerTitle: "आमच्याबद्दल (श्री चंडीका माता अर्थमूव्हर्स)",
      headerDesc: "२०१० पासून JCB आणि ट्रॅक्टरद्वारे विश्वासार्ह अर्थमूव्हर्स सेवा ⚙️",
      objectiveTitle: "आमचे उद्दिष्ट",
      objectiveDesc1: "२०१० पासून, श्री चंडीका माता अर्थमूव्हर्स JCB आणि ट्रॅक्टर वापरून उच्च दर्जाच्या अर्थमूव्हिंग जेणेकरून प्रकल्प जलद, सुरक्षित आणि कार्यक्षमतेने पूर्ण होतात.",
      objectiveDesc2: "आमचे ध्येय आहे की प्रत्येक ग्राहकाला विश्वासार्ह सेवा देऊन त्यांचे खणन प्रकल्प यशस्वी करणे, केवळ JCB आणि ट्रॅक्टर वापरून उत्कृष्ट परिणाम सुनिश्चित करणे.",
      servicesTitle: "आमच्या JCB आणि ट्रॅक्टरद्वारे सेवा",
      servicesDesc: "आम्ही केवळ JCB आणि ट्रॅक्टर वापरून खालील सेवा प्रदान करतो:",
      servicesList: [
        "जमीन खणणे आणि समतल करणे",
        "खणकाम आणि खाणकाम",
        "माती आणि साहित्य हाताळणी",
        "पाइपलाइन खणणे",
        "शेतजमीन तयारी आणि शेतीसाठी खणणे",
        "खड्डे खणणे आणि भरणे",
        "बांधकाम साहित्य ढवळणे आणि हलवणे",
        "जलसंधारण प्रकल्प",
        "लँडस्केपिंग आणि साइट तयारी"
      ],
     
    },
    en: {
      headerTitle: "About Us (Shri ChandikaMata EarthMovers)",
      headerDesc: "Reliable Earthmoving Services with JCB and Tractors Since 2010 ⚙️",
      objectiveTitle: "Our Objective",
      objectiveDesc1: "Since 2010, Shri ChandikaMata EarthMovers has been providing high-quality earthmoving using JCB and tractors, ensuring projects are completed quickly, safely, and efficiently.",
      objectiveDesc2: "Our mission is to make every client’s excavation projects successful by delivering reliable services with only JCB and tractors, ensuring excellent results.",
      servicesTitle: "Our Services with JCB and Tractors",
      servicesDesc: "We provide the following services using only JCB and tractors:",
      servicesList: [
        "Land Excavation and Leveling",
        "Digging and Mining",
        "Soil and Material Handling",
        "Pipeline Trenching",
        "Agricultural Land Preparation",
        "Pit Digging and Filling",
        "Material Mixing and Transport",
        "Water Conservation Projects",
        "Landscaping and Site Preparation"
      ],
      founderTitle: "Founder",
      founderDesc: "*Mr. Dagduba Patil Hiwale / Raju Patil Hiwale:* An experienced expert in the earthmoving and construction industry, whose guidance and dedication are the cornerstone of our success."
    },
    hi: {
      headerTitle: "हमारे बारे में (श्री चंडीका माता अर्थमूव्हर्स)",
      headerDesc: "2010 से JCB और ट्रैक्टर द्वारा भरोसेमंद अर्थमूवर सेवाएं ⚙️",
      objectiveTitle: "हमारा उद्देश्य",
      objectiveDesc1: "2010 से, श्री चंडीका माता अर्थमूव्हर्स JCB और ट्रैक्टर का उपयोग करके उच्च गुणवत्ता वाली अर्थमूविंग सेवाएं प्रदान कर रहा है, जिससे परियोजनाएं जल्दी, सुरक्षित और कुशलतापूर्वक पूरी होती हैं।",
      objectiveDesc2: "हमारा मिशन है कि हर ग्राहक की खुदाई परियोजनाओं को सफल बनाना, केवल JCB और ट्रैक्टर का उपयोग करके विश्वसनीय सेवाएं प्रदान करना और उत्कृष्ट परिणाम सुनिश्चित करना।",
      servicesTitle: "JCB और ट्रैक्टर के साथ हमारी सेवाएं",
      servicesDesc: "हम केवल JCB और ट्रैक्टर का उपयोग करके निम्नलिखित सेवाएं प्रदान करते हैं:",
      servicesList: [
        "भूमि खुदाई और समतल करना",
        "खुदाई और खनन",
        "मिट्टी और सामग्री प्रबंधन",
        "पाइपलाइन खुदाई",
        "कृषि भूमि की तैयारी",
        "गड्ढे खोदना और भरना",
        "सामग्री मिश्रण और परिवहन",
        "जल संरक्षण परियोजनाएं",
        "लैंडस्केपिंग और साइट तैयारी"
      ],
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 font-sans">

      {/* Language Toggle */}
      <div className="flex justify-end mb-4">
        <button onClick={() => setLanguage('mr')} className={`px-4 py-2 mr-2 rounded ${language === 'mr' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>मराठी</button>
        <button onClick={() => setLanguage('en')} className={`px-4 py-2 mr-2 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>English</button>
        <button onClick={() => setLanguage('hi')} className={`px-4 py-2 rounded ${language === 'hi' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>हिंदी</button>
      </div>

      {/* Header Section */}
      <header className="text-center mb-10 p-6 bg-blue-50 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">{content[language].headerTitle}</h1>
        <p className="text-xl font-semibold text-red-600">{content[language].headerDesc}</p>
      </header>

      {/* Objective Section */}
      <section className="mb-8 p-6 border-l-4 border-blue-500 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-blue-400 pb-2 mb-4">{content[language].objectiveTitle}</h2>
        <p className="text-gray-600 mb-4">{content[language].objectiveDesc1}</p>
        <p className="text-gray-600">{content[language].objectiveDesc2}</p>
      </section>

      {/* Services and Leadership Section */}
      <section className="mb-8 p-6 border-l-4 border-yellow-500 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 border-b-2 border-yellow-400 pb-2 mb-4">{content[language].servicesTitle}</h2>
        <p className="text-gray-600 mb-4">{content[language].servicesDesc}</p>
        <ul className="list-disc pl-5 text-gray-600 mb-4">
          {content[language].servicesList.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mt-5">{content[language].founderTitle}</h3>
        <h2 className="text-gray-600 mt-2">{content[language].founderDesc}</h2>
      </section>

    </div>
  );
};

export default Aboutpage;
