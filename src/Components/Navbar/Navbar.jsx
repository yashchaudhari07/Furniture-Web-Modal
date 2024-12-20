import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-8 px-8 shadow-sm bg-white ">
      {/* Left Logo */}
      <div className="flex items-center text-2xl font-bold text-black">
        <span className="text-yellow-600 mr-2">⚜</span> 
        <span>Furniro</span>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-8 text-gray-700">
        <a href="/" className="hover:text-black transition">Home</a>
        <a href="/shop" className="hover:text-black transition">Shop</a>
        <a href="Cart" className="hover:text-black transition">About</a>
        <a href="Contact" className="hover:text-black transition">Contact</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4 text-gray-600">
        <button className="hover:text-black transition">
          <i className="fas fa-user text-lg"></i>
        </button>
        <button className="hover:text-black transition">
          <i className="fas fa-search text-lg"></i>
        </button>
        <button className="hover:text-black transition">
          <i className="fas fa-heart text-lg"></i>
        </button>
        <button className="hover:text-black transition">
          <i className="fas fa-shopping-cart text-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
