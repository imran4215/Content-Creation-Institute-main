import CourseDetailsLeft from "./components/CourseDetailsLeft";
import CourseIntro from "./components/CourseIntro";
import CourseNav from "./components/CourseNav";
import CourseSidebar from "./components/CourseSidebar";
import MobileEnroll from "./components/MobileEnroll";

export default function Page() {
  return (
    <div className="md:max-w-7xl mx-auto md:px-4 md:py-8 py-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Intro, Nav, Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Intro Section */}
          <CourseIntro />

          {/* Navigation */}
          <CourseNav />

          {/* Course Details */}
          <CourseDetailsLeft />
        </div>

        {/* Right Side: Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <CourseSidebar />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <MobileEnroll />
          </div>
        </div>
      </div>
    </div>
  );
}
