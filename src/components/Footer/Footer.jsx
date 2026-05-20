import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#111827] px-6 lg:px-14 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#111827]">
          
          {/* Logo */}
          <div>
            <h2 className="text-[#39FF14] text-3xl font-bold mb-5">
              SportNest
            </h2>

            <p className="text-gray-400 leading-7 text-sm">
              Premium facility booking platform designed for elite athlete
              performance and effortless management.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Explore
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Facilities
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Sports Categories
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Locations
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Memberships
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Partner
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                List Your Facility
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Admin Portal
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Developer API
              </li>

              <li className="text-gray-400 hover:text-[#39FF14] transition cursor-pointer">
                Case Studies
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              
              <div className="w-10 h-10 rounded-full border border-[#1F2937] bg-[#071120] flex items-center justify-center text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14] transition-all duration-300 cursor-pointer">
                <FaFacebookF size={16} />
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F2937] bg-[#071120] flex items-center justify-center text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14] transition-all duration-300 cursor-pointer">
                <FaXTwitter size={16} />
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F2937] bg-[#071120] flex items-center justify-center text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14] transition-all duration-300 cursor-pointer">
                <FaInstagram size={16} />
              </div>

              <div className="w-10 h-10 rounded-full border border-[#1F2937] bg-[#071120] flex items-center justify-center text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14] transition-all duration-300 cursor-pointer">
                <HiOutlineMail size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2024 SportNest. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">
            <span className="text-gray-500 hover:text-[#39FF14] transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="text-gray-500 hover:text-[#39FF14] transition cursor-pointer">
              Terms of Service
            </span>

            <span className="text-gray-500 hover:text-[#39FF14] transition cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}