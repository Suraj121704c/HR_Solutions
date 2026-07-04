import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";
import { images } from "@/utils/images";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clients Love Us"
          title="What Our Clients Say"
          description="Real stories from the businesses we've helped grow."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-7"
            >
              <Quote className="h-8 w-8 text-brand/30" strokeWidth={1.5} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <Image
                  src={images[t.avatar]}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                  placeholder="blur"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-navy">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
