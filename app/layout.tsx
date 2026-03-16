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
        <main className="max-w-7xl mx-auto flex">
          <aside>
            <SideBar />
          </aside>

          {/*Colonne de droite */}
          <div className="basis-4/5 px-12 py-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
