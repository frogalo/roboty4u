import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Realizations from "./components/Realizations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { loadJson } from "./lib/data";
import {
  NavData,
  HeroData,
  AboutData,
  OfferData,
  RealizationsData,
  ContactData,
  ContactPerson,
  FooterData
} from "./types";

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
      <NavBar data={nav} />
      <main>
        <Hero data={hero} />
        <About data={about} />
        <Offer data={offer} />
        <Realizations data={realizations} />
        <Contact data={contact} />
      </main>
      <Footer data={footer} />
    </>
  );
}
