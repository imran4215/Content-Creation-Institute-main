"use client";
import React, { useState } from "react";
import { FiTag, FiX, FiCheck } from "react-icons/fi";

export default function MobileEnroll() {
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const originalPrice = 10000;
  const discountedPrice = 7000;

  const handleApply = () => {
    if (couponCode.trim() !== "") {
      alert(`Coupon "${couponCode}" applied!`);
      setShowCouponInput(false);
      setCouponCode("");
    }
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar (shown only on mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          {/* Price and Coupon */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-600">
                ৳{discountedPrice.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through">
                ৳{originalPrice.toLocaleString()}
              </span>
            </div>

            {!showCouponInput ? (
              <button
                onClick={() => setShowCouponInput(true)}
                className="flex items-center gap-1 text-blue-600 text-sm"
              >
                <FiTag size={16} />
                <span>Coupon</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowCouponInput(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={18} />
                </button>
              </div>
            )}
          </div>

          {/* Coupon Input (appears when coupon button clicked) */}
          {showCouponInput && (
            <div className="mb-3 flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
              <button
                onClick={handleApply}
                className="bg-green-600 text-white px-3 py-2 rounded-md text-sm flex items-center gap-1"
              >
                <FiCheck size={16} />
                Apply
              </button>
            </div>
          )}

          {/* Enroll Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
}
