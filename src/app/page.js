import About from "./components/About";
import About2 from "./components/About2";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import HowWeWork2 from "./components/HowWeWork2";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-[100%] mx-auto">
      <Hero />
      {/* <About /> */}
      <About2 />
      {/* <HowWeWork /> */}
      <HowWeWork2 />
      <Contact />
    </main>
  );
}
