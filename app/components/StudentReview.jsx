"use client";

import React from "react";
import { StudentReviewData } from "../Data/StudentReviewData";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function StudentReview() {
  return (
    <section className="bg-white px-6 py-6 lg:px-8">
      <div className="md:max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 relative inline-block">
            স্টুডেন্ট রিভিউ
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-75 rounded-full"></span>
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="px-2 md:px-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-12"
          >
            {StudentReviewData.map((student, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-[450px] md:h-[500px] flex flex-col justify-between text-center px-3 py-12 border-4 border-blue-100">
                  {/* Top Content (Image + Review) */}
                  <div>
                    {/* Student Image */}
                    <div className="flex justify-center mb-6">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-base mb-6 px-2">
                      "{student.review}"
                    </p>
                  </div>

                  {/* Bottom Content (Name + Description + Rating) */}
                  <div>
                    <h3 className="text-lg font-bold text-blue-800 mb-1">
                      {student.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {student.studentDescription}
                    </p>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < student.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
