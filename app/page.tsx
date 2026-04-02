import fs from "fs";
import path from "path";
import Image from "next/image";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import VideoPlayer from "./components/VideoPlayer";

/* ────────────────────────── Types ────────────────────────── */
interface NavData {
  brand: string;
  links: { href: string; label: string }[];
  cta: string;
}
interface HeroData {
  label: string;
  headline1: string;
  headline2: string;
  headline3: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { label: string; value: string }[];
}
interface AboutData {
  sectionLabel: string;
  heading1: string;
  heading2: string;
  glassLabel: string;
  glassMission: string;
  paragraphs: string[];
  features: { icon: string; title: string; description: string }[];
}
interface RobotSpec { label: string; value: string }
interface Robot {
  index: string;
  title: string;
  imageAlt?: string;
  imageSrc?: string;
  icon?: string;
  isHighlight?: boolean;
  specs: RobotSpec[];
}
interface OfferData {
  sectionLabel: string;
  heading: string;
  catalogLabel: string;
  robots: Robot[];
}
interface RealizationItem {
  projectCode: string;
  title: string;
  videoSrc: string;
  description: string;
  tags: string[];
}
interface RealizationsData {
  sectionLabel: string;
  heading: string;
  items: RealizationItem[];
}
interface ContactPersonBase {
  icon: string;
  city: string;
}
interface ContactPerson extends ContactPersonBase {
  person: string;
  street: string;
  postal: string;
  phone: string;
  email: string;
}
interface ContactData {
  sectionLabel: string;
  heading: string;
  contacts: ContactPersonBase[];
  form: {
    fields: { id: string; label: string; type: string; placeholder: string }[];
    selectLabel: string;
    selectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}
interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
interface FooterData {
  brand: string;
  tagline: string;
  columns: FooterColumn[];
  copyright: string;
}

/* ────────────────────────── Data loader ────────────────────── */
function loadJson<T>(filename: string): T {
  const filePath = path.join(process.cwd(), "public", "data", filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

/* ────────────────────────── Page ────────────────────────── */
export default function Home() {
  const nav          = loadJson<NavData>("nav.json");
  const hero         = loadJson<HeroData>("hero.json");
  const about        = loadJson<AboutData>("about.json");
  const offer        = loadJson<OfferData>("offer.json");
  const realizations = loadJson<RealizationsData>("realizations.json");
  const contactBase  = loadJson<ContactData>("contact.json");
  const footer       = loadJson<FooterData>("footer.json");

  // Enrich contacts with personal data from env (server-side only)
  const envPersons: Omit<ContactPerson, "icon" | "city">[] = [
    {
      person: process.env.CONTACT_WARSAW_PERSON  ?? "",
      street: process.env.CONTACT_WARSAW_STREET  ?? "",
      postal: process.env.CONTACT_WARSAW_POSTAL  ?? "",
      phone:  process.env.CONTACT_WARSAW_PHONE   ?? "",
      email:  process.env.CONTACT_WARSAW_EMAIL   ?? "",
    },
    {
      person: process.env.CONTACT_SILESIA_PERSON ?? "",
      street: process.env.CONTACT_SILESIA_STREET ?? "",
      postal: process.env.CONTACT_SILESIA_POSTAL ?? "",
      phone:  process.env.CONTACT_SILESIA_PHONE  ?? "",
      email:  process.env.CONTACT_SILESIA_EMAIL  ?? "",
    },
  ];
  const contacts: ContactPerson[] = contactBase.contacts.map((base, i) => ({
    ...base,
    ...envPersons[i],
  }));
  const contact = { ...contactBase, contacts };

  return (
    <>
      {/* ── Navigation ── */}
      <NavBar data={nav} />

      <main>
        {/* ════════════════ HERO ════════════════ */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden"
          style={{ background: "#131313" }}
        >
          {/* Background robot image */}
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-40 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4DKu5lHSL2uUDfFd1D7aIctsAt_7KTkY6Xcivnc63TbLHO_gJoarg_JExTH2t6jfnzRyrLnZaaBxMgpGifte8RRkHTy3ZkPRJbodGb29tjlg04V8WQHOPxZaCI-m0rjVUOpawDG4A64dT50HduUXR8xeLbMKuntUVkPmWVr43Cu65en-w36sGV9vGAYBFnihryTRifVswniJWS0WKYsuQUj_CIZ5ec3Q74cG8LYuRQ5aGdICqpKMt8PtmMfIfwP5ZqBuj9MlXBtot"
              alt="Nowoczesne przemysłowe ramię robota w ciemnej hali produkcyjnej"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, #131313 0%, transparent 50%)" }}
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
                  {hero.label}
                </div>

                <h1
                  className="font-black leading-none uppercase tracking-stamp brand-font"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
                >
                  {hero.headline1}
                  <br />
                  <span style={{ color: "#e1ed00" }}>{hero.headline2}</span>
                  <br />
                  {hero.headline3}
                </h1>

                <p
                  className="text-xl md:text-2xl max-w-2xl leading-relaxed"
                  style={{ color: "#c8c8ab" }}
                >
                  {hero.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#contact" className="btn-primary px-10 py-5 text-lg">
                    {hero.ctaPrimary}
                  </a>
                  <a href="#offer" className="btn-secondary px-10 py-5 text-lg">
                    {hero.ctaSecondary}
                  </a>
                </div>
              </div>

              {/* Stats metadata — cols 10-12 */}
              <div
                className="hidden lg:flex col-start-10 col-end-13 flex-col justify-end pb-20 pl-8"
                style={{ borderLeft: "1px solid rgba(71,72,50,0.15)" }}
              >
                <div className="flex flex-col gap-12">
                  {hero.stats.map((stat) => (
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

        {/* ════════════════ O NAS ════════════════ */}
        <section
          id="about"
          className="py-32"
          style={{ background: "#1b1b1b" }}
        >
          <div className="container mx-auto px-8" style={{ maxWidth: "1440px" }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              {/* Image column */}
              <div className="md:col-span-5 relative group">
                {/* Corner accent */}
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 z-20 pointer-events-none"
                  style={{ borderTop: "4px solid #e1ed00", borderLeft: "4px solid #e1ed00" }}
                />
                <div className="relative overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlqlfQXvZrAh9-C2jw_OhqhhSGwhaJx6kVvid4rgiN0j1AF4bssT8P-zgQgP_gi-hOQTvsRJFZnQl0CDrLGORbWu7KnqXtgbWeoamOg9y_Gkji0wYNpO_mEo3Vbnt45Redj72q5KBHVdkNZDMj_dl5hyAwn4JPxSijQw__urQL_9qT29WQ2d0_SQ0csco6kyXf7mnkBFoVyXQ3B03YzzSIcfM-NdMP3e-PlOQ57b42bbogQDfBumnlpvch2Vu_pCeNcKUkfG2I4tvD"
                    alt="Zaawansowana stacja inżynierska z podwójnymi monitorami pokazującymi schematy ramienia robota"
                    width={700}
                    height={500}
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                    style={{ display: "block" }}
                    unoptimized
                  />
                </div>
                {/* Glass HUD overlay */}
                <div
                  className="glass-hud absolute bottom-6 right-6 p-6"
                  style={{ maxWidth: "200px" }}
                >
                  <p className="text-xs font-bold uppercase mb-1" style={{ color: "#e1ed00" }}>
                    {about.glassLabel}
                  </p>
                  <p className="text-sm font-medium leading-relaxed">{about.glassMission}</p>
                </div>
              </div>

              {/* Text column */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ color: "#e1ed00" }}
                >
                  {about.sectionLabel}
                </div>
                <h2
                  className="font-black uppercase tracking-stamp brand-font mb-8 text-white"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  {about.heading1}
                  <br />
                  {about.heading2}
                </h2>

                <div className="space-y-6 text-lg leading-relaxed" style={{ color: "#c8c8ab" }}>
                  {about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-4 mt-12">
                  {about.features.map((feat) => (
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

        {/* ════════════════ OFERTA ════════════════ */}
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
                  {offer.sectionLabel}
                </div>
                <h2
                  className="font-black uppercase tracking-stamp brand-font text-white"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1 }}
                >
                  {offer.heading}
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
                  {offer.catalogLabel}
                </span>
              </div>
            </div>

            {/* Robot grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {offer.robots.map((robot) =>
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

        {/* ════════════════ REALIZACJE ════════════════ */}
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
                {realizations.sectionLabel}
              </div>
              <h2
                className="font-black uppercase tracking-stamp brand-font text-white"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", lineHeight: 1 }}
              >
                {realizations.heading}
              </h2>
            </div>

            {/* Alternating rows: video/text ↔ text/video */}
            <div className="flex flex-col gap-28">
              {realizations.items.map((item, i) => {
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

        {/* ════════════════ KONTAKT ════════════════ */}
        <section
          id="contact"
          className="py-32"
          style={{ background: "#131313", borderTop: "1px solid rgba(225,237,0,0.05)" }}
        >
          <div className="container mx-auto px-8" style={{ maxWidth: "1440px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Contact info */}
              <div className="lg:col-span-5">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ color: "#e1ed00" }}
                >
                  {contact.sectionLabel}
                </div>
                <h2
                  className="font-black uppercase tracking-stamp brand-font text-white mb-12"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  {contact.heading}
                </h2>

                <div className="space-y-12">
                  {contact.contacts.map((person) => (
                    <div key={person.city} className="flex items-start gap-6">
                      <div
                        className="w-12 h-12 flex items-center justify-center shrink-0"
                        style={{
                          background: "#1b1b1b",
                          borderLeft: "2px solid #e1ed00",
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ color: "#e1ed00" }}>
                          {person.icon}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-bold text-white uppercase brand-font">
                          {person.city}
                        </h4>
                        <p className="font-semibold" style={{ color: "#e2e2e2" }}>{person.person}</p>
                        <p className="text-sm" style={{ color: "#c8c8ab" }}>{person.street}</p>
                        <p className="text-sm mb-1" style={{ color: "#c8c8ab" }}>{person.postal}</p>
                        <p className="font-mono text-sm" style={{ color: "#e1ed00" }}>{person.phone}</p>
                        <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{person.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-7">
                <div
                  className="relative overflow-hidden p-8 md:p-12"
                  style={{
                    background: "#1b1b1b",
                    borderTop: "4px solid #e1ed00",
                  }}
                >
                  {/* BG texture icon */}
                  <div className="absolute top-0 right-0 p-4 pointer-events-none" style={{ opacity: 0.04 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "200px" }}>
                      precision_manufacturing
                    </span>
                  </div>
                  <ContactForm data={contact.form} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════ FOOTER ════════════════ */}
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
              {footer.brand}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
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
          {footer.copyright}
        </div>
      </footer>
    </>
  );
}
