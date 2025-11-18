import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import VLibras from "@/Components/Vlibras";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata = {
  title: "QR Cultural",
  description: "Projetado para promover a cultura local através de pontos turísticos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <VLibras />
        {children}
      </body>
    </html>
  );
}