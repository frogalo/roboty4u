"use client";

import { useState } from "react";

interface NavData {
  brand: string;
  links: { href: string; label: string }[];
  cta: string;
}

export default function NavBar({ data }: { data: NavData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50"
      style={{ background: "rgba(19,19,19,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
      <nav className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
        {/* Brand */}
        <a href="#" className="text-2xl font-black tracking-stamp brand-font"
          style={{ color: "#e1ed00", letterSpacing: "-0.04em" }}>
          {data.brand}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {data.links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-semibold">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary px-6 py-2 text-sm">
            {data.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#e1ed00" }}
          aria-label="Otwórz menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 px-8 pb-6 pt-2"
          style={{ background: "#131313", borderTop: "1px solid rgba(225,237,0,0.1)" }}>
          {data.links.map((link) => (
            <a key={link.href} href={link.href}
              className="nav-link py-3 border-b font-semibold text-sm"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-3 px-6 py-3 text-sm text-center"
            onClick={() => setMenuOpen(false)}>
            {data.cta}
          </a>
        </div>
      )}
    </header>
  );
}
