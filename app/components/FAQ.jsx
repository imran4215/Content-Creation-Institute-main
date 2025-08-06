"use client";

import React, { useState } from "react";
import { FAQData } from "@/app/Data/FAQData";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleAnswer = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 relative inline-block">
            আপনি কি এই প্রশ্নগুলো করতে চাচ্ছেন?
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-75 rounded-full"></span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQData.map((item, index) => {
            const isActive = activeIndices.includes(index);

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm bg-white transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAnswer(index)}
                  className={`w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-50 text-gray-800"
                  }`}
                >
                  <span className="text-base sm:text-lg font-semibold">
                    {item.question}
                  </span>
                  {/* Animated Icon */}
                  <FaChevronDown
                    className={`ml-4 transform transition-transform duration-300 ${
                      isActive
                        ? "rotate-180 text-white"
                        : "rotate-0 text-blue-600"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-[500px] py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
