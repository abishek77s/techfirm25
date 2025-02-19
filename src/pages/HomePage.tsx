import Hero from "../components/Hero";
import Events from "../components/Events";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div className="relative min-h-1.5 bg-black">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-200/40 via-purple-800/30 to-pink-900/40 animate-gradient bg-[length:400%_400%] z-0" />
      <div className="relative z-10">
        <Hero />
        <Events />
        <About />
        <Contact />
      </div>
    </div>
  );
}
