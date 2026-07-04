import { Button } from "@/components/ui/Button";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left — heading block */}
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Our Process
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold leading-[1.1] text-navy sm:text-5xl">
            Proven Approach to HR Excellence
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
            Our structured process ensures measurable outcomes and long-term
            success — turning people strategy into real business results.
          </p>
          <div className="mt-7">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Right — steps */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {process.map(({ icon: Icon, number, title, description }) => (
              <div key={number} className="flex flex-col items-start text-left">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="mt-4 font-display text-lg font-bold text-brand">
                  {number}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
