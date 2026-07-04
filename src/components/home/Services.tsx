import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive HR Solutions"
          description="From strategy to execution, we provide end-to-end HR solutions tailored to your business needs."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-navy/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
