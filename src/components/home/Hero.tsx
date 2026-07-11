import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/utils/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="relative font-heading text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
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
