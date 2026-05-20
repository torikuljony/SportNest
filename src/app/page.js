import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";

import PopularSports from "@/components/PopularSports/PopularSports";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import CommunitySection from "@/components/CommunitySection/CommunitySection";
import ReadyToPlay from "@/components/ReadyToPlay/ReadyToPlay";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="bg-[#050505] overflow-hidden">
        {/* Hero Banner */}
        <Banner />

        {/* Popular Sports */}
        <PopularSports />

        {/* Features */}
        <FeaturesSection />

        {/* Community Reviews */}
        <CommunitySection />

        {/* CTA Section */}
        <ReadyToPlay />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}