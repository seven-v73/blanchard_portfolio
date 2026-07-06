import { BadgeCheck } from "lucide-react";
import { Reveal } from "./reveal";

const skills = [
  ["Création de contenu", "Direction éditoriale, formats courts, storytelling", "15+ projets"],
  ["Montage vidéo", "Rythme, habillage, adaptation réseaux sociaux", "★★★★★"],
  ["Design graphique", "Affiches, carrousels, identités de campagne", "★★★★☆"],
  ["Communication digitale", "Planning, animation, analyse de communauté", "★★★★★"],
  ["Photographie", "Cadrage, lumière, retouche naturelle", "★★★★☆"],
  ["Outils numériques", "Flutter, plateformes sociales, outils créatifs", "★★★★☆"],
];

export function Skills() {
  return (
    <section className="section-shell skills" id="skills">
      <Reveal className="section-heading">
        <p className="eyebrow">Compétences</p>
        <h2>Des savoir-faire concrets, réunis par une même exigence visuelle.</h2>
      </Reveal>

      <div className="skill-grid">
        {skills.map(([title, text, meta], index) => (
          <Reveal className="skill-card" delay={index * 0.05} key={title}>
            <div className="skill-icon">
              <BadgeCheck size={20} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <strong>{meta}</strong>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
