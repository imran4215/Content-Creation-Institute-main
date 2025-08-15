import {
  FaStar,
  FaUserGraduate,
  FaClock,
  FaBookOpen,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaVideo,
  FaProjectDiagram,
  FaLifeRing,
  FaBriefcase,
  FaUserTie,
  FaInfinity,
  FaStarHalfAlt,
} from "react-icons/fa";

export default function CourseIntro() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Title Section */}
      <div className="bg-gradient-to-r md:pt-9 from-blue-600 to-purple-600 md:p-6 text-white mb-5 rounded-lg p-3">
        <h1 className="text-xl md:text-4xl font-bold">
          MERN Stack Web Development
        </h1>
      </div>

      {/* Batch and Ratings */}
      <div className="flex items-center justify-between px-4 pb-5 md:py-2">
        {/* Batch */}
        <p className="text-sm font-medium text-white bg-green-500 px-3 py-1 rounded-r-full shadow-sm inline-flex items-center">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
          </span>
          Batch-5
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-yellow-400">
            {/* 4 full stars */}
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            {/* Half star */}
            <FaStarHalfAlt />
          </div>
          <span className="font-medium text-gray-800">4.7</span>
          <span className="text-gray-500">(43 reviews)</span>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        <StatItem
          icon={<FaUserGraduate className="text-blue-500" />}
          value="434"
          label="students joined"
        />
        <StatItem
          icon={<FaClock className="text-green-500" />}
          value="60+"
          label="hours of lessons"
        />
        <StatItem
          icon={<FaBookOpen className="text-purple-500" />}
          value="276"
          label="total lessons"
        />
        <StatItem
          icon={<FaCheckCircle className="text-orange-500" />}
          value="3592"
          label="learners completed"
        />
      </div>

      {/* Features */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          <span>এই কোর্সে যা যা পাচ্ছেন</span>
        </h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          <ul>
            {courseFeatures.slice(0, 4).map((feature, idx) => (
              <FeatureItem key={idx} {...feature} />
            ))}
          </ul>
          <ul>
            {courseFeatures.slice(4).map((feature, idx) => (
              <FeatureItem key={idx + 4} {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Component
const StatItem = ({ icon, value, label }) => (
  <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
    {icon}
    <div>
      <p className="font-bold text-gray-800">
        {value} {label}
      </p>
      <p className="text-sm text-gray-600"></p>
    </div>
  </div>
);

// Course Features Data
const courseFeatures = [
  {
    icon: <FaChalkboardTeacher className="text-blue-500" />,
    text: "৭০+ লাইভ ক্লাস",
  },
  {
    icon: <FaVideo className="text-purple-500" />,
    text: "২৪+ কনসেপচুয়াল ক্লাস",
  },
  {
    icon: <FaVideo className="text-purple-500" />,
    text: "৩০০+ প্রিরেকর্ডেড ভিডিও",
  },
  {
    icon: <FaProjectDiagram className="text-green-500" />,
    text: "১৫টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্টস",
  },
  {
    icon: <FaLifeRing className="text-red-500" />,
    text: "ডেইলি ৮টি সাপোর্ট সেশন",
  },
  {
    icon: <FaBriefcase className="text-yellow-500" />,
    text: "জব প্রিপারেশন সেশন",
  },
  {
    icon: <FaUserTie className="text-indigo-500" />,
    text: "130+ কোম্পানিতে জব প্লেসমেন্ট সাপোর্ট",
  },
  { icon: <FaInfinity className="text-pink-500" />, text: "লাইফটাইম অ্যাকসেস" },
];

// Reusable Feature Item Component
const FeatureItem = ({ icon, text }) => (
  <li className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
    <span className="mt-1 flex-shrink-0">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </li>
);
