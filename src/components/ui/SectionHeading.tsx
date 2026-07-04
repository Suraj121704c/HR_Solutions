type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-500">{description}</p>
      )}
    </div>
  );
}
