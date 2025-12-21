"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "হোম" },
    { path: "/courses", name: "কোর্সসমূহ" },
    { path: "/studio", name: "স্টুডিও" },
    { path: "/gallery", name: "গ্যালারি" },
    { path: "/blog", name: "ব্লগ" },
    { path: "/contact-us", name: "যোগাযোগ" },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
  };

  // Prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 ${
        scrolled
          ? "shadow-lg bg-white/95 backdrop-blur-sm"
          : "shadow-md bg-white"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center md:ml-7">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                src={logo}
                alt="Logo"
                placeholder="blur"
                className="h-8 md:h-10 w-full object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex gap-4 lg:gap-6 text-md lg:text-lg font-semibold">
              {navLinks.map((link) => (
                <li key={link.path} className="relative group">
                  <Link
                    href={link.path}
                    className="px-2 py-1 text-gray-700 group-hover:text-blue-700 transition-all duration-300 ease-in-out transform group-hover:scale-105"
                  >
                    {link.name}
                  </Link>

                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 origin-left bg-blue-700 transition-transform duration-300 ease-in-out"
                  />
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              href="/login"
              className="text-blue-600 bg-white border-2 border-blue-600 px-4 py-2 rounded-full shadow-md font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-lg"
              prefetch={false}
            >
              লগিন/সাইনআপ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="absolute top-full left-0 w-full bg-white z-40 shadow-md px-4 pb-4"
            >
              <ul className="flex flex-col  text-lg font-semibold mt-5">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.path}
                      className="block px-4 py-2 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                      prefetch={false}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-3 mt-4 px-4">
                <Link
                  href="/login"
                  className="flex-1 text-center text-blue-600 bg-white border-2 border-blue-600 px-4 py-2 rounded-full shadow-md font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                >
                  লগিন/সাইনআপ
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
