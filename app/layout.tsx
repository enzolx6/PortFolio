import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat ({
  subsets: ['latin'],
  weight: ['200', '400', '500'],
})

export const metadata: Metadata = {
  title: "Laurioux Enzo - Développeur Web Front-End",
  description: "PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
