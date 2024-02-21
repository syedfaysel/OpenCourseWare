"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState, useEffect} from "react";
import toast from "react-hot-toast";
import axios from "axios";


export default function SignupPage() {

  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);


  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/user/signup", user);
      console.log("Signup success", res.data);
      toast.success("Signup success");
      router.push("/login")
    } catch (error: any) {
      console.log('Signup failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user.email && user.password && user.username) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl font-bold">{loading ? "Hold on! Cooking": "Signup"}</h1>
      <hr />
      <div className="flex flex-col my-3">
        <label htmlFor="username">Username</label>
        <input
          className="w-full p-2 my-2 bg-gray-800 rounded-md"
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">Email</label>
        <input
          className="w-full p-2 my-2 bg-gray-800 rounded-md"
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="w-full p-2 my-2 bg-gray-800 rounded-md"
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button
          className={`p-2 border border-gray-300 rounded-lg mb-4 ${buttonDisabled ? "bg-gray-500" : "bg-blue-500"}`}
          onClick={onSignup}
          disabled={buttonDisabled}
        >
          Signup
        </button>
        <Link href='/login'>Visit login page</Link>
      </div>
    </div>
  );
}
