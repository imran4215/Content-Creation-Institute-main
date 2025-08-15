"use client";
import React, { useState } from "react";
import {
  FiDollarSign,
  FiClock,
  FiUsers,
  FiCheckCircle,
  FiX,
} from "react-icons/fi";

export default function CourseSidebar() {
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [originalPrice] = useState(10000);
  const [discountedPrice] = useState(8500);

  const handleApply = () => {
    if (couponCode.trim() !== "") {
      alert(`Coupon "${couponCode}" applied!`);
      setShowCouponInput(false);
      setCouponCode("");
    }
  };

  return (
    <div className="sticky top-20 bg-white border border-gray-200 rounded-xl p-6 space-y-6 max-h-[100vh] overflow-y-auto">
      {/* Video Preview */}
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm">
        <iframe
          src="https://www.youtube.com/embed/4WcE5oJKCdQ"
          title="Course Intro Video"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Course Highlights */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-700">
          <FiClock className="text-blue-500" />
          <span>60+ hours of content</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <FiUsers className="text-blue-500" />
          <span>434 students enrolled</span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <FiCheckCircle className="text-blue-500" />
          <span>Certificate of completion</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-2">
        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-500 line-through">
            ৳ {originalPrice.toLocaleString()}
          </span>
          <span className="text-2xl font-bold text-green-600">
            ৳ {discountedPrice.toLocaleString()}
          </span>
        </div>
        <div className="text-center text-sm text-green-500 font-medium">
          You save ৳ {(originalPrice - discountedPrice).toLocaleString()}
        </div>
      </div>

      {/* Coupon Section */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
        {!showCouponInput ? (
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowCouponInput(true)}
          >
            <div className="flex items-center gap-2">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                SPECIAL OFFER
              </span>
              <span className="text-sm text-gray-700">
                Use coupon code for discount
              </span>
            </div>
            <span className="text-yellow-600 font-medium text-sm">Apply</span>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Apply Coupon</h4>
              <button
                onClick={() => setShowCouponInput(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FiX />
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button
                onClick={handleApply}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enroll Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all shadow-md">
        Enroll Now
      </button>

      {/* Money Back Guarantee */}
      <div className="text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-1">
          <FiCheckCircle className="text-green-500" />
          <span>30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}
