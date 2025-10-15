import React from "react";

const AddressPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-700">
          Our Location
        </h1>
        <p className="text-gray-700 mt-2">
          Visit us at our office or get in touch using the details below.
        </p>
      </header>

      {/* Contact Details */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> Shri ChandikaMata EarthMovers, Mandna, Sillod, Chhatrapati Sambhaji Nagar, Maharashtra, India
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Phone:</span> +91 8262882056
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> nitinhiwale67@gmail.com
        </p>
      </section>

      {/* Map */}
      <section className="rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Chandika Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.939279987514!2d75.64807197503823!3d20.426791312437944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbd5912d2dcc95%3A0x10a848490cc7dd7a!2sChandika%20Construction%2C%20Mandna!5e0!3m2!1sen!2sin!4v1702740000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default AddressPage;
