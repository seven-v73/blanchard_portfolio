"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const links = [
  ["À propos", "#about"],
  ["Réalisations", "#portfolio"],
  ["Compétences", "#skills"],
  ["Contact", "#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Accueil">
        <span className="brand-mark image-mark">
          <Image src="/images/blanchard/symbol-violet.png" width={32} height={32} alt="" />
        </span>
        <span>Blanchard</span>
      </a>

      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Navigation principale">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Discuter
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
