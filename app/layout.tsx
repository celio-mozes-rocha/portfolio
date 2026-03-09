"use client"; // nécessaire pour hooks

import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force le scroll en haut au chargement
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}