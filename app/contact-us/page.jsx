"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+88 01861247743", "+88 01750249899"],
      description: "Call us directly for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contentcreationinstitutebd@gmail.com"],
      description: "Send us an email anytime",
    },
    {
      icon: MapPin,
      title: "Office",
      details: [
        "আবু সাঈদ সুপার মার্কেট (৩য় তলা) অফিস নং: ৩১৩,",
        "রামপুরা বাজার, ঢাকা-১২১৯",
      ],
      description: "Visit our office during business hours",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sat - Thur: 9AM - 8PM", "Fri: 4pm - 8PM"],
      description: "We're here when you need us",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      color: "hover:bg-blue-600 hover:shadow-blue-200",
      url: "https://www.facebook.com/ContentCreationInstitute",
    },
    {
      icon: Instagram,
      name: "Instagram",
      color: "hover:bg-pink-500 hover:shadow-pink-200",
      url: "#",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      color: "hover:bg-blue-700 hover:shadow-blue-200",
      url: "#",
    },
    {
      icon: Youtube,
      name: "Youtube",
      color: "hover:bg-blue-400 hover:shadow-blue-200",
      url: "https://www.youtube.com/@ContentCreationInstitute",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
            যোগাযোগ করুন
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            আপনার ব্র্যান্ডের জন্য আমরা দিচ্ছি পরিপূর্ণ ও প্রিমিয়াম ক্রিয়েটিভ
            সলিউশন। উচ্চমানের সেবা ও কাস্টমাইজড অভিজ্ঞতার জন্য নিচের যেকোনো
            মাধ্যমে আমাদের সঙ্গে যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-200">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p
                            key={i}
                            className="text-gray-600 text-sm font-medium"
                          >
                            {detail}
                          </p>
                        ))}
                        <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map Section - Center */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 hover:border-blue-200">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  আমাদের অবস্থান
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  নিচের ম্যাপের মাধ্যমে সহজেই আমাদের খুঁজে নিন।
                </p>
              </div>
              <div className="h-96 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.42023628823!2d90.40889664952135!3d23.76145911592785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9633e8ab4cf%3A0xca78f15709c2db1!2sContent%20Creation%20Institute%20(CCI)!5e0!3m2!1sen!2sbd!4v1766301138565!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                  className="hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  📍 উপরের ম্যাপটি অনুসরণ করে আমাদের অফিসে আসুন। সুন্দর ও
                  নির্বিঘ্ন অভিজ্ঞতার জন্য আগেই কল করে অ্যাপয়েন্টমেন্ট নিশ্চিত
                  করুন।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us and Quick Response - Same Row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Media */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              আমাদের সঙ্গে যুক্ত থাকুন
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              আমাদের সর্বশেষ আপডেট ও চলমান প্রজেক্ট সম্পর্কে সংযুক্ত থাকুন।
            </p>
            <div className="flex gap-3 justify-center">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg transition-all duration-300 hover:text-white hover:shadow-lg hover:scale-110 hover:-translate-y-1 ${social.color} group relative overflow-hidden`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Response */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-lg mr-4 backdrop-blur-sm hover:bg-white/30 transition-all duration-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">তাৎক্ষণিক সহায়তা</h3>
                  <p className="text-blue-100">তাৎক্ষণিক সহায়তা প্রয়োজন?</p>
                </div>
              </div>
              <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                জরুরি প্রয়োজনের জন্য সরাসরি আমাদের কল করুন অথবা দ্রুততম সহায়তার
                জন্য হোয়াটসঅ্যাপে মেসেজ পাঠান।
              </p>
              <button className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                হোয়াটসঅ্যাপে মেসেজ করুন
              </button>
            </div>

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
