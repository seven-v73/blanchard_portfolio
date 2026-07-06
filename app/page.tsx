import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Portfolio } from "@/components/portfolio";
import { Skills } from "@/components/skills";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
