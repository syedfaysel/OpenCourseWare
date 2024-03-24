import Videoplayer from '@/app/components/Videoplayer';
import React from 'react'
import axios from 'axios'
import CourseNotFound from '@/app/components/CourseNotFound';


const  CourseDetails = async ({
  params,
}: {
  params: {
    courseCode: string;
  };

  }) => {

  const res: any = await axios.get("https://syedfaysel.github.io/json-api/ocw/courses.json"); 
  const courses = res.data;
  let videos = [];

  // console.log(courses)
  const course = courses.find((course: any) => course.courseCode === params.courseCode);
  if (!course) {
    return (<CourseNotFound />);
  } else {
    videos = course.videos;
    // console.log(course.videos);

  }


  return (
    <div>
      {/* <h1>{(!course) ? `${error}`: `Single Course Page ${params.courseCode}`}</h1> */}
      <h1 className='text-center font-bold text-xl lg:text-2xl'>You are learning <span className='text-green-500'>{course.title}</span></h1>
      <Videoplayer videos={videos} />
    </div>
  )
}

export default CourseDetails;