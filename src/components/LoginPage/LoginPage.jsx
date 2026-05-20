"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "@/firebase/firebase.config";

export default function LoginPage() {

  const router = useRouter();

  // Google Login
  const handleGoogleLogin = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      // Save User To MongoDB
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        }),
      });

      console.log(result.user);

      alert("Google Login Success ✅");

      router.push("/");

    } catch (error) {

      console.log(error);

      alert("Login Failed ❌");
    }
  };

  // Email Password Login
  const handleLogin = async (e) => {

    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {

      const result =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      console.log(result.user);

      alert("Login Success ✅");

      form.reset();

      router.push("/");

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-[#071120] to-black flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-md bg-[#0B0B0B]/90 backdrop-blur-xl border border-[#1d1d1d] rounded-[32px] p-8 shadow-[0_0_60px_rgba(57,255,20,0.08)]">

        {/* Tabs */}
        <div className="bg-[#111] rounded-2xl p-2 flex mb-10">

          <button className="flex-1 bg-[#39FF14] text-black py-3 rounded-xl font-bold">
            Sign In
          </button>

          <Link
            href="/register"
            className="flex-1 text-center text-gray-400 py-3 font-semibold hover:text-white transition"
          >
            Register
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-8">

          <p className="text-[#39FF14] uppercase tracking-[4px] text-sm font-semibold mb-3">
            SportNest
          </p>

          <h1 className="text-white text-4xl font-black mb-3 leading-tight">
            Welcome
            <span className="text-[#39FF14]"> Back</span>
          </h1>

          <p className="text-gray-500 leading-7">
            Login to access your sports facilities and bookings.
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black py-4 rounded-2xl font-bold mb-6 hover:bg-gray-200 transition duration-300 flex items-center justify-center gap-3"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="google"
            className="w-5 h-5"
          />

          Continue With Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">

          <div className="flex-1 h-px bg-[#222]" />

          <p className="text-gray-500 text-sm">
            OR
          </p>

          <div className="flex-1 h-px bg-[#222]" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          {/* Email */}
          <div>

            <label className="text-gray-400 text-sm block mb-3">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              className="w-full bg-[#111] border border-[#222] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14] transition"
            />
          </div>

          {/* Password */}
          <div>

            <label className="text-gray-400 text-sm block mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="********"
              required
              className="w-full bg-[#111] border border-[#222] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14] transition"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-[#39FF14] text-black py-4 rounded-2xl font-black text-xl hover:bg-[#2ee60f] transition duration-300 shadow-[0_0_25px_rgba(57,255,20,0.25)]">
            Sign In
          </button>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-500 mt-8">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="text-[#39FF14] font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}