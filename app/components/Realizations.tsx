import VideoPlayer from "./VideoPlayer";
import { RealizationsData } from "../types";

export default function Realizations({ data }: { data: RealizationsData }) {
  return (
    <section
      id="realizations"
      className="py-32 overflow-hidden"
      style={{ background: "#1b1b1b" }}
    >
      <div className="container mx-auto px-8" style={{ maxWidth: "1440px" }}>
        {/* Section header */}
        <div className="mb-20">
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

        {/* Alternating rows: video/text ↔ text/video */}
        <div className="flex flex-col gap-28">
          {data.items.map((item, i) => {
            const videoLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
              >
                {/* Video block */}
                <div
                  className={`md:col-span-7 relative ${
                    videoLeft ? "order-1" : "order-1 md:order-2"
                  }`}
                >
                  <VideoPlayer src={item.videoSrc} title={item.title} />
                </div>

                {/* Text block */}
                <div
                  className={`md:col-span-5 flex flex-col gap-6 ${
                    videoLeft ? "order-2" : "order-2 md:order-1"
                  }`}
                >
                  <div
                    className="font-mono text-sm uppercase font-bold tracking-widest"
                    style={{ color: "#e1ed00" }}
                  >
                    {item.projectCode}
                  </div>
                  <h3
                    className="font-black text-white uppercase leading-none brand-font"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#c8c8ab" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-bold uppercase brand-font"
                        style={{ background: "#2a2a2a", color: "#e1ed00" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
