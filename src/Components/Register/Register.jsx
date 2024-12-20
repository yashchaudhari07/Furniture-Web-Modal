import React, { useState } from "react";

const Register = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Billing details</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option>Sri Lanka</option>
            <option>India</option>
            <option>USA</option>
          </select>
          <input
            type="text"
            placeholder="Street address"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option>Western Province</option>
            <option>Central Province</option>
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="border p-2 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 rounded w-full"
          />
          <textarea
            placeholder="Additional information"
            className="border p-2 rounded w-full"
          ></textarea>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Product</h2>
        <div className="space-y-4 border-b pb-4">
          <div className="flex justify-between">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-yellow-600">Rs. 250,000.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h3 className="font-semibold mb-4">Payment Methods</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-600 mb-2">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared.
            </p>

            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="mr-2"
              />
              Cash On Delivery
            </label>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Your personal data will be used to manage your account and support
            your experience on this site. See our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>

          {/* Place Order Button */}
          <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
