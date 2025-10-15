import React from "react";
import rev1 from "../assets/jcb6.jpg";
import rev2 from "../assets/jcb4.jpg";
import rev3 from "../assets/jcb8.jpg";
import rev4 from "../assets/jcb5.jpg";
import rev5 from "../assets/jcb1.jpg";
import rev6 from "../assets/jcb2.jpg";

const reviews = [
  {
    id: 1,
    name: "Shiv Kumar",
    rating: 5,
    comment: "Excellent service! The JCB worked efficiently and on time.",
    photo: rev1,
  },
  {
    id: 2,
    name: "Anita Deshmukh",
    rating: 5,
    comment: "Very professional team and well-maintained JCB machines.",
    photo: rev2,
  },
  {
    id: 3,
    name: "Ramesh Patil",
    rating: 5,
    comment: "Highly recommend Shri ChandikaMata EarthMovers for any JCB work!",
    photo: rev3,
  },
  {
    id: 4,
    name: "Priya Kulkarni",
    rating: 4,
    comment: "Great experience — reliable JCBs and friendly staff.",
    photo: rev4,
  },
  {
    id: 5,
    name: "Suresh More",
    rating: 5,
    comment: "Prompt JCB service and skilled operators. Very satisfied!",
    photo: rev5,
  },
  {
    id: 6,
    name: "Sunita Desai",
    rating: 5,
    comment: "JCB machines are powerful and efficient. Excellent work!",
    photo: rev6,
  },
];

const CustomerReviewsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-700">
          Customer Reviews
        </h1>
        <p className="text-gray-700 mt-2">
          Hear from our satisfied customers about our JCB machinery and services!
        </p>
      </header>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {/* Customer Photo */}
            <img
              src={review.photo}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
            />

            {/* Rating */}
            <div className="mb-2">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <span key={idx} className="text-yellow-500 text-lg">&#9733;</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                <span key={idx} className="text-gray-300 text-lg">&#9733;</span>
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4">"{review.comment}"</p>

            {/* Customer Name */}
            <p className="text-gray-900 font-semibold">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewsPage;
