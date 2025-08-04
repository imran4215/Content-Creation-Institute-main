import React from "react";
import Marquee from "react-fast-marquee";

export default function HeaderMiddle() {
  return (
    <div className="py-3 bg-gray-300">
      <Marquee gradient={false} speed={40}>
        <span className="mx-24">
          কন্টেন্ট ক্রিয়েশনের উপর বাংলাদেশে পূর্ণাঙ্গ প্রতিষ্ঠান "কন্টেন্ট
          ক্রিয়েশন ইনস্টিটিউট"। আমরা ভিডিও এডিটিং, স্ক্রিপ্ট রাইটিং,
          ভিডিওগ্রাফি, প্রেজেন্টেশন, কন্টেন্ট মার্কেটিং ইত্যাদি শিখিয়ে থাকি।
          আমাদের সাথে যুক্ত হয়ে কন্টেন্ট ক্রিয়েটর হওয়ার অগ্রযাত্রায় নিজেকে শামিল
          করুন।
        </span>
      </Marquee>
    </div>
  );
}
