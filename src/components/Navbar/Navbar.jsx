"use client";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import Link from "next/link";

import Image from "next/image";

import {
  usePathname,
  useRouter,
} from "next/navigation";

import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "@/firebase/firebase.config";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const [dropdown, setDropdown] =
    useState(false);

  const [user, setUser] =
    useState(null);

  const dropdownRef = useRef(null);

  const pathname = usePathname();

  const router = useRouter();

  // Firebase User Check
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);
        }
      );

    return () => unsubscribe();

  }, []);

  // Outside Click Close
  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {

        setDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // Logout Function
  const handleLogout = async () => {

    try {

      await signOut(auth);

      alert("Logout Success ✅");

      router.push("/login");

    } catch (error) {

      console.log(error);

      alert("Logout Failed ❌");
    }
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/explore",
    },
  ];

  const privateLinks = [
    {
      name: "My Bookings",
      path: "/dashboard",
    },
    {
      name: "Add Facility",
      path: "/add-facility",
    },
    {
      name: "Manage My Facilities",
      path: "/manage-facilities",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#060814]/90 backdrop-blur-md border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="SportNest Logo"
            width={45}
            height={45}
            className="object-contain"
          />

          <h1 className="text-2xl font-black text-[#00FF29] cursor-pointer">
            SportNest
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`pb-1 transition ${
                pathname === link.path
                  ? "text-[#00FF29] border-b-2 border-[#00FF29]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Private Links */}
          {user &&
            privateLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`pb-1 transition ${
                  pathname === link.path
                    ? "text-[#00FF29] border-b-2 border-[#00FF29]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          {!user ? (

            <Link href="/login">
              <button className="bg-[#39FF14] text-black px-5 py-2.5 rounded-full font-bold hover:bg-[#00dd22] transition">
                Login
              </button>
            </Link>

          ) : (

            <div
              ref={dropdownRef}
              className="relative"
            >

              {/* Profile */}
              <img
                onClick={() =>
                  setDropdown(!dropdown)
                }
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="profile"
                className="w-12 h-12 rounded-full border-2 border-[#39FF14] cursor-pointer object-cover"
              />

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 mt-4 w-60 bg-[#071120] border border-[#1F2937] rounded-2xl p-4 shadow-2xl">

                  <div className="mb-4 border-b border-white/10 pb-3">

                    <h2 className="text-white font-bold">
                      {user?.displayName ||
                        "User"}
                    </h2>

                    <p className="text-gray-400 text-sm truncate">
                      {user?.email}
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">

                    <Link
                      href="/dashboard"
                      className="block text-gray-300 hover:text-[#39FF14]"
                    >
                      My Bookings
                    </Link>

                    <Link
                      href="/add-facility"
                      className="block text-gray-300 hover:text-[#39FF14]"
                    >
                      Add Facility
                    </Link>

                    <Link
                      href="/manage-facilities"
                      className="block text-gray-300 hover:text-[#39FF14]"
                    >
                      Manage My Facilities
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="text-red-500 hover:text-red-400"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setOpen(!open)
          }
          className="lg:hidden text-white"
        >
          {open ? (
            <HiX size={28} />
          ) : (
            <HiMenu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#071120] border-t border-white/10 px-6 py-6">

          <div className="flex flex-col gap-5 text-sm font-semibold">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() =>
                  setOpen(false)
                }
                className={
                  pathname === link.path
                    ? "text-[#00FF29]"
                    : "text-gray-300 hover:text-white"
                }
              >
                {link.name}
              </Link>
            ))}

            {user &&
              privateLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={
                    pathname === link.path
                      ? "text-[#00FF29]"
                      : "text-gray-300 hover:text-white"
                  }
                >
                  {link.name}
                </Link>
              ))}

            {!user ? (

              <Link href="/login">
                <button className="bg-[#39FF14] text-black py-3 rounded-full font-bold w-full">
                  Login
                </button>
              </Link>

            ) : (

              <button
                onClick={handleLogout}
                className="border border-red-500 text-red-500 py-3 rounded-full"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}