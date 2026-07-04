import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { StatsBar } from "@/components/home/StatsBar";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { images } from "@/utils/images";

export const metadata: Metadata = {
  title: "About Us — Nexus HR",
  description:
    "Learn about Nexus HR — a people-first consultancy helping businesses build high-performing teams.",
};

const values = [
  "People-first approach to every engagement",
  "Data-driven strategies with measurable outcomes",
  "Deep, industry-specific HR expertise",
  "Long-term partnerships, not one-off projects",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We Help Businesses Unlock the Power of Their People"
        description="Nexus HR is a people-centric consultancy on a mission to make world-class HR accessible to every growing business."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-brand-soft lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] rounded-br-[6rem] shadow-xl shadow-navy/10">
              <Image
                src={images.heroSectionPhoto}
                alt="The Nexus HR team collaborating"
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Who We Are
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              A Partner Invested in Your Growth
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              For over 15 years we&apos;ve partnered with 100+ companies to build
              teams that perform. We combine strategic thinking with hands-on
              execution to turn people challenges into competitive advantages.
            </p>
            <ul className="mt-6 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="pb-8">
        <StatsBar />
      </div>
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
