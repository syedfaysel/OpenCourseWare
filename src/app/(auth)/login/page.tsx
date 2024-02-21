"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {useState} from "react";

export default function SignupPage() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onLogin = async () => { };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl font-bold">Login</h1>
      <hr />
      <div className="flex flex-col my-3">
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
          className="p-2 border border-gray-300 rounded-lg mb-4"
          onClick={onLogin}
        >
          Login
        </button>
        <Link href='/signup'>Visit signup page</Link>
      </div>
    </div>
  );
}
