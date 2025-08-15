import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const targetAudience = [
  "সেলফ লার্নার",
  "CSE/IT স্টুডেন্ট",
  "ফ্রেশ গ্র্যাজুয়েট",
  "ক্যারিয়ার সুইচার",
  "ফ্রিল্যান্সার",
  "জুনিয়র রিয়্যাক্ট বা জাভাক্রিপ্ট ডেভেলপার",
];

export default function ForWhom() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid md:grid-cols-2 ">
        {targetAudience.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <FaCheckCircle className="text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
