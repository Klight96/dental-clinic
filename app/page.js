
import About from "@/components/About";
import Card from "@/components/Card";
import Doctors from "@/components/Doctors";
import Hero from "@/components/Hero";
import Testimonies from "@/components/Testimonies";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Card />
      <Testimonies />
      <Doctors />
    </main>
  );
}
