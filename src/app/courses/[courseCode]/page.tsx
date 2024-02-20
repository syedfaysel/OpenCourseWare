import React from 'react'

function CourseDetails({
  params,
}: {
  params: {
    courseCode: string;
  };

}) {
  return (
    <>
      <h1>Single Course Page {params.courseCode}</h1>
    </>
  )
}

export default CourseDetails;