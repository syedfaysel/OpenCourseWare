"use client"
import { useRouter } from 'next/navigation'
import { MdErrorOutline } from 'react-icons/md'


const CourseNotFound = () => {

  const router = useRouter();
  setTimeout(() => {
    router.push('/courses');
  }, 3000);

  return (
    <div className='flex flex-col items-center'>
      <div>
        <MdErrorOutline className='text-yellow-400 text-3xl'></MdErrorOutline>
        <h1 className='text-2xl font-semibold text-yellow-400'>Oppps! No such course found
        </h1>
        <p>Redirecting to the courses page in 3s</p>
      </div>
    </div>
  )
}

export default CourseNotFound;