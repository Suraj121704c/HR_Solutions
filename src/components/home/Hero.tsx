import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/utils/images";

// Fills the gutter between the viewport edge and the 1200px container.
const RIGHT_STRIP_WIDTH = "max(1.25rem, calc((100vw - 1200px) / 2))";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Right decorative grey strip — bleeds off the right edge at heading height (Figma) */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-[11rem] hidden h-11 -translate-y-1/2 bg-[#d9d9d9] lg:block"
        style={{ width: RIGHT_STRIP_WIDTH }}
      />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        {/* Copy */}
        <div>
          <h1 className="relative font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {/* Left grey strip — right edge touches the heading, bleeds off the left edge (Figma) */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-full top-1/2 hidden h-11 w-screen -translate-y-1/2 bg-[#d9d9d9] lg:block"
            />
            Empowering People
            <br />
            Driving Success.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500">
            We help businesses build high-performing teams through innovative HR
            solutions, strategic guidance and people-centric approaches.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/services">Our Services</Button>
            <Button href="/contact" variant="outline" icon={CalendarCheck}>
              Book a Consultation
            </Button>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex items-center gap-4">
            <Image
              src={images.groupPhoto}
              alt="Team members we work with"
              className="h-11 w-auto"
              placeholder="blur"
            />
            <p className="text-sm text-slate-500">
              Trusted by <span className="font-semibold text-brand">100+</span>{" "}
              Companies
            </p>
          </div>
        </div>

        {/* Visual — the asset already includes the leaf shape, green circle and
            transparent background, so it's rendered as-is (no mask/blob/shadow). */}
        <div className="relative">
          <Image
            src={images.heroSectionPhoto}
            alt="HR consultants collaborating with a business team"
            className="h-auto w-full"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </section>
  );
}
