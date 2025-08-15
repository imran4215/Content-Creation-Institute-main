import React from "react";

// Sample project data
const projects = [
  { name: "Portfolio Website", image: "/project1.jpg" },
  { name: "Sheba.xyz Bootstrap Landing Page", image: "/project2.jpg" },
  { name: "Interactive Shopping Cart", image: "/project3.jpg" },
  { name: "Countdown Website", image: "/project4.jpg" },
  {
    name: "JavaScript Interesting API's",
    image: "/project2.jpg",
  },
  {
    name: "Rick and Morty React JS Project",
    image: "/project1.jpg",
  },
];

export default function Projects() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-102 transition-transform duration-300 cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 md:h-64 object-cover"
            />

            {/* Project Name */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-semibold text-lg md:text-xl">
                {proj.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
