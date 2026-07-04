import Link from "next/link";
import { Users, MapPin, Mail, Clock } from "lucide-react";
import { footerServices, quickLinks } from "@/lib/content";
import { socials } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                <Users className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Nexus<span className="text-brand-light">HR</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              We are a leading HR consultancy helping businesses unlock the power
              of their people.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              We&apos;re Open
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <span>Monday – Saturday, 09:00 – 18:00</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <span>
                  Business District, Ajman Free Zone
                  <br />
                  Office C1, N&deg; DF6008
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                <a
                  href="mailto:contact@nexushr.com"
                  className="transition-colors hover:text-brand-light"
                >
                  contact@nexushr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          &copy; {2026} Nexus HR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
