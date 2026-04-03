import Image from "next/image";
import { AboutData } from "../types";

export default function About({ data }: { data: AboutData }) {
  return (
    <section
      id="about"
      className="py-32"
      style={{ background: "#1b1b1b" }}
    >
      <div className="container mx-auto px-8" style={{ maxWidth: "1440px" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Image column */}
          <div className="md:col-span-5 relative group min-h-[400px]">
            {/* Corner accent */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 z-20 pointer-events-none md:block"
              style={{ borderTop: "4px solid #e1ed00", borderLeft: "4px solid #e1ed00" }}
            />
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/misja.png"
                alt="Zaawansowana stacja inżynierska z podwójnymi monitorami pokazującymi schematy ramienia robota"
                fill
                className="w-full grayscale md:hover:grayscale-0 transition-all duration-700"
                style={{ objectFit: "cover" }}
                unoptimized
              />
            </div>
            {/* Glass HUD overlay */}
            <div
              className="glass-hud absolute bottom-6 right-6 p-6"
              style={{ maxWidth: "200px" }}
            >
              <p className="text-xs font-bold uppercase mb-1" style={{ color: "#e1ed00" }}>
                {data.glassLabel}
              </p>
              <p className="text-sm font-medium leading-relaxed">{data.glassMission}</p>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: "#e1ed00" }}
            >
              {data.sectionLabel}
            </div>
            <h2
              className="font-black uppercase tracking-stamp brand-font mb-8 text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              {data.heading1}
              <br />
              {data.heading2}
            </h2>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#c8c8ab" }}>
              {data.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {data.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6"
                  style={{
                    background: "#353535",
                    borderLeft: "2px solid #e1ed00",
                  }}
                >
                  <span className="material-symbols-outlined mb-3 block" style={{ color: "#e1ed00" }}>
                    {feat.icon}
                  </span>
                  <h4 className="font-bold text-white uppercase mb-1 brand-font">{feat.title}</h4>
                  <p className="text-xs" style={{ color: "#c8c8ab" }}>{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
