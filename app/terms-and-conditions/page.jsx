import React from "react";
import {
  UserCircleIcon,
  CreditCardIcon,
  ArrowPathIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-10 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border">
        {/* Header */}
        <div className="border-b px-5 sm:px-6 md:px-8 py-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#154ae8]">
            আমাদের স্টুডেন্টদের জন্য সহজ নিয়মাবলী
          </h1>
        </div>

        {/* Content */}
        <div className="px-5 sm:px-6 md:px-8 py-6 sm:py-8 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-[15px]">
          {/* Intro */}
          <p className="max-w-prose">
            প্রিয় শিক্ষার্থী, আমাদের সাথে আপনার লার্নিং জার্নি আনন্দময় ও
            সুশৃঙ্খল রাখতে আমরা নিচের সাধারণ নিয়মগুলো অনুসরণ করি। ভর্তির আগে
            অনুগ্রহ করে একবার দেখে নিন।
          </p>

          <Section
            icon={<UserCircleIcon />}
            number="১"
            title="আপনার তথ্য ও প্রোফাইল"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>সঠিক তথ্য:</strong> ভর্তি ফর্মে আপনার নাম, ঠিকানা ও
                প্রয়োজনীয় তথ্য নির্ভুলভাবে প্রদান করুন। ভুল তথ্যের দায়ভার
                শিক্ষার্থীর।
              </li>
              <li>
                <strong>তথ্য পরিবর্তন:</strong> ডাটাবেসে তথ্য সংশোধনের জন্য
                ৫০০/- টাকা সার্ভিস চার্জ প্রযোজ্য।
              </li>
            </ul>
          </Section>

          <Section
            icon={<CreditCardIcon />}
            number="২"
            title="পেমেন্ট ও রিফান্ড সংক্রান্ত"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>ভর্তি ফি:</strong> কোর্সে জয়েন করার পর প্রিমিয়াম রিসোর্স
                ও রেকর্ডের এক্সেস দেওয়া হয়। তাই কোর্স ফি কোনো অবস্থাতেই
                ফেরতযোগ্য নয় (Non-refundable)।
              </li>
              <li>
                <strong>বকেয়া পেমেন্ট:</strong> ১ মাসের মধ্যে পরিশোধ না করলে
                আইডি সাময়িকভাবে বন্ধ হতে পারে। পুনরায় চালু করতে ১,০০০/- টাকা
                চার্জ প্রযোজ্য।
              </li>
            </ul>
          </Section>

          <Section
            icon={<ArrowPathIcon />}
            number="৩"
            title="কোর্স ও ব্যাচ পরিবর্তনের সুযোগ"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>কোর্স পরিবর্তন:</strong> একবার ভর্তি হলে অন্য কোর্সে
                পরিবর্তনের সুযোগ নেই।
              </li>
              <li>
                <strong>ব্যাচ পরিবর্তন:</strong> প্রথম ১০টি ক্লাসের মধ্যে ৯৯০/-
                টাকা প্রসেসিং ফি দিয়ে পরিবর্তন করা যাবে।
              </li>
              <li>
                <strong>কোর্স রিপিট:</strong> মূল ফির ৫০% পরিশোধ করে নতুন ব্যাচে
                জয়েন করা যাবে।
              </li>
            </ul>
          </Section>

          <Section
            icon={<VideoCameraIcon />}
            number="৪"
            title="ক্লাসের ভিডিও ও রিসোর্স"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>ভিডিওর স্থায়িত্ব:</strong> কোর্স শেষে ৩ মাস পর্যন্ত
                সার্ভারে থাকবে।
              </li>
              <li>
                <strong>গোপনীয়তা:</strong> ভিডিও বা রিসোর্স শেয়ার করা সম্পূর্ণ
                নিষিদ্ধ। প্রমাণ পেলে আইডি বাতিল ও আইনানুগ ব্যবস্থা নেওয়া হবে।
              </li>
            </ul>
          </Section>

          <Section
            icon={<AcademicCapIcon />}
            number="৫"
            title="সার্টিফিকেট ও মূল্যায়ন"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>যোগ্যতা:</strong> হোমওয়ার্ক ও পরীক্ষায় অংশগ্রহণ
                বাধ্যতামূলক।
              </li>
              <li>
                <strong>ফাইনাল প্রজেক্ট:</strong> সময়মতো জমা না দিলে ৫০০/- টাকা
                লেট ফি প্রযোজ্য।
              </li>
            </ul>
          </Section>

          <Section icon={<ClockIcon />} number="৬" title="সময় ও শিডিউল">
            <p>
              শিক্ষার মান ও বিশেষ পরিস্থিতি বিবেচনায় ক্লাসের সময় বা শুরুর তারিখ
              পরিবর্তনের অধিকার প্রতিষ্ঠান সংরক্ষণ করে।
            </p>
          </Section>

          {/* Footer */}
          <div className="pt-6 border-t text-xs sm:text-sm text-gray-600">
            আমাদের লক্ষ্য আপনার দক্ষতা বৃদ্ধি করা।
            <br />
            <span className="font-medium text-[#154ae8]">
              — কন্টেন্ট ক্রিয়েশন ইনস্টিটিউট
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Section Component */
function Section({ icon, number, title, children }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-[#154ae8]/10 text-[#154ae8]">
          {React.cloneElement(icon, { className: "w-4 sm:w-5 h-4 sm:h-5" })}
        </div>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">
          <span className="font-sans">{number}. </span>
          <span>{title}</span>
        </h2>
      </div>

      <div className="pl-0 sm:pl-10 md:pl-12">{children}</div>
    </div>
  );
}
