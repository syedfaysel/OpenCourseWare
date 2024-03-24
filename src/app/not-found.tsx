import Link from "next/link";


export default  function NotFound() {

  return (
    <div className="flex flex-col items-center justify-center  min-h-[70vh]">
      <h2 className="text-2xl py-3">404 | Not Found</h2>
      <p>Could not find requested resource</p>
      <p className="py-2">
        Return to <Link href="/" className="bg-blue-600 p-2 mx-2 rounded-md text-gray-100 font-semibold hover:bg-yellow-500 hover:text-gray-900">Home</Link>
      </p>
    </div>
  );
}
