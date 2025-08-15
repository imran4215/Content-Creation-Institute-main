import AboutCourse from "./AboutCourse";
import Content from "./Content";
import ForWhom from "./ForWhom";
import Instructors from "./Instructors";
import Projects from "./Projects";

export default function CourseDetailsLeft() {
  return (
    <div className="space-y-10">
      {/* About */}
      <section id="about">
        <h2 className="text-2xl font-bold mb-2 px-3">
          MERN Stack Web Development Career Path (Batch-5)
        </h2>
        <AboutCourse />
      </section>

      {/* For Whom */}
      <section id="forWhom">
        <h2 className="text-2xl font-bold mb-1 px-3">For Whom</h2>
        <ForWhom />
      </section>

      {/* Instructor */}
      <section id="instructors">
        <h2 className="text-2xl font-bold mb-2 px-3">Instructors</h2>
        <Instructors />
      </section>

      {/* Content */}
      <section id="course-content">
        <h2 className="text-2xl font-bold mb-4 px-3">Course Content</h2>
        <Content />
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12">
        <h2 className="text-2xl font-bold mb-4 px-3">Projects</h2>
        <Projects />
      </section>
    </div>
  );
}
