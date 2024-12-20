import React, { useState } from 'react';
import { PageHeader } from '../Components/Pageheader/PageHeader';
import Navbar from '../Components/Navbar/Navbar';
import Productcard from '../Components/ShopPage/Productcard';
import Footer from '../Components/Footer/Footer';
import { products } from '../Data';
import { useNavigate } from 'react-router-dom';

export const Shop = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const itemsPerPage = 4;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    const handleOrderClick = (pdfPath) => {
        window.open(pdfPath, '_blank'); // Opens the PDF in a new tab
    };

    return (
        <div>
            <Navbar />
            <PageHeader Pagename="Shop" />
            <div className="bg-gray-50 min-h-screen p-8">
                <h1 className="text-3xl font-bold text-center mb-8">Product Page</h1>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Productcard
                            key={product.id}
                            product={product}
                            onClick={() => handleOrderClick(product.pdfPath)} // Pass the PDF path
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};


