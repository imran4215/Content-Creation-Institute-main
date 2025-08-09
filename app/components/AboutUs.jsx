import React from "react";

export default function AboutUs() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50 relative py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-7">
          <h2 className="text-xl md:text-3xl font-bold text-blue-800 relative inline-block">
            প্রতিষ্ঠান সম্পর্কে
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-blue-500 transform translate-y-2 scale-x-100 rounded-full"></span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Section */}
          <div className="flex-1 text-gray-800">
            <p className="text-lg text-justify">
              Content Creation Institute একটি আধুনিক প্রশিক্ষণ ও কনটেন্ট সার্ভিস
              প্রতিষ্ঠান, যেখানে আমরা তরুণদের আধুনিক প্রযুক্তি ও সৃজনশীল দক্ষতায়
              গড়ে তুলছি। আমাদের কোর্সে থাকে হাতে-কলমে প্র্যাকটিস, রিয়েল
              প্রজেক্টে কাজের সুযোগ এবং প্রফেশনাল গাইডলাইন—যার ফলে ইতোমধ্যেই
              ১০০+ শিক্ষার্থী বিভিন্ন প্রতিষ্ঠানে জব পেয়েছে। পাশাপাশি, আমরা
              দেশি-বিদেশি ব্যবসার জন্য প্রিমিয়াম মানের ভিডিও, ডিজাইন ও কনটেন্ট
              তৈরি করে থাকি। আমাদের শক্তিশালী সাপোর্ট সিস্টেম ও বাস্তবভিত্তিক
              প্রশিক্ষণই আমাদের বিশেষত্ব। আমরা বিশ্বাস করি, দক্ষতাই ভবিষ্যতের
              মূল চালিকাশক্তি।
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full md:w-2/5 rounded-md shadow-lg overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/4WcE5oJKCdQ?si=wbybreMa8xwgnezV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
