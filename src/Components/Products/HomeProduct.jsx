import React from "react";
import { useNavigate } from 'react-router-dom';
import { products } from "../../Data";

function Product() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center my-8 text-gray-800">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white border rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">
                Add to Cart
              </button>
            </div>

            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                {product.discount}
              </div>
            )}

            {/* New Badge */}
            {product.isNew && (
              <div className="absolute top-2 right-2 bg-teal-500 text-white text-sm px-2 py-1 rounded-full">
                New
              </div>
            )}

            {/* Product Info */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-gray-800">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="ml-2 text-sm line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center my-8">
        <button className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Product;