"use client";

import Footer from "./layout/Footer";
import NavaBar from "./layout/NavBar";
import Hero from "./layout/Hero";

export default function SideBar() {

  return (
    <aside className="w-full lg:basis-2/5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-between px-6 lg:px-12 py-8 border-b lg:border-b-0 border-slate-700">
      <Hero />
      <NavaBar />
      <Footer />
    </aside>
  );
}
