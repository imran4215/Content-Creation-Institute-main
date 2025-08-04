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

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-6 text-black text-4xl font-bold z-50 hover:text-gray-400 cursor-pointer"
            aria-label="Close video"
          >
            &times;
          </button>

          {/* Modal Box */}
          <div
            className="w-[90%] md:w-[80%] max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden scale-100 transition-transform duration-300 md:p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/TjueQTpN1gc?start=746&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
