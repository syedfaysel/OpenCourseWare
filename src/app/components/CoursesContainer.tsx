
import React from "react";
import Link from "next/link";


const CoursesContainer =  ({courses}: any) => {


  return (
    <>
      <div className="">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 my-3 place-items-center p-3">
          {courses?.map((course: any) => {
            return (
              <div key={course.courseCode} className=" bg-blue-100 h-32 p-3 w-full max-w-96 md:max-w-96 m-2 rounded place-items-center hover:shadow-lg hover:shadow-yellow-400">
                  <Link href={`/courses/${course.courseCode}`}>
                    <div className="flex flex-col items-center justify-center text-blue-700">
                      <p className="text-black font-bold">{course.courseCode}</p>
                      <p>{course.title}</p>
                    </div>
                  </Link>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CoursesContainer;
