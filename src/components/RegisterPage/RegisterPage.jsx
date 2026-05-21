"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  auth,
  googleProvider,
} from "@/firebase/firebase.config";

export default function RegisterPage() {

  const router = useRouter();

  // Google Register
  const handleGoogleRegister = async () => {
    try {

      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      console.log(result.user);

      alert("Google Register Success ✅");

      router.push("/");

    } catch (error) {

      console.log(error);

      alert("Register Failed ❌");
    }
  };

  // Email Register
  const handleRegister = async (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {

      const result =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // update profile
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });

      console.log(result.user);

      alert("Account Created Successfully ✅");

      form.reset();

      router.push("/");

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-black via-[#071120] to-black flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-2xl bg-[#0B0B0B]/90 backdrop-blur-xl border border-[#1d1d1d] rounded-[32px] p-8 shadow-[0_0_60px_rgba(57,255,20,0.08)]">

        {/* Top Switch */}
        <div className="bg-[#111] rounded-2xl p-2 flex mb-10">

          <Link
            href="/login"
            className="flex-1 text-center text-gray-400 py-3 font-semibold hover:text-white transition"
          >
            Sign In
          </Link>

          <button className="flex-1 bg-[#39FF14] text-black py-3 rounded-xl font-bold">
            Register
          </button>
        </div>

        {/* Heading */}
        <div className="mb-8">

          <p className="text-[#39FF14] uppercase tracking-[4px] text-sm font-semibold mb-3">
            SportNest
          </p>

          <h1 className="text-white text-5xl font-black mb-3">
            Create
            <span className="text-[#39FF14]"> Account</span>
          </h1>

          <p className="text-gray-500 leading-7">
            Join SportNest today and book premium sports facilities.
          </p>
        </div>

        {/* Google Register */}
        <button
          onClick={handleGoogleRegister}
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

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-[#222]" />
        </div>

        {/* Form */}
        <form
          onSubmit={handleRegister}
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label className="text-gray-400 text-sm block mb-3">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full bg-[#111] border border-[#222] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14] transition"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-gray-400 text-sm block mb-3">
              Photo URL
            </label>

            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              required
              className="w-full bg-[#111] border border-[#222] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#39FF14] transition"
            />
          </div>

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
            Create Account
          </button>
        </form>

        {/* Bottom */}
        <p className="text-center text-gray-500 mt-8">

          Already have an account?{" "}

          <Link
            href="/login"
            className="text-[#39FF14] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}