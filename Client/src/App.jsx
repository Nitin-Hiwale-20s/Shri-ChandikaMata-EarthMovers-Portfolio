import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Homepage from "./Component/Homepage";
import Aboutpage from "./Component/Aboutpage";
import TeamSection from "./Component/TeamSection";
import MachineryPage from "./Component/MachineryPage";
import CustomerReviewsPage from "./Component/CustomerReviewsPage";
import AddressPage from "./Component/AddressPage";
import LogoPage from "./Component/LogoPage";

function App() {
  return (
    <>
      <Navbar />

      {/* All routes must go inside <Routes> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Aboutpage />
              <TeamSection />
              <MachineryPage />
              <CustomerReviewsPage />
              <AddressPage />
            </>
          }
        />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/machinery" element={<MachineryPage />} />
        <Route path="/reviews" element={<CustomerReviewsPage />} />
        <Route path="/location" element={<AddressPage />} />
        <Route path="/logo" element={<LogoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
