import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const projects = [
  {
    title: "Transmission digitale",
    category: "Formation & pédagogie",
    image: "/images/blanchard/project-formation.jpg",
  },
  {
    title: "Captation terrain",
    category: "Photographie & vidéo",
    image: "/images/blanchard/project-captation.jpg",
  },
  {
    title: "Présence événementielle",
    category: "Contenu social",
    image: "/images/blanchard/project-terrain.jpg",
  },
];

export function Portfolio() {
  return (
    <section className="section-shell portfolio" id="portfolio">
      <Reveal className="section-heading wide">
        <p className="eyebrow">Réalisations</p>
        <h2>Une galerie pensée comme un studio en mouvement.</h2>
      </Reveal>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Reveal className="project-card" as="article" delay={index * 0.08} key={project.title}>
            <Image src={project.image} alt="" width={900} height={1100} />
            <div className="project-overlay">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <a href="#contact" aria-label={`Discuter du projet ${project.title}`}>
                Voir le projet <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
