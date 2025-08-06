"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import Lottie from "lottie-react";
import PlayButton from "@/app/Animations/PlayButton.json";
import { SuccessStoryData } from "@/app/Data/SuccessStoryData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SuccessStory() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }, 300);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 relative md:py-5">
      <div className="md:max-w-8xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 relative inline-block">
            সফলতার গল্প
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-75 rounded-full"></span>
          </h2>
          <p className="text-md md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            আমাদের শিক্ষার্থীদের মেধা, পরিশ্রম এবং অধ্যবসয়ই তাদের সফলতার
            মূলমন্ত্র, শিক্ষার্থীদের এমন সমৃদ্ধিতে আমরা কনটেন্ট ক্রিয়েশন
            ইনস্টিটিউট গৌরবান্বিত।
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="absolute left-0 top-[65%] transform -translate-y-1/2 z-10 p-3 bg-white border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition hidden md:flex items-center justify-center"
        >
          <FaChevronLeft size={15} />
        </div>
        <div
          ref={nextRef}
          className="absolute right-0 top-[65%] transform -translate-y-1/2 z-10 p-3 bg-white border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition hidden md:flex items-center justify-center"
        >
          <FaChevronRight size={15} />
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="pb-12 px-8"
        >
          {SuccessStoryData.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full relative group">
                <div className="relative h-64 w-full">
                  <Image
                    src={story.img}
                    alt={`Success Story ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <Lottie
                      animationData={PlayButton}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-35 cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => openModal(story.yt)}
                    />
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-gray-800">
                    {story.name}
                  </h3>
                  <p className="text-gray-600">{story.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal */}
        {isOpen && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-xs transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          >
            {/* Modal Container */}
            <div
              className={`relative w-full max-w-5xl bg-white rounded-xl shadow-2xl mx-4 my-8 overflow-hidden transition-transform duration-300 ${
                isClosing ? "scale-95" : "scale-100"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-2 bg-blue-50 border-b border-gray-200">
                <h2 className="text-xl font-bold text-blue-800">সফলতার গল্প</h2>
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

              {/* Responsive Video Section */}
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  src={videoUrl}
                  title="সফলতার গল্প"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Footer Message */}
              <div className="bg-gray-50 p-4 text-sm text-center text-gray-600">
                আমাদের শিক্ষার্থীদের সাফল্য আমাদের গর্ব
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
