import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-3xl mb-2">This is Syed Faysel Ahammad Rajo</h1>
      <p>See you around! This project is under construction</p>
      <p>Meanwhile you can explore <span><Link href='/courses' className='text-yellow-300'>courses</Link></span></p>
    </main>
  );
}