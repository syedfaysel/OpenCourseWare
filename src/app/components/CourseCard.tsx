import Link from "next/link";

interface CourseCardProps {
  courseCode: string;
  title: string;
  imageUrl: string;
  courseType: string;
  courseCategory: string;
};

export const CourseCard = ({
  courseCode,
  title,
  imageUrl,
  courseType,
  courseCategory
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${courseCode}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border border-gray-700 rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <img
            
            className="object-cover fill-current w-full h-full rounded-md transition transform group-hover:scale-105 duration-300 ease-in-out"
            alt={title}
            src={'https://www.shutterstock.com/image-vector/elearning-banner-online-education-home-260nw-1694176021.jpg'}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {courseCode}
          </div>
          <p className="text-xs text-muted-foreground">
            {title}
          </p>       
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-gray-300">
              {courseCategory}
            </div>
          </div>
         
        </div>
      </div>
    </Link>
  )
}