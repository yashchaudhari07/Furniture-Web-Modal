import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ product, onAddToCart }) => {
  const imageUrl = product.image || "https://via.placeholder.com/500x400";

  return (
    <div className="group bg-white shadow-lg rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block overflow-hidden">
        <div className="relative">
          <img src={imageUrl} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
          {product.discount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              {product.discount}
            </div>
          )}
          {product.tag && (
            <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
              {product.tag}
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>

        <div className="flex items-center justify-between gap-3">
          <div className="text-left">
            <span className="text-xl font-bold text-gray-900">Rp {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="ml-2 text-sm line-through text-gray-400">Rp {product.oldPrice.toLocaleString()}</span>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onAddToCart?.();
            }}
            className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
