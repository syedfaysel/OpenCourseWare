"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import User from "@/models/userModel";

export default function Dashboard() {

  let user = localStorage.getItem("user");
  user = (JSON.parse(user).user);
  // console.log(user);
  
  const router = useRouter();
  const logout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/logout`
      );
      // console.log(res);
      toast.success("logout successful");
      router.push("/login");
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
      <Profile user={user} />
    </div>
  );
}

const Profile = ({user}:any) => {
  return (
    <div className="flex flex-col items-center bg-blue-300 rounded-lg p-3 m-3 text-black">
      <h1>userId <span className="text-red-900">({user.id})</span> </h1>
      <p>Email: <span className="text-red-900">({user.email})</span></p>
      <p>Email: <span className="text-red-900">{user.username}</span></p>
      <p>Your profile info here</p>
    </div>
  );
};
