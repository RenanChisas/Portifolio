import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeHeader } from "@/components/HomeHeader";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHeader />;
      <About />
      <Work />
      <Footer />
    </>
  );
}
