import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="container-x py-16">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 sm:px-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand/20 blur-2xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to Elevate Your HR Strategy?
            </h2>
            <p className="mt-2 text-slate-300">
              Let&apos;s build a stronger workforce together.
            </p>
          </div>
          <Button href="/contact" variant="green" icon={CalendarCheck}>
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
