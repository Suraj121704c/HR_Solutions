"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CalendarCheck, Users } from "lucide-react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      {/* Decorative grey strips in the header gutters (Figma) */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 hidden h-9 -translate-y-1/2 bg-[#d9d9d9] lg:block"
        style={{ width: "max(1.25rem, calc((100vw - 1200px) / 2))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden h-9 -translate-y-1/2 bg-[#d9d9d9] lg:block"
        style={{ width: "max(1.25rem, calc((100vw - 1200px) / 2 + 7rem))" }}
      />
      <nav className="container-x relative z-10 flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
            <Users className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Nexus<span className="text-brand">HR</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-navy"
                    : "text-slate-500 hover:text-navy"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" icon={CalendarCheck} size="sm">
            Book a Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive(link.href)
                      ? "bg-brand-soft text-navy"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-3">
              <Button
                href="/contact"
                icon={CalendarCheck}
                size="sm"
                className="w-full"
              >
                Book a Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
