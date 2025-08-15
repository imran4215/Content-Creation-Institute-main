"use client";

import React from "react";
import Image from "next/image";
import {
  FaUsers,
  FaPlayCircle,
  FaStar,
  FaClipboardList,
  FaProjectDiagram,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamic imports for framer-motion
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.button),
  { ssr: false }
);

const courses = [
  {
    id: 1,
    batch: "Batch-5",
    title: "MERN Stack Web Development Career Path",
    image: "/Courses/Video_Editing.jpg",
    rating: 4.7,
    ratingCount: 43,
    type: "live",
    enrolled: 409,
    lessons: "276+",
    assignments: "12+",
    projects: "12+",
  },
  {
    id: 2,
    batch: "Batch-5",
    title: "DevOps Career Path",
    image: "/Courses/Video_Editing.jpg",
    rating: 4.9,
    ratingCount: 18,
    type: "recorded",
    enrolled: 514,
    lessons: "76+",
    assignments: "5+",
    projects: "5+",
  },
  {
    id: 3,
    batch: "Batch-12",
    title: "Web Development with Python, Django & React",
    image: "/Courses/Video_Editing.jpg",
    rating: 4.6,
    ratingCount: 18,
    type: "live",
    enrolled: 651,
    lessons: "600+",
    assignments: "5+",
    projects: "8+",
  },
];

export default function CoursePage() {
  return (
    <>
      <Head>
        <title>Our Courses | Content Creation Institute</title>
        <meta
          name="description"
          content="Browse our skill-based courses on web development, DevOps and more"
        />
      </Head>

      <div className="min-h-screen bg-white py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl font-bold text-blue-800 sm:text-4xl">
              আমাদের কোর্সসমূহ
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
              দক্ষতা অর্জনের জন্য আমাদের প্রফেশনাল কোর্সগুলো বেছে নিন
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <MotionDiv
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: course.id * 0.15 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 10px 20px rgba(59,130,246,0.2)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer flex flex-col border border-gray-200"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Batch Label */}
                  <div className="absolute top-3 left-3 bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {course.batch}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center space-x-1 bg-white bg-opacity-90 px-3 py-1 rounded-full text-yellow-400 font-semibold text-sm shadow">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(course.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="ml-1 text-gray-800">
                      {course.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({course.ratingCount})
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-gray-900 text-xl font-semibold mb-4 leading-tight">
                    {course.title}
                  </h2>

                  {/* Live Class Label */}
                  <div
                    className={`flex items-center space-x-2 mb-5 text-sm font-medium px-3 py-1 rounded-full w-fit ${
                      course.type === "live"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <FaPlayCircle />
                    <span>
                      {course.type === "live" ? "Live class" : "Recorded class"}
                    </span>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-y-3 text-gray-700 text-sm mb-8">
                    <div className="flex items-center space-x-2">
                      <FaUsers className="text-blue-500" />
                      <span>{course.enrolled} Joined</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaClipboardList className="text-blue-500" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GiNotebook size={18} className="text-blue-500" />
                      <span>{course.assignments} Assignments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaProjectDiagram className="text-blue-500" />
                      <span>{course.projects} Projects</span>
                    </div>
                  </div>

                  {/* View Details Button */}

                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                  >
                    <Link href="/courseDetails">View Details</Link>
                  </MotionButton>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
