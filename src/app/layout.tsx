import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RenanChisas",
  description: "Site de portifolio do Renan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
