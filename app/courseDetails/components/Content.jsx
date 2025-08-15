"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus, FaLock, FaCirclePlay } from "react-icons/fa6";

const liveClasses = [
  {
    module: "Module 1: Grooming Session",
    classes: ["Class - 01: Introduction to the Web & HTML"],
  },
  {
    module: "Module 2: HTML Foundations",
    classes: [
      "Class - 02: Working with Text & Content",
      "Class - 03: Tables & Forms in HTML",
      "Class - 04: Semantic HTML",
    ],
  },
];

const recordedClasses = [
  {
    module: "Module 1: Git & Github",
    classes: [
      "01. What is Git and GitHub",
      "02. Setting Up Environment",
      "03. Git Initiate",
      "04. Git Staging Area",
      "05. Creating Commit",
      "06. Git History",
      "07. Git Branch",
      "08. Merge and Merge Conflict",
      "09. Pushing Codes to GitHub",
      "10. Fetch and Pull",
      "11. Git Clone",
      "12. GitHub Fork",
      "13. GitHub Pages - Host any Static Website",
      "14. What Next_",
    ],
  },
  {
    module: "Module 2: HTML",
    classes: [
      "Class - 01: Introduction to HTML",
      "Class - 02: Working with Text & Content",
      "Class - 03: Tables & Forms in HTML",
      "Class - 04: Semantic HTML",
    ],
  },
];

export default function Content() {
  const [activeTab, setActiveTab] = useState("live");
  const [expandedModules, setExpandedModules] = useState({});

  const toggleModule = (module) => {
    setExpandedModules((prev) => ({
      ...prev,
      [module]: !prev[module],
    }));
  };

  const data = activeTab === "live" ? liveClasses : recordedClasses;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Sticky Tabs */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab("live")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors cursor-pointer ${
              activeTab === "live"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            Live Classes
          </button>
          <button
            onClick={() => setActiveTab("recorded")}
            className={`flex-1 py-3 px-4 text-center font-medium transition-colors cursor-pointer ${
              activeTab === "recorded"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
            }`}
          >
            Recorded Classes
          </button>
        </div>
      </div>

      {/* Modules */}
      <div className="divide-y divide-gray-100">
        {data.map((moduleData, idx) => (
          <div key={idx} className="group">
            <div
              onClick={() => toggleModule(moduleData.module)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-[17px] text-gray-800 group-hover:text-blue-600">
                {moduleData.module}
              </span>
              <span className="text-gray-400 group-hover:text-gray-600">
                {expandedModules[moduleData.module] ? (
                  <FaMinus size={14} />
                ) : (
                  <FaPlus size={14} />
                )}
              </span>
            </div>

            {/* Classes */}
            {expandedModules[moduleData.module] && (
              <ul className="pb-2 pl-4 pr-4">
                {moduleData.classes.map((cls, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between py-2 px-2 rounded hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FaCirclePlay
                        className="text-gray-400 flex-shrink-0"
                        size={14}
                      />
                      <span className="text-gray-700 text-sm">{cls}</span>
                    </div>
                    <FaLock className="text-gray-300" size={14} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
