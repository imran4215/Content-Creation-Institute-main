import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
import SuccessStory from "./components/SuccessStory";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import StudentReview from "./components/StudentReview";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Courses />
      <SuccessStory />
      <Services />
      <FAQ />
      <StudentReview />
      <AboutUs />
      <Footer />
    </>
  );
}
