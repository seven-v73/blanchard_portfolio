import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <span className="brand-mark image-mark">
        <Image src="/images/blanchard/symbol-violet.png" width={32} height={32} alt="" />
      </span>
      <span className="signature">Blanchard Kouassi</span>
      <p>© 2026. Création de contenu & présence digitale.</p>
    </footer>
  );
}
