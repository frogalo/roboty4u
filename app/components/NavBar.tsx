"use client";

import { useState } from "react";
import Image from "next/image";

import { NavData } from "../types";

export default function NavBar({ data }: { data: NavData }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50"
      style={{ background: "rgba(19,19,19,0.85)", backdropFilter: "blur(20px)", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
      <nav className="flex justify-between items-center px-8 py-2 max-w-[1440px] mx-auto">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-4">
          <Image 
            src="/images/logo.png" 
            alt={data.brand} 
            width={180} 
            height={48} 
            className="h-10 w-auto"
            priority
          />
          <span 
            className="text-2xl font-black tracking-stamp brand-font"
            style={{ color: "#e1ed00", letterSpacing: "-0.04em" }}
          >
            {data.brand}
          </span>
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
          onClick={() => setMenuOpen((v: boolean) => !v)}
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
