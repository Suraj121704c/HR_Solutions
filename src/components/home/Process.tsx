import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Our Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Proven Approach to HR Excellence
            </h2>
          </div>
          <div className="lg:pl-10">
            <p className="text-base leading-relaxed text-slate-500">
              Our structured process ensures measurable outcomes and long-term
              success — turning people strategy into real business results.
            </p>
            <div className="mt-5">
              <Button href="/about" variant="outline" size="sm" icon={ArrowRight}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="font-display text-4xl font-bold text-slate-100">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
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
  );
}
