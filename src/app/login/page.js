import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LoginPage from "@/components/LoginPage/LoginPage";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="bg-black pt-24 min-h-screen">
        <LoginPage />
      </main>

      <Footer />
    </>
  );
}