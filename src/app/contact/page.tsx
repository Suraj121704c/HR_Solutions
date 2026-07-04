import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HelpCircle,
  Briefcase,
  LifeBuoy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Contact Us — Nexus HR",
  description:
    "Let's build better workplaces together. Get in touch with Nexus HR and our team will get back to you within 24 hours.",
};

// Fills the gutter between the viewport edge and the 1200px container.
const RIGHT_STRIP_WIDTH = "max(1.25rem, calc((100vw - 1200px) / 2))";

const info = [
  { icon: Phone, label: "Phone", value: "+971 545287884" },
  { icon: Mail, label: "Email", value: "contact@nexushr.com" },
  {
    icon: MapPin,
    label: "Address",
    value: "Business District, Ajman Free Zone",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday: 9:00 AM to 6:00 PM",
  },
];

type Support = { icon: LucideIcon; title: string; description: string };

const support: Support[] = [
  {
    icon: HelpCircle,
    title: "General Enquiries",
    description: "Questions about our services or how we can help your organisation.",
  },
  {
    icon: Briefcase,
    title: "New Business",
    description: "Explore partnership opportunities and tailored HR solutions.",
  },
  {
    icon: LifeBuoy,
    title: "Client Support",
    description: "Existing clients? Get in touch with our support team for assistance.",
  },
  {
    icon: Users,
    title: "Careers",
    description: "Interested in joining our team? We'd love to hear from you.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero — grey strips + contact info on the left, message form on the right */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-[12rem] hidden h-11 -translate-y-1/2 bg-[#d9d9d9] lg:block"
          style={{ width: RIGHT_STRIP_WIDTH }}
        />

        <div className="container-x relative grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Contact Us
            </span>
            <h1 className="relative mt-3 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              <span
                aria-hidden
                className="pointer-events-none absolute right-full top-1/2 hidden h-11 w-screen -translate-y-1/2 bg-[#d9d9d9] lg:block"
              />
              Let&apos;s Build Better Workplaces Together
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
              Have a question or need support? We&apos;d love to hear from you.
              Reach out to our team and we&apos;ll get back to you.
            </p>

            <ul className="mt-8 space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy">
                      {label}
                    </p>
                    <p className="text-sm text-slate-500">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — message form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-xl shadow-navy/5 sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Fill out the contact form below, and one of our service specialists
              will get back to you within 24 hours.
            </p>

            <form className="mt-6 space-y-4">
              <Field label="Your Name" placeholder="Jane Doe" />
              <Field label="Phone Number" type="tel" placeholder="+971 5X XXX XXXX" />
              <Field label="Email Address" type="email" placeholder="jane@company.com" />
              <Field label="Company Name" placeholder="Acme Inc." />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-5 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How Can We Support You? */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="We're Here to Help"
            title="How Can We Support You?"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {support.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-2xl border border-slate-100 px-6 py-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Book a free Consultation"
        description="Schedule a 30 minute consultation with our HR experts."
      />
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
