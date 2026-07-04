import type { Metadata } from "next";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us — Nexus HR",
  description:
    "Get in touch with Nexus HR to book a consultation and start building a stronger workforce.",
};

const info = [
  {
    icon: MapPin,
    label: "Office Location",
    value: "Business District, Ajman Free Zone, Office C1, N° DF6008",
  },
  { icon: Mail, label: "Email Us", value: "contact@nexushr.com" },
  { icon: Phone, label: "Call Us", value: "+971 4 000 0000" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 09:00 – 18:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build a Stronger Workforce Together"
        description="Tell us about your goals and our team will get back to you within one business day."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Get In Touch
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              We&apos;d Love to Hear From You
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Whether you&apos;re scaling a team or rethinking your people
              strategy, we&apos;re here to help.
            </p>

            <ul className="mt-8 space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-100 bg-cream p-7 sm:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First Name" placeholder="Jane" />
                <Field label="Last Name" placeholder="Doe" />
              </div>
              <Field label="Email" type="email" placeholder="jane@company.com" />
              <Field label="Company" placeholder="Acme Inc." />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your HR needs..."
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-navy px-5 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-navy-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand"
      />
    </div>
  );
}
