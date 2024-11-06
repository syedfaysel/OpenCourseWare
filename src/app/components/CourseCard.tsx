import Link from "next/link";
import { useRef } from "react";

interface CourseCardProps {
  courseCode: string;
  title: string;
  courseCategory: string;
}

export const CourseCard = ({
  courseCode,
  title,
  courseCategory,
}: CourseCardProps) => {
  const imgPath = `/course_cover/${courseCode}.png`;
  const defaultImg =
    "https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-260nw-1694176021.jpg";

  const addDefaultImg = (ev: any) => {
    // console.log("image error");
    ev.target.src = defaultImg;
  };

  return (
    <Link href={`/courses/${courseCode}`} className="card bg-base-100">
      <div className="card group hover:shadow-sm transition overflow-hidden border border-gray-700  p-3 h-full relative">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img
            className="object-cover fill-current w-full h-full  transition transform group-hover:scale-105 duration-300 ease-in-out"
            alt={title}
            src={defaultImg}
            onError={addDefaultImg}
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
        <div className="flex flex-col pt-2 ">
          <div className="text-lg md:text-xl font-medium  mb-9">
            {title}
          </div>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-md absolute bottom-0 left-3 right-0">
            <div className="flex items-center gap-x-1 text-gray-300">
              <p className="text-lg font-bold text-warning">{courseCode}</p>
              <small className="badge badge-primary">{courseCategory}</small>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card bg-base-300 shadow-xl ">
        <figure>
          <img
            src={imgPath}
            alt={title}
            onError={addDefaultImg}
            className="w-9/12 object-cover fill-current"
          />
        </figure>
        <div className="card-body">
          <div className="card-title items-start">
            <h1>{courseCode}</h1>
            <div className="badge badge-primary">{courseCategory}</div>
          </div>
          <h1>{title}</h1>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Theory</div>
            <div className="badge badge-outline">Lab</div>
          </div>
        </div>
      </div> */}
    </Link>
  );
};
