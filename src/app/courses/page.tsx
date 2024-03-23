import React from "react";
import Link from "next/link";
import axios from "axios";

const page = async () => {
  const res = await axios.get(
    "https://syedfaysel.github.io/json-api/ocw/courses.json"
  );
  const courses = res.data;
  // console.log(courses)
  return (
    <>
      <h1 className="text-center text-2xl font-bold text-green-300 mb-4">
        All courses
      </h1>
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

export default page;
