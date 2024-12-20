import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Syltherine', price: 2500000, discount: '-30%' },
  { id: 2, name: 'Leviosa', price: 2500000 },
  { id: 3, name: 'Lolito', price: 7000000, discount: '-50%' },
  { id: 4, name: 'Respira', price: 500000, tag: 'New' },
];

const ProductList = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.id)}
          className="cursor-pointer border rounded-lg p-5 shadow-md hover:shadow-lg transition-all"
        >
          <h2 className="text-xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">Rp {product.price.toLocaleString()}</p>
          {product.discount && <span className="text-red-500 font-semibold">{product.discount}</span>}
          {product.tag && <span className="bg-green-500 text-white px-2 py-1 text-sm rounded">{product.tag}</span>}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
