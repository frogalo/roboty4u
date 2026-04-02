"use client";

interface ContactFormData {
  selectLabel: string;
  selectOptions: string[];
  fields: { id: string; label: string; type: string; placeholder: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export default function ContactForm({ data }: { data: ContactFormData }) {
  return (
    <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label htmlFor={field.id}
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#e1ed00" }}>
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="p-4 text-white border-b-2 border-transparent transition-all"
              style={{ background: "#2a2a2a", borderRadius: "0.125rem" }}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="process"
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "#e1ed00" }}>
          {data.selectLabel}
        </label>
        <select
          id="process"
          className="p-4 text-white border-b-2 border-transparent transition-all appearance-none"
          style={{ background: "#2a2a2a", borderRadius: "0.125rem" }}>
          {data.selectOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message"
          className="text-xs font-bold uppercase tracking-widest"
          style={{ color: "#e1ed00" }}>
          {data.messageLabel}
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder={data.messagePlaceholder}
          className="p-4 text-white border-b-2 border-transparent transition-all resize-none"
          style={{ background: "#2a2a2a", borderRadius: "0.125rem" }}
        />
      </div>

      <button type="submit" className="btn-primary w-full py-5 text-lg">
        {data.submitLabel}
      </button>
    </form>
  );
}
