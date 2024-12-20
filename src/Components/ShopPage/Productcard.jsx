import React from "react";

const Productcard = ({ product }) => {
  const add =(cartItems,setCartItems)=>{
  setCartItems = ([product])}
  return (
    <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {product.discount}
          </div>
        )}
        {product.tag && (
          <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
            {product.tag}
          </div>
        )}
        {/* Hover Effects */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center space-x-4 transition-all">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={add}>Add to cart</button>
          <button className="text-white">Share</button>
          <button className="text-white">Compare</button>
          <button className="text-white">Like</button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-1">Stylish cafe chair</p>
        <div className="text-gray-800 font-bold">
          Rp {product.price.toLocaleString()}
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm ml-2">
              Rp {product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Productcard;
