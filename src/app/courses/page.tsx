import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
      <h1 className='text-center text-2xl my-9 font-bold text-green-300'>All courses</h1>
      <div>
        <ul>
          <li>
            <Link href="/courses/CSE110">
              <p>Course 1</p>
            </Link>
          </li>
          
        </ul>
      </div>
    </>


  )
}

export default page