import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ExploreCards from "@/components/ExploreCards/ExploreCards";

export default function ExplorePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050505] min-h-screen pt-28">
        <ExploreCards />
      </main>

      <Footer />
    </>
  );
}