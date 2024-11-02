
import { CourseCard } from "./CourseCard";


const CoursesContainer =  ({courses}: any) => {


  return (
    <>
    <div className="max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5 my-10 mx-5">
          {courses?.map((course: any) => {
            return (
              <div key={course.courseCode} className="">
                  <CourseCard courseCode={course.courseCode} title={course.title} courseCategory={course.courseCategory} />
              </div>
            );
          })}
      </div>
    </div>
    </>
  );
};

export default CoursesContainer;
