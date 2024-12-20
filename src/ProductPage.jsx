import React from 'react';
import { useParams } from 'react-router-dom';

const productDetails = {
  1: { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000 },
  2: { name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000 },
  3: { name: 'Lolito', description: 'Luxury big sofa', price: 7000000 },
  4: { name: 'Respira', description: 'Outdoor bar table and stool', price: 500000 },
};

const Items = () => {
  const { id } = useParams();
  const product = productDetails[id];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      {product ? (
        <div className="text-center bg-white border rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <h2 className="text-2xl font-semibold text-green-600">
            Price: Rp {product.price.toLocaleString()}
          </h2>
        </div>
      ) : (
        <p className="text-red-500 font-semibold text-xl">Product not found</p>
      )}
    </div>
  );
};

export default Items;
