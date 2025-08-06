"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PlayButton from "@/app/Animations/PlayButton.json";
import AboutUs from "@/public/AboutUs.jpg";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 min-h-[470px] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white">
      {/* Left Side */}
      <div className="flex flex-col justify-center px-4 md:px-14 pt-12 pb-5 md:py-20 md:space-y-4 space-y-2">
        <h1 className="text-lg md:text-2xl font-medium">
          আর্নিং নির্ভর স্কিল শিখুন
        </h1>
        <h2 className="text-[22px] md:text-4xl font-extrabold leading-tight">
          কনটেন্ট ক্রিয়েশন ইনস্টিটিউটে
        </h2>
        <Link href="/courses">
          <button className="p-2 md:p-3 mt-1 bg-white text-blue-500 font-bold rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer">
            এখনই এনরোল করুন
          </button>
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center px-6 py-6 md:py-0">
        <div className="relative -full md:w-4/5 h-64 md:h-80 aspect-video shadow-2xl rounded-xl overflow-hidden">
          <Image
            src={AboutUs}
            alt="About Us"
            fill
            className="object-cover z-10"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <Lottie
              animationData={PlayButton}
              className="h-[100px] md:h-[150px] cursor-pointer"
              onClick={openModal}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs px-4 py-6"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-2 bg-blue-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-blue-800">
                আমাদের সম্পর্কে
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-200 transition duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 hover:text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Video Content */}
            <div className="relative pt-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TjueQTpN1gc?start=746&autoplay=1"
                title="About Us Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Optional Footer */}
            <div className="bg-gray-50 p-4 text-sm text-center text-gray-600">
              আমাদের সম্পর্কে জানুন, আমরা কীভাবে কাজ করি এবং শিক্ষার্থীদের
              সফলতায় ভূমিকা রাখি।
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
