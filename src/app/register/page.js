import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RegisterPage from "@/components/RegisterPage/RegisterPage";

export default function Register() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 min-h-screen">
        <RegisterPage />
      </main>

      <Footer />
    </>
  );
}