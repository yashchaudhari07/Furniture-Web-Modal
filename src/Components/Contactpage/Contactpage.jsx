import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Get In Touch With Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Details */}
        <div className="space-y-8">
          <div className="flex items-start">
            <span className="text-3xl mr-4">📍</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4">📞</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="text-3xl mr-4">⏰</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Working Time
              </h3>
              <p className="text-gray-600">
                Monday–Friday: 9:00 - 22:00 <br />
                Saturday–Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Hi! I’d like to ask about"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
