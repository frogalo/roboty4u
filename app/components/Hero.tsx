import Image from "next/image";
import { HeroData } from "../types";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden"
      style={{ background: "#131313" }}
    >
      {/* Background robot image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-25 lg:opacity-40 pointer-events-none">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4DKu5lHSL2uUDfFd1D7aIctsAt_7KTkY6Xcivnc63TbLHO_gJoarg_JExTH2t6jfnzRyrLnZaaBxMgpGifte8RRkHTy3ZkPRJbodGb29tjlg04V8WQHOPxZaCI-m0rjVUOpawDG4A64dT50HduUXR8xeLbMKuntUVkPmWVr43Cu65en-w36sGV9vGAYBFnihryTRifVswniJWS0WKYsuQUj_CIZ5ec3Q74cG8LYuRQ5aGdICqpKMt8PtmMfIfwP5ZqBuj9MlXBtot"
          alt="Nowoczesne przemysłowe ramię robota w ciemnej hali produkcyjnej"
          fill
          style={{ objectFit: "cover" }}
          priority
          unoptimized
        />
        <div
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to right, #131313 0%, transparent 100%)",
            display: "block" 
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{ 
            background: "linear-gradient(to bottom, #131313 0%, transparent 40%, #131313 100%)" 
          }}
        />
      </div>

      <div className="container mx-auto px-8 z-10" style={{ maxWidth: "1440px" }}>
        <div className="grid grid-cols-12 gap-6">
          {/* Main copy — cols 1-8 */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
            {/* Label badge */}
            <div
              className="inline-flex items-center gap-2 font-bold tracking-widest uppercase text-sm mb-4"
              style={{
                color: "#e1ed00",
                borderLeft: "4px solid #e1ed00",
                paddingLeft: "1rem",
              }}
            >
              {data.label}
            </div>

            <h1
              className="font-black leading-none uppercase tracking-stamp brand-font"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
            >
              {data.headline1}
              <br />
              <span style={{ color: "#e1ed00" }}>{data.headline2}</span>
              <br />
              {data.headline3}
            </h1>

            <p
              className="text-xl md:text-2xl max-w-2xl leading-relaxed"
              style={{ color: "#c8c8ab" }}
            >
              {data.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="btn-primary px-10 py-5 text-lg">
                {data.ctaPrimary}
              </a>
              <a href="#offer" className="btn-secondary px-10 py-5 text-lg">
                {data.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Stats metadata — cols 10-12 */}
          <div
            className="hidden lg:flex col-start-10 col-end-13 flex-col justify-end pb-20 pl-8"
            style={{ borderLeft: "1px solid rgba(71,72,50,0.15)" }}
          >
            <div className="flex flex-col gap-12">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-xs font-bold uppercase mb-2 tracking-widest"
                    style={{ color: "#e1ed00" }}
                  >
                    {stat.label}
                  </div>
                  <div className="text-4xl font-black brand-font">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
