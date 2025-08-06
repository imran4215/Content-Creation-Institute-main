"use client";

import React from "react";
import { ServicesData } from "../Data/ServicesData";
import {
  FaChalkboardTeacher,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa";

// Icon mapping for each service
const serviceIcons = {
  "সেরা মেন্টর": <FaChalkboardTeacher className="w-8 h-8" />,
  "সার্বক্ষণিক সাপোর্ট": <FaHeadset className="w-8 h-8" />,
  "কোর্স চলাকালীন ইনকামের সুযোগ": <FaMoneyBillWave className="w-8 h-8" />,
};

export default function Services() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 relative py-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 relative inline-block">
            কেন আমরাই সেরা?
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-75 rounded-full"></span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ServicesData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 flex flex-col items-center text-center transform hover:-translate-y-1.5"
            >
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
                {serviceIcons[item.title] || (
                  <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative shapes */}
        <div className="hidden lg:block absolute -bottom-20 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>
        <div className="hidden lg:block absolute -top-10 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-10 -z-10"></div>
      </div>
    </section>
  );
}
