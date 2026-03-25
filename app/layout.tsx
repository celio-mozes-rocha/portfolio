"use client"; // nécessaire pour hooks

import { useEffect } from "react";
import SideBar from "@/components/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Force le scroll en haut au chargement
    window.scrollTo(0, 0);
  }, []);

  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-800 text-slate-200">
        <main className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <SideBar />

          {/*Colonne de droite */}
          <div className="flex-1 px-6 lg:px-12 py-12 lg:py-24 w-full lg:max-w-3xl text-[clamp(0.875rem,2.5vw,1rem)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
