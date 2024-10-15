"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();

  const onLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user/login`, user);
      console.log("Login success", res.data);

      if (res.status === 200) {
        localStorage.setItem("user",JSON.stringify(res.data));
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.log("login failed\n", error);
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    if (user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl font-bold">
        {loading ? "Hold On! Cooking" : "Login | ocwX"}
      </h1>
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
          className={`p-2 border border-gray-300 rounded-lg mb-4 ${
            buttonDisabled ? "bg-gray-500" : "bg-blue-500"
          }`}
          onClick={onLogin}
          disabled={buttonDisabled}
        >
          Login
        </button>
        <Link href="/signup">Visit <span className="link text-yellow-400 underline">signup</span> page</Link>
      </div>
    </div>
  );
}
