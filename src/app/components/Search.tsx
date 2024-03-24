"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import CoursesContainer from "@/app/components/CoursesContainer";

type Props = {
  courses: [];
};

export default function Search({ courses }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const search = searchParams.get("search")?.toString() || "";
  const currentPage = Number(searchParams.get("page")?.toString()) || 1;

  const handleSearch = useDebouncedCallback((term: any) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term.toLowerCase());
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  let filteredCourses;
  if (search) {
    filteredCourses = courses.filter(
      (course: any) =>
        course.title.toLowerCase().includes(search) ||
        course.courseCode.toLowerCase().includes(search)
    );
  } else {
    filteredCourses = courses;
  }

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Search by course code or title"
          className=" w-96 rounded-md border border-gray-400 py-[9px] px-3  text-gray-900 outline-2 placeholder:text-gray-500 value:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
        {search && (
          <h1 className="text-xl my-2">
            Showing results for{" "}
            <span className="text-yellow-400">"{search.toUpperCase()}"</span>
          </h1>
        )}
      </div>

      <CoursesContainer courses={filteredCourses} />

      {/* <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 my-3 place-items-center p-3">
        {filteredCourses.map((course: any) => {
          return (
            <div
              key={course.courseCode}
              className=" bg-blue-100 h-32 p-3 w-full max-w-96 md:max-w-96 m-2 rounded place-items-center hover:shadow-lg hover:shadow-yellow-400"
            >
              <div className="flex flex-col items-center justify-center text-blue-700">
                <p className="text-black font-bold">{course.courseCode}</p>
                <p>{course.title}</p>
              </div>
            </div>
          );
        })}
      </ul> */}
    </>
  );
}
