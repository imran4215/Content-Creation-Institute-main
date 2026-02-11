import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaRegCopyright,
  FaFacebook,
  FaYoutube,
  FaBook,
  FaShieldAlt,
  FaVideo,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 mb-5">
      {/* Footer Main Section */}
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6 sm:p-8">
        {/* Logo and Description */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Content Creation Institute Logo"
              width={100}
              height={36}
              priority
            />
            <span className="md:font-bold font-medium text-[16px] tracking-wide whitespace-nowrap">
              কনটেন্ট ক্রিয়েশন ইনস্টিটিউট
            </span>
          </Link>
          <p className="mt-4 text-sm text-justify text-gray-600">
            বাংলাদেশে এই প্রথম Content Creation এর বিভিন্ন কোর্স তথা: Video
            Editing, Graphic Design, Motion Graphics, AI Content Creation, 3D
            Animation, Script Writing, Videography, Video Content Marketing,
            Social Media Management, Freelancing এর উপর সেরা মেন্টরের মাধ্যমে
            প্রশিক্ষণ দিচ্ছি আমরা
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-center bg-blue-500 text-white py-2 rounded mb-5">
            কুইক লিংক
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/courses"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <FaBook className="text-blue-500" />
                কোর্স সমূহ
              </Link>
            </li>
            <li>
              <Link
                href="/terms-&-conditions"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <FaShieldAlt className="text-blue-500" />
                প্রাইভেসি/নীতিমালা
              </Link>
            </li>
            <li>
              <Link
                href="/studio"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <FaVideo className="text-blue-500" />
                স্টুডিও
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-center bg-blue-500 text-white py-2 rounded mb-5">
            যোগাযোগের জন্য
          </h2>
          <div className="space-y-3 text-sm">
            {[
              { phone: "01861-247743" },
              { phone: "01750-249899" },
              { phone: "01537-502795" },
            ].map(({ phone }, i) => (
              <div
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                key={i}
              >
                <FaPhoneAlt className="text-blue-500" />
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="text-xl font-bold text-center bg-blue-500 text-white py-2 rounded mb-5">
            আমাদের লোকেশন
          </h2>
          <div className="space-y-2">
            <div className="flex items-start gap-2 hover:text-blue-600 transition-colors">
              <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
              <span>আবু সাঈদ সুপার মার্কেট (৩য় তলা),</span>
            </div>
            <div className="flex items-start gap-2 hover:text-blue-600 transition-colors">
              <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0 opacity-0" />{" "}
              {/* Invisible spacer */}
              <span>অফিস নং: ৩১৩, রামপুরা বাজার, ঢাকা-১২১৯</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-3 bg-blue-500 text-white text-center md:text-left">
        <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
          <FaRegCopyright />
          <span className="text-sm">
            Copyright {new Date().getFullYear()} - Content Creation Institute
          </span>
        </div>
        <div className="flex gap-6 items-center text-lg">
          <a
            href="https://www.facebook.com/ContentCreationInstitute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-300 transition-colors transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@ContentCreationInstitute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-300 transition-colors transform hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:solutionitcare71@gmail.com"
            aria-label="Email"
            className="hover:text-pink-300 transition-colors transform hover:scale-110"
          >
            <BiLogoGmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
