import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Achivements from "@/components/achivements";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section - Full Width */}
      <section className="w-full">
        <Intro />
      </section>
      
      {/* About Section */}
      <section className="w-full py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <About />
      </section>
      
      {/* Experience Section with alternate background */}
      <section className="w-full py-20">
        <Experience />
      </section>
      
      {/* Projects Section */}
      <section className="w-full py-20 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <Projects />
      </section>
      
      {/* Skills Section */}
      <section className="w-full py-20">
        <Skills />
      </section>
      
      {/* Achievements Section */}
      <section className="w-full py-20 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <Achivements />
      </section>
      
      {/* Certificates Section */}
      <section className="w-full py-20">
        <Certificates />
      </section>
      
      {/* Contact Section */}
      <section className="w-full py-20 bg-gradient-to-t from-slate-900/50 to-transparent">
        <Contact />
      </section>
    </main>
  );
}
