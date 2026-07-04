import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to Elevate Your HR Strategy?",
  description = "Let's build a stronger workforce together.",
}: CtaBannerProps) {
  return (
    <section className="container-x py-16">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 sm:px-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand/20 blur-2xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-slate-300">{description}</p>
          </div>
          <Button href="/contact" variant="green" icon={CalendarCheck}>
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
