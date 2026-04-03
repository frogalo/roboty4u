import ContactForm from "./ContactForm";
import { ContactData, ContactPerson } from "../types";

export default function Contact({ data }: { data: Omit<ContactData, "contacts"> & { contacts: ContactPerson[] } }) {
  return (
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
              {data.sectionLabel}
            </div>
            <h2
              className="font-black uppercase tracking-stamp brand-font text-white mb-12"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
            >
              {data.heading}
            </h2>

            <div className="space-y-12">
              {data.contacts.map((person) => (
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
              <ContactForm data={data.form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
