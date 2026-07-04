import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type Variant = "primary" | "outline" | "green" | "light";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium font-display transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-600",
  green: "bg-brand text-white hover:bg-brand-dark",
  outline:
    "border border-slate-300 text-navy bg-white hover:border-navy hover:text-navy",
  light: "bg-white text-navy hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-2.5",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && <Icon className="h-4 w-4" strokeWidth={2} />}
      {children}
    </Link>
  );
}
