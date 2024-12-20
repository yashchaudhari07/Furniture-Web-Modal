import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Data';


const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center mt-8 text-red-500">Product not found</h1>;
  }

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

        {/* Sizes */}
        <div className="mb-4">
          <h3 className="text-gray-700 mb-2">Size</h3>
          <div className="flex gap-2">
            {product.size.map((size) => (
              <button
                key={size}
                className="border rounded-lg px-4 py-2 hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-6">
          <h3 className="text-gray-700 mb-2">Color</h3>
          <div className="flex gap-4">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* SKU, Category, Tags */}
        <div className="text-gray-500 space-y-2 mb-6">
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Tags:</strong> {product.tags.join(', ')}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="border rounded-lg px-6 py-3 hover:bg-gray-100">
            Add To Cart
          </button>
          <button className="border rounded-lg px-6 py-3 hover:bg-gray-100">
            + Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
