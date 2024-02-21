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

  const onSignup = async () => { };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl font-bold">Signup</h1>
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
          className="p-2 border border-gray-300 rounded-lg mb-4"
          onClick={onSignup}
        >
          Signup
        </button>
        <Link href='/login'>Visit login page</Link>
      </div>
    </div>
  );
}
