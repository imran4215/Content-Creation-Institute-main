"use client";

import React, { useRef } from "react";
import { CourseDetailsData } from "@/app/Data/CourseDetailsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Courses() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 relative">
      <div className="md:max-w-8xl  mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 relative inline-block">
            এক নজরে আমাদের কোর্সসমূহ
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-75"></span>
          </h2>
        </div>

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="absolute left-0 top-[60%] transform -translate-y-1/2 z-10 p-3 bg-white border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition"
        >
          <FaChevronLeft className="block md:hidden" size={8} />
          <FaChevronLeft className="hidden md:block" size={15} />
        </div>
        <div
          ref={nextRef}
          className="absolute right-0 top-[60%] transform -translate-y-1/2 z-10 p-3 bg-white border-2 border-blue-600 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer transition"
        >
          <FaChevronRight className="block md:hidden" size={8} />
          <FaChevronRight className="hidden md:block" size={15} />
        </div>

        {/* Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            // Assign refs to Swiper navigation
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="pb-12"
        >
          {CourseDetailsData.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={course.img}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-5">
                    {course.title}
                  </h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-600">
                        {course.price}
                      </span>
                      <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer">
                        বিস্তারিত দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
