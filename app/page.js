import React from "react";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
import SuccessStory from "./components/SuccessStory";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import StudentReview from "./components/StudentReview";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <SuccessStory />
      <Services />
      <FAQ />
      <StudentReview />
      <AboutUs />
    </>
  );
}
