import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 my-8">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-3">Funiro.</h2>
          <p className="text-gray-500">
            400 University Drive Suite 200 Coral Gables,<br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-500 font-medium mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/shop" className="hover:text-black">Shop</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-500 font-medium mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="/payment" className="hover:text-black">Payment Options</a></li>
            <li><a href="/returns" className="hover:text-black">Returns</a></li>
            <li><a href="/privacy" className="hover:text-black">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-500 font-medium mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
            />
            <button className="ml-2 font-medium text-black hover:underline">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-gray-200">
        <p className="text-gray-500 text-sm">2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
