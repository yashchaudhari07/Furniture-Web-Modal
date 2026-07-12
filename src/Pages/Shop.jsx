import React, { useState } from 'react';
import { PageHeader } from '../Components/Pageheader/PageHeader';
import Navbar from '../Components/Navbar/Navbar';
import Productcard from '../Components/ShopPage/Productcard';
import Footer from '../Components/Footer/Footer';
import { products } from '../Data';

export const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <Navbar />
      <PageHeader Pagename="Shop" />
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Shop the Best Furniture</h1>
            <p className="mt-3 text-gray-600">Browse our curated collection and tap any item to see full product details.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Productcard
                key={product.id}
                product={product}
                onAddToCart={() => alert(`${product.name} added to cart!`)}
              />
            ))}
          </div>

          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
            <button
              className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50"
              onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


