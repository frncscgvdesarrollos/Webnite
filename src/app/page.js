// import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import HowWeWork from "./components/How";
// import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowWeWork />
      {/* <Contact /> */}
    </main>
  );
}
