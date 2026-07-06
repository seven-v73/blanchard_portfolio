import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blanchard Kouassi | Créateur de contenu & Référent digital",
  description:
    "Portfolio de Blanchard Kouassi, créateur de contenu dynamique et référent digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
