import { useState, type FormEvent } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  email: z.string().trim().email("Enter a valid email").max(255),
  eventType: z.string().trim().min(1, "Please select an event type").max(60),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const eventTypes = [
  "Stay & Accommodation",
  "Wedding",
  "Anniversary",
  "Corporate Retreat",
  "Private Celebration",
  "Other",
];

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      eventType: fd.get("eventType"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-30px_rgba(80,20,20,0.25)] md:p-10"
    >
      <div className="text-[11px] uppercase tracking-luxe text-gold">Send an Enquiry</div>
      <h3 className="mt-3 font-serif text-3xl text-ink">Plan your visit</h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <Label>Event Type</Label>
          <select
            name="eventType"
            required
            defaultValue=""
            className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-ink outline-none transition focus:border-burgundy"
          >
            <option value="" disabled>Select an option</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label>Message</Label>
          <textarea
            name="message"
            rows={4}
            maxLength={1000}
            placeholder="Share dates, party size, or special requests…"
            className="mt-2 w-full resize-none border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-burgundy"
          />
        </div>
      </div>

      {status === "error" && error && (
        <p className="mt-6 text-sm text-destructive">{error}</p>
      )}
      {status === "sent" && (
        <p className="mt-6 text-sm text-burgundy">
          Thank you. Our concierge will be in touch shortly.
        </p>
      )}

      <button
        type="submit"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-10 py-4 text-[11px] uppercase tracking-wider-luxe text-ivory transition hover:bg-transparent hover:text-burgundy"
      >
        Submit Enquiry
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] uppercase tracking-wider-luxe text-ink/60">{children}</label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-burgundy"
      />
    </div>
  );
}
