import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck,
  HeartHandshake,
  TrendingUp,
  Handshake,
  Scale,
  Users,
  Rocket,
  ClipboardCheck,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/home/CtaBanner";
import { images } from "@/utils/images";

export const metadata: Metadata = {
  title: "About Us — Nexus HR",
  description:
    "We are passionate about people and their potential — learn the story and principles behind Nexus HR.",
};

// Fills the gutter between the viewport edge and the 1200px container.
const RIGHT_STRIP_WIDTH = "max(1.25rem, calc((100vw - 1200px) / 2))";

type Feature = { icon: LucideIcon; title: string; description: string };

const storyFeatures: Feature[] = [
  {
    icon: HeartHandshake,
    title: "People Centric",
    description: "We put people at the heart of every solution.",
  },
  {
    icon: TrendingUp,
    title: "Result Driven",
    description: "We focus on outcomes that drive growth.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "We build long-term relationships.",
  },
];

const values: Feature[] = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We do the right thing, always.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best results come together.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We embrace new ideas to create better solutions.",
  },
  {
    icon: ClipboardCheck,
    title: "Accountability",
    description: "We own our actions and deliver on our promises.",
  },
  {
    icon: HandHeart,
    title: "Empathy",
    description: "We listen, understand and care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              About Us
            </span>
            <h1 className="relative mt-3 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              We are passionate about people &amp; their{" "}
              <span className="text-brand">potential.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
              We help businesses build high-performing teams through innovative
              HR solutions, strategic guidance and people-centric approaches.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/services">Our Services</Button>
              <Button href="/contact" variant="outline" icon={CalendarCheck}>
                Book a Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={images.heroSectionPhoto}
              alt="The Nexus HR team collaborating"
              className="h-auto w-full"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Image
              src={images.heroSectionPhoto}
              alt="Nexus HR consultants at work"
              className="h-auto w-full"
              placeholder="blur"
            />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Building Better Workplace
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Founded by HR professionals with decades of experience, Nexus HR
              was created to bring a people-centric approach to modern
              businesses. We combine strategy, technology, and human insight to
              deliver solutions that make a real impact.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              {storyFeatures.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex flex-col items-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-semibold text-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The Principles That Guide Us"
          />

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-sm shadow-navy/5">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's Build a Better Future For Your People"
        description="Partner with us to create a workplace where people thrive and businesses grow."
      />
    </>
  );
}
