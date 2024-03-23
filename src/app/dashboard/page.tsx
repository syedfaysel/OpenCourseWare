"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();
  const logout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/logout`
      );
      toast.success("logout successful");
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button
          className={`p-2 border border-gray-300 rounded-lg my-4 bg-blue-500
          }`}
          onClick={logout}
          disabled={false}
        >
          Logout
        </button>
      <p>Your dashboard info here</p>
      <Profile />
    </div>
  );
}

const Profile = () => {
  return (
    <div>
      <h1>Profile (admin)</h1>
      <p>Your profile info here</p>
    </div>
  );
};
