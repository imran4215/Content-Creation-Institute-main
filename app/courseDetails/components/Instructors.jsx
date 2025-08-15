import React from "react";

// Sample instructor data
const instructors = [
  {
    name: "Hasin Hayder",
    role: "Lead Instructor",
    bio: "Founder, Learn With Hasin Hayder",
    image: "/imran.jpg",
  },
  {
    name: "Sumit Saha",
    role: "Lead Instructor",
    bio: "Founder, Learn with Sumit",
    image: "/imran.jpg",
  },
  {
    name: "Rabbil Hasan",
    role: "Lead Instructor",
    bio: "CTO, Zatiq",
    image: "/imran.jpg",
  },
  {
    name: "Saidur Rahman Setu",
    role: "Lead Instructor",
    bio: "Founder, JS Bangladesh",
    image: "/imran.jpg",
  },
  {
    name: "Asief Mahir",
    role: "Lead Instructor",
    bio: "Software Developer, JS Bangladesh",
    image: "/imran.jpg",
  },
  {
    name: "Eftykhar Rahman",
    role: "Support Instructor",
    bio: "Support Instructor, Interactive Cares",
    image: "/imran.jpg",
  },
];

export default function Instructors() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {instructors.map((inst, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-center bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            {/* Left: Instructor Image */}
            <img
              src={inst.image}
              alt={inst.name}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-blue-500"
            />

            {/* Right: Name, Role, Bio */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {inst.name}
              </h3>
              <p className="text-sm text-green-600 font-medium">{inst.role}</p>
              <p className="text-gray-600 mt-1 text-sm">{inst.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
