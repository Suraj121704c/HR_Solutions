import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/5" />
      <div className="container-x relative">
        <nav className="flex items-center gap-1.5 text-sm text-slate-300">
          <Link href="/" className="hover:text-brand-light">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{eyebrow}</span>
        </nav>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}
