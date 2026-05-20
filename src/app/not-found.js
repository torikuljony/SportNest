import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#39FF14]/10 blur-[150px] rounded-full top-10 left-10" />

      {/* Content */}
      <div className="text-center relative z-10">
        
        <h1 className="text-[120px] md:text-[220px] font-black text-[#39FF14] leading-none">
          404
        </h1>

        <h2 className="text-white text-4xl md:text-6xl font-black mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-12">
          The page you are looking for doesn’t exist or may have been moved.
        </p>

        <Link href="/">
          <button className="bg-[#39FF14] hover:bg-[#2ee60f] text-black px-10 py-5 rounded-2xl font-black text-xl transition">
            Back To Home
          </button>
        </Link>
      </div>
    </section>
  );
}