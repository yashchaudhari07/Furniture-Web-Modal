import React, { useState } from "react";
import { Checkoutpage } from "./Checkoutpage";
import { Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Cart = () => {
  // Example user-selected cart data (you can replace this with props or API data)
     const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "https://via.placeholder.com/80", // Replace with actual image
    },
    {
      id: 2,
      name: "Nordic Chair",
      price: 150000,
      quantity: 2,
      image: "https://via.placeholder.com/80",
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
   <div>
    <Navbar/>
     <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-yellow-50 text-gray-700 text-sm">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Quantity</th>
              <th className="py-4 px-6">Subtotal</th>
              <th className="py-4 px-6">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                {/* Product Image & Name */}
                <td className="py-6 px-6 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <span className="text-gray-700">{item.name}</span>
                </td>

                {/* Price */}
                <td className="py-6 px-6 text-gray-700">
                  Rs. {item.price.toLocaleString()}
                </td>

                {/* Quantity */}
                <td className="py-6 px-6">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 h-10 border rounded-md text-center focus:outline-none"
                  />
                </td>

                {/* Subtotal */}
                <td className="py-6 px-6 text-gray-700">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </td>

                {/* Remove Button */}
                <td className="py-6 px-6">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-yellow-600 hover:text-yellow-800 text-xl"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Totals */}
      <div className="flex justify-end mt-12">
        <div className="bg-yellow-50 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Cart Totals
          </h2>
          <div className="space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-400">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
            {/* Total */}
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold">Total</span>
              <span className="text-yellow-600 font-semibold">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>
            {/* Check Out Button */}
            <button className="w-full mt-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Cart;
