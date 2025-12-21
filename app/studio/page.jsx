"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Scissors,
  PenTool,
  Boxes,
  Sparkles,
  Video,
  Megaphone,
  Brush,
  Camera,
  Wand2,
  Star,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "video", label: "Video Editing" },
  { key: "design", label: "Graphic Design" },
  { key: "motion", label: "3D & Motion" },
  { key: "ai", label: "AI Video Ad" },
  { key: "brand", label: "Branding & Web" },
];

const SERVICES = [
  {
    id: "video-editing",
    title: "ভিডিও এডিটিং",
    category: "video",
    icon: Scissors,
    starting: 49,
    delivery: "24–72 ঘণ্টা",
    rating: 4.9,
    description:
      "কালার গ্রেডিং, সাউন্ড ডিজাইন এবং প্ল্যাটফর্ম অপটিমাইজেশন সহ প্রফেশনাল ভিডিও এডিটিং।",
    features: [
      "কালার গ্রেডিং",
      "সাউন্ড ডিজাইন",
      "সাবটাইটেল",
      "সোশ্যাল মিডিয়া কাট",
    ],
    banner: "সবচেয়ে জনপ্রিয়",
    bannerColor: "bg-blue-500",
  },
  {
    id: "ai-video-ad",
    title: "এআই ভিডিও বিজ্ঞাপন",
    category: "ai",
    icon: Sparkles,
    starting: 79,
    delivery: "48–96 ঘণ্টা",
    rating: 4.8,
    description:
      "এআই চালিত ভিডিও বিজ্ঞাপন, যার মধ্যে অবতার, ভয়েসওভার এবং আকর্ষণীয় হুক অন্তর্ভুক্ত।",
    features: [
      "এআই অবতার",
      "স্ক্রিপ্ট লেখা",
      "মাল্টি-ভারিয়েন্ট",
      "A/B টেস্টিং",
    ],
    banner: "ট্রেন্ডিং",
    bannerColor: "bg-purple-500",
  },
  {
    id: "graphic-design",
    title: "গ্রাফিক ডিজাইন",
    category: "design",
    icon: PenTool,
    starting: 39,
    delivery: "24–48 ঘণ্টা",
    rating: 4.9,
    description:
      "ক্রিয়েটিভ গ্রাফিক সমাধান, যেমন লোগো, ব্র্যান্ডিং এবং মার্কেটিং ম্যাটেরিয়াল।",
    features: [
      "ব্র্যান্ড গাইডলাইন",
      "সোর্স ফাইল",
      "মাল্টিপল ফরম্যাট",
      "অনলিমিটেড রিভিশন",
    ],
    banner: "সেরা মান",
    bannerColor: "bg-green-500",
  },
  {
    id: "3d-motion",
    title: "3D মোশন গ্রাফিকস",
    category: "motion",
    icon: Boxes,
    starting: 149,
    delivery: "3–7 দিন",
    rating: 4.7,
    description:
      "প্রিমিয়াম ভিজুয়াল স্টোরিটেলিং-এর জন্য চমকপ্রদ 3D অ্যানিমেশন ও মোশন গ্রাফিকস।",
    features: ["3D অ্যানিমেশন", "মোশন ডিজাইন", "4K রেন্ডারিং", "প্রজেক্ট ফাইল"],
    banner: "প্রিমিয়াম",
    bannerColor: "bg-amber-500",
  },
  {
    id: "promo-edit",
    title: "প্রোমো ভিডিও",
    category: "video",
    icon: Megaphone,
    starting: 69,
    delivery: "48–72 ঘণ্টা",
    rating: 4.8,
    description:
      "ডায়নামিক পেসিং এবং ইফেক্ট সহ হাই-কনভার্টিং প্রোমোশনাল ভিডিও।",
    features: [
      "ডায়নামিক ইফেক্ট",
      "কল-টু-অ্যাকশন",
      "প্ল্যাটফর্ম অপটিমাইজেশন",
      "মিউজিক ও SFX",
    ],
  },
  {
    id: "thumbnail-design",
    title: "ইউটিউব থাম্বনেইল",
    category: "design",
    icon: Camera,
    starting: 15,
    delivery: "6–24 ঘণ্টা",
    rating: 4.9,
    description: "ক্লিক-থ্রু রেট বাড়ানোর জন্য আকর্ষণীয় থাম্বনেইল ডিজাইন।",
    features: [
      "A/B টেস্টিং",
      "উচ্চ CTR ডিজাইন",
      "মাল্টিপল কনসেপ্ট",
      "দ্রুত ডেলিভারি",
    ],
    banner: "দ্রুত ডেলিভারি",
    bannerColor: "bg-red-500",
  },
  {
    id: "brand-kit",
    title: "ব্র্যান্ড আইডেন্টিটি",
    category: "brand",
    icon: Brush,
    starting: 199,
    delivery: "5–10 দিন",
    rating: 4.8,
    description:
      "লোগো, গাইডলাইন এবং অ্যাসেটসহ সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি প্যাকেজ।",
    features: [
      "লোগো ডিজাইন",
      "ব্র্যান্ড গাইডলাইন",
      "অ্যাসেট লাইব্রেরি",
      "স্টাইল গাইড",
    ],
    banner: "সম্পূর্ণ প্যাকেজ",
    bannerColor: "bg-indigo-500",
  },
  {
    id: "ai-enhance",
    title: "এআই উন্নতি",
    category: "ai",
    icon: Wand2,
    starting: 29,
    delivery: "24–48 ঘণ্টা",
    rating: 4.7,
    description: "উন্নতমানের আউটপুটের জন্য এআই চালিত ইমেজ ও ভিডিও উন্নতি।",
    features: [
      "4K আপস্কেলিং",
      "নয়েজ রিডাকশন",
      "ব্যাকগ্রাউন্ড রিমুভাল",
      "কোয়ালিটি উন্নতি",
    ],
    banner: "নতুন",
    bannerColor: "bg-cyan-500",
  },
];

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-blue-600 text-white shadow-lg"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

