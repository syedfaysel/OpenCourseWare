
import { CourseCard } from "./CourseCard";


const CoursesContainer =  ({courses}: any) => {


  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 my-5 mx-5">
          {courses?.map((course: any) => {
            return (
              <div key={course.courseCode} className="">
                  <CourseCard courseCode={course.courseCode} title={course.title} imageUrl={course.imageUrl} courseType={course.courseType} courseCategory={course.courseCategory} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CoursesContainer;
