/**
 * Brand social marks as inline SVG.
 * Lucide deprecated brand logos, so these are hand-rolled to match the footer UI.
 */

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-8h2.6l.4-3h-3V8.2c0-.9.3-1.5 1.6-1.5H16.6V4.1C16.3 4 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2H7.7v3h2.6v8h3.2Z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.5 4h2.8l-6.1 7 7.2 9.5h-5.6l-4.4-5.8L6 20.5H3.2l6.5-7.5L2.8 4h5.7l4 5.3L17.5 4Zm-1 14.8h1.6L8.1 5.6H6.4l10.1 13.2Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.28V21H3.3V8.9Zm5.34 0h3.14v1.65h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5v6.15h-3.28v-5.45c0-1.3-.02-2.97-1.8-2.97-1.82 0-2.1 1.42-2.1 2.88V21H8.64V8.9Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];
