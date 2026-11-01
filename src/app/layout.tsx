import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CTESK · Tributos",
  description:
    "Controle de pagamento de tributos federais (DARF)",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
