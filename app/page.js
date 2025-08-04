import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Courses />
    </>
  );
}
