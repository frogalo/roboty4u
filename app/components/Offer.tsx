import Image from "next/image";
import { OfferData } from "../types";

export default function Offer({ data }: { data: OfferData }) {
  return (
    <section
      id="offer"
      className="py-32"
      style={{ background: "#131313" }}
    >
      <div className="container mx-auto px-8" style={{ maxWidth: "1440px" }}>
        {/* Section header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e1ed00" }}
            >
              {data.sectionLabel}
            </div>
            <h2
              className="font-black uppercase tracking-stamp brand-font text-white"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1 }}
            >
              {data.heading}
            </h2>
          </div>
          <div
            className="hidden md:block text-right pb-4"
            style={{ borderBottom: "1px solid rgba(225,237,0,0.2)" }}
          >
            <span
              className="font-mono text-sm tracking-widest"
              style={{ color: "#e1ed00" }}
            >
              {data.catalogLabel}
            </span>
          </div>
        </div>

        {/* Robot grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {data.robots.map((robot) =>
            robot.isHighlight ? (
              /* Highlight card (yellow) */
              <div
                key={robot.index}
                className="relative p-10 overflow-hidden offer-card group"
                style={{ background: "#e1ed00" }}
              >
                <span
                  className="absolute top-6 right-6 font-black text-xl transition-opacity brand-font"
                  style={{ color: "#1b1d00", opacity: 0.2 }}
                >
                  {robot.index}
                </span>
                <div className="h-64 mb-8 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "6rem", color: "#1b1d00" }}
                  >
                    {robot.icon}
                  </span>
                </div>
                <h3
                  className="text-2xl font-black uppercase mb-6 leading-tight brand-font"
                  style={{ color: "#1b1d00" }}
                >
                  {robot.title}
                </h3>
                <ul className="space-y-4">
                  {robot.specs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex justify-between pb-2"
                      style={{ borderBottom: "1px solid rgba(27,29,0,0.1)" }}
                    >
                      <span
                        className="text-xs uppercase"
                        style={{ color: "rgba(27,29,0,0.7)" }}
                      >
                        {spec.label}
                      </span>
                      <span className="font-bold" style={{ color: "#1b1d00" }}>
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* Standard card */
              <div
                key={robot.index}
                className="relative p-10 overflow-hidden offer-card group"
                style={{ background: "#1b1b1b" }}
              >
                <span
                  className="absolute top-6 right-6 font-black text-xl transition-opacity brand-font group-hover:opacity-100"
                  style={{ color: "#e1ed00", opacity: 0.2 }}
                >
                  {robot.index}
                </span>
                <div className="h-64 mb-8 flex items-center justify-center overflow-hidden">
                  <Image
                    src={robot.imageSrc!}
                    alt={robot.imageAlt!}
                    width={300}
                    height={256}
                    className="max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ transform: "scale(1)", transition: "transform 0.7s ease, filter 0.7s ease" }}
                    unoptimized
                  />
                </div>
                <h3 className="text-2xl font-black text-white uppercase mb-6 leading-tight brand-font">
                  {robot.title}
                </h3>
                <ul className="space-y-4">
                  {robot.specs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex justify-between pb-2"
                      style={{ borderBottom: "1px solid rgba(71,72,50,0.15)" }}
                    >
                      <span
                        className="text-xs uppercase"
                        style={{ color: "#c8c8ab" }}
                      >
                        {spec.label}
                      </span>
                      <span className="font-bold text-white">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
