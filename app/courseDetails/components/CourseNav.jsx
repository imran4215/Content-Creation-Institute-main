"use client";
import { Link } from "react-scroll";

export default function CourseNav() {
  const sections = [
    { id: "about", label: "About" },
    { id: "forWhom", label: "For Whom" },
    { id: "instructors", label: "Instructors" },
    { id: "course-content", label: "Course Content" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-14 md:top-18 z-40 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex gap-3 md:gap-5 overflow-x-auto py-3 hide-scrollbar">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              to={sec.id}
              smooth={true}
              duration={500}
              offset={-140}
              spy={true}
              className="cursor-pointer px-4 py-2 rounded-md whitespace-nowrap text-sm md:text-base transition-all duration-200 border hover:bg-blue-600 hover:text-white"
            >
              {sec.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
