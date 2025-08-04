import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaPhoneVolume, FaYoutube } from "react-icons/fa6";

export default function HeaderTop() {
  return (
    <div className="bg-blue-500 px-2 py-3 md:p-3 flex flex-wrap justify-between items-center text-white text-sm sm:text-base">
      {/* Left side - Contact Info */}
      <div className="flex items-center gap-3 md:gap-6 ml-3">
        {/* Phone Numbers - always visible */}
        <div className="flex items-center gap-2 font-semibold">
          <FaPhoneVolume className="text-white" />
          <div className="flex items-center gap-1">
            <a
              href="tel:01933180944"
              className="hover:text-blue-200 transition-colors duration-300 whitespace-nowrap"
            >
              0193-3180944
            </a>
            <span>,</span>
            <a
              href="tel:01861247743"
              className="hover:text-blue-200 transition-colors duration-300 whitespace-nowrap"
            >
              01861-247743
            </a>
          </div>
        </div>

        {/* Email - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <BiLogoGmail className="min-w-[16px]" />
          <a
            href="mailto:contentcreationinstitutebd@gmail.com"
            className="hover:text-blue-200 transition-colors duration-300 break-all"
          >
            contentcreationinstitutebd@gmail.com
          </a>
        </div>
      </div>

      {/* Right side - Social Links */}
      <div className="flex gap-3 mr-5 md:gap-6 items-center text-base md:text-xl">
        <a
          href="https://www.facebook.com/ContentCreationInstitute"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/@ContentCreationInstitute"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="mailto:contentcreationinstitutebd@gmail.com"
          className="hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
          aria-label="Email"
        >
          <BiLogoGmail />
        </a>
      </div>
    </div>
  );
}
