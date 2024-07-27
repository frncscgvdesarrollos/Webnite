import About from "./components/About";
import Hero from "./components/Hero";
import HowWeWork from "./components/How";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-[100%] mx-auto">
      <Hero />
      <About />
      <HowWeWork />
      <Contact />
    </main>
  );
}
