"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">Bonjour, je suis</p>
          <h1>Blanchard Kouassi</h1>
          <p className="hero-role">Créateur de contenu dynamique & référent digital</p>
          <p className="hero-text">
            Je crée des expériences digitales qui connectent les idées, les marques
            et les communautés avec une présence claire, sensible et mémorable.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#portfolio">
              Voir les projets <ArrowUpRight size={18} />
            </a>
            <a className="ghost-button" href="#contact">
              <PlayCircle size={18} /> Construire ensemble
            </a>
          </div>
        </Reveal>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 40, rotate: 1.5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <Image
          className="hero-image"
          src="/images/blanchard/portrait-hero.jpg"
          width={1100}
          height={1200}
          priority
          alt="Portrait professionnel de Blanchard Kouassi"
        />
        <div className="floating-card card-top">
          <span>Vision</span>
          <strong>Contenu vivant</strong>
        </div>
        <div className="floating-card card-bottom">
          <span>Signature</span>
          <strong>Digital humain</strong>
        </div>
      </motion.div>
    </section>
  );
}
