import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/data';

const ItemPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const product = products.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();

  // if (!product) {
  //   return <h1 className="text-center mt-8 text-red-500">Product not found</h1>;
  // }

  const handleOrderClick = () => {
    navigate(`/order/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Images */}
      <div className="flex">
        <div className="flex flex-col gap-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
          ))}
        </div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="ml-4 rounded-lg w-full"
        />
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-4xl font-semibold mb-2">{product.name}</h1>
        <p className="text-2xl text-gray-600 mb-4">Rs. {product.price.toLocaleString()}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <button 
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-yellow-600"
          onClick={handleOrderClick}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ItemPage;