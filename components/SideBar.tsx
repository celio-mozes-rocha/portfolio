"use client";

import Footer from "./layout/Footer";
import NavaBar from "./layout/NavBar";
import Hero from "./layout/Hero";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 z-90 lg:hidden text-slate-200 bg-slate-700 hover:bg-slate-600 p-2 rounded transition-transform ${isOpen ? "rotate-180" : ""}`}
        aria-label={isOpen ? "Ouvrir le menu" : "Ouvrir le menu"}
      >
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-transform ${isOpen ? "rotate-45 translate-y-1" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
      </button>

      <aside className="w-full lg:basis-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between px-6 lg:px-12 py-8 border-b lg:border-b-0 border-slate-700 lg:overflow-y-auto">
        <Hero />
        <NavaBar isOpen={isOpen} onClose={() => setIsOpen(false)} />
        <Footer className="lg:block hidden" />
      </aside>

    </>
  );
}
