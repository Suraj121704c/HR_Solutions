import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Expertise Across Industries"
          description="We bring deep, sector-specific knowledge to every partnership we build."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm shadow-navy/5 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand/20 text-brand">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-navy">
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
