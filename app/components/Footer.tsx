import { FooterData } from "../types";

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer
      className="py-12 px-8"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(225,237,0,0.08)" }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
        style={{ maxWidth: "1440px" }}
      >
        {/* Brand column */}
        <div className="flex flex-col gap-6">
          <div className="text-xl font-black brand-font" style={{ color: "#e1ed00" }}>
            {data.brand}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
            {data.tagline}
          </p>
        </div>

        {/* Link columns */}
        {data.columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h5
              className="font-black text-xs tracking-widest uppercase brand-font"
              style={{ color: "#e1ed00" }}
            >
              {col.title}
            </h5>
            {col.links.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Copyright bar */}
      <div
        className="mx-auto mt-20 pt-8 text-center"
        style={{
          maxWidth: "1440px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "#6b7280",
          fontSize: "0.625rem",
          letterSpacing: "0.1em",
        }}
      >
        {data.copyright}
      </div>
    </footer>
  );
}