function ServiceCard({ svc }) {
  const Icon = svc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      {/* Banner */}
      {svc.banner && (
        <div
          className={`absolute top-0 right-0 ${svc.bannerColor} text-white px-3 py-1 text-xs font-semibold rounded-bl-lg z-10`}
        >
          {svc.banner}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {svc.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{svc.rating}</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span>{svc.delivery}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {svc.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {svc.features.slice(0, 4).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Starting from</div>
            <div className="text-2xl font-bold text-gray-900">
              ${svc.starting}
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group-hover:translate-x-1">
            Get Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/20 group-hover:to-blue-100/20 transition-all duration-300 pointer-events-none rounded-2xl"></div>
    </motion.div>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    return SERVICES.filter(
      (s) =>
        (cat === "all" || s.category === cat) &&
        (s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()))
    );
  }, [cat, query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              আমাদের <span className="text-blue-600">স্টুডিও সার্ভিসেস</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              সর্বাধুনিক প্রযুক্তি ও অভিজ্ঞ পেশাদার টিমের মাধ্যমে আমরা প্রদান
              করি উচ্চমানের ক্রিয়েটিভ সার্ভিসেস, যা আপনার ব্যবসায়িক ভিশনকে
              বাস্তবায়নে সহায়তা করবে।
            </p>
          </motion.div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {CATEGORIES.map((category) => (
              <CategoryPill
                key={category.key}
                label={category.label}
                active={cat === category.key}
                onClick={() => setCat(category.key)}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filtered.map((service) => (
            <ServiceCard key={service.id} svc={service} />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">
              No services found. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">কাস্টম সলিউশন দরকার?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            আপনার প্রয়োজন অনুযায়ী সঠিক সেবা খুঁজে পাচ্ছেন না? চলুন আপনার
            প্রজেক্ট নিয়ে আলোচনা করি এবং আপনার চাহিদা অনুযায়ী একটি কাস্টম
            প্যাকেজ তৈরি করি।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              কনসালটেশন শিডিউল করুন
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              পোর্টফোলিও দেখুন
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
