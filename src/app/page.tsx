import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-2 min_height text-center">
      <h1 className="text-3xl font-bold text-center p-6 lg:text-4xl">
        Hello Folks! <br /> Welcome to <span className="text-yellow-500">ocw</span>X
      </h1>
      <p>The editors are working on the website Meanwhile you can </p>
      <span className="bg-blue-400 m-1 p-2 rounded hover:bg-blue-600"><Link href='/courses' className='font-bold text-black'>explore courses</Link></span>
      
    </main>
  );
}
