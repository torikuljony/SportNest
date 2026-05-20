"use client";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.config";

export default function PrivateRoute({
  children,
}) {

  const [loading, setLoading] =
    useState(true);

  const router = useRouter();

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (!user) {

            router.push("/login");
          }

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, [router]);

  if (loading) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center">

        <h1 className="text-[#39FF14] text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  return children;
}