import { Camera, Clapperboard, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

const values = [
  { icon: Sparkles, label: "Créativité", text: "Des idées traduites en formats utiles, beaux et faciles à comprendre." },
  { icon: MessageCircle, label: "Communauté", text: "Une communication pensée pour créer du lien, pas seulement de la portée." },
  { icon: Camera, label: "Image", text: "Une attention au cadrage, au rythme et à la cohérence visuelle." },
  { icon: Clapperboard, label: "Rythme", text: "Des contenus construits pour retenir l'attention sans forcer l'effet." },
];

export function About() {
  return (
    <section className="section-shell about" id="about">
      <Reveal className="section-heading">
        <p className="eyebrow">À propos</p>
        <h2>Un créateur qui pense autant le message que l&apos;émotion.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="glass-panel about-story">
          <p>
            Blanchard Kouassi accompagne les idées, les projets et les marques
            qui veulent exister avec justesse dans l&apos;espace digital. Son approche
            mélange création de contenu, communication visuelle et lecture fine
            des usages numériques.
          </p>
          <p>
            L&apos;objectif : construire une présence reconnaissable, professionnelle
            et profondément humaine, avec des contenus qui donnent envie de
            regarder, comprendre et agir.
          </p>
          <span className="signature">Blanchard</span>
          <div className="about-media">
            <Image
              src="/images/blanchard/about-digital.jpg"
              width={1000}
              height={1400}
              alt="Blanchard Kouassi au travail dans son environnement digital"
            />
          </div>
        </Reveal>

        <div className="value-grid">
          {values.map((item, index) => (
            <Reveal className="value-card" delay={index * 0.06} key={item.label}>
              <item.icon size={22} />
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
