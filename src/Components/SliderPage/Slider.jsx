import React, { useState } from "react";

const sliderImages = [
  {
    id: 1,
    title: "Inner Peace",
    room: "Bed Room",
    image: "https://via.placeholder.com/500x600", // Replace with actual image URL
  },
  {
    id: 2,
    title: "Modern Dining",
    room: "Dining Room",
    image: "https://via.placeholder.com/500x600",
  },
  {
    id: 3,
    title: "Elegant Space",
    room: "Living Room",
    image: "https://via.placeholder.com/500x600",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = sliderImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center my-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-700 transition duration-300">
            Explore More
          </button>
        </div>

        {/* Right Section (Carousel) */}
        <div className="lg:w-1/2 relative">
          {sliderImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transform transition-transform duration-700 ${
                index === current ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full rounded-lg shadow-lg object-cover h-[250px]"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-500 text-sm">{`0${slide.id} — ${slide.room}`}</p>
                <h3 className="font-bold text-lg text-gray-800">{slide.title}</h3>
                <div className="mt-2">
                  <a
                    href="#"
                    className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700"
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            &#8594;
          </button>
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {sliderImages.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === current ? "bg-yellow-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
