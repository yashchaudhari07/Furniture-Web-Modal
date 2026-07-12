import React from "react";
import { useNavigate } from 'react-router-dom';
import { products } from "../../Data";

function Product() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Featured Collection</h1>
          <p className="mt-4 text-gray-600">Modern furniture designed for comfort and elegance, chosen from our best sellers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  {product.discount && (
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                      {product.discount}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-gray-900">Rp {product.price.toLocaleString()}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      alert(`${product.name} added to cart!`);
                    }}
                    className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/shop')}
            className="rounded-full bg-gray-900 px-8 py-3 text-white font-semibold hover:bg-black transition"
          >
            View full collection
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;