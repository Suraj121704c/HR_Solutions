import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Career — Nexus HR",
  description:
    "Join the Nexus HR team. Explore open roles and help us shape the future of people-first HR consulting.",
};

const openings = [
  {
    title: "Senior HR Consultant",
    type: "Full-time",
    location: "Remote / Dubai",
    department: "Consulting",
  },
  {
    title: "Talent Acquisition Specialist",
    type: "Full-time",
    location: "Ajman Free Zone",
    department: "Recruitment",
  },
  {
    title: "People Analytics Lead",
    type: "Full-time",
    location: "Remote",
    department: "Analytics",
  },
  {
    title: "L&D Program Manager",
    type: "Contract",
    location: "Hybrid / Abu Dhabi",
    department: "Training",
  },
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Build Your Career With Nexus HR"
        description="We're always looking for people who care deeply about helping others thrive. Explore our open roles below."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-4">
            {openings.map((job) => (
              <Link
                key={job.title}
                href="/contact"
                className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-200 hover:border-brand/30 hover:shadow-lg hover:shadow-navy/5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                    {job.department}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                  </div>
                </div>
                <span className="flex items-center gap-2 font-display text-sm font-medium text-brand">
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
