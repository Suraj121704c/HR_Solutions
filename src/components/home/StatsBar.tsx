import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section className="container-x -mt-4 pb-4">
      <div className="grid grid-cols-2 gap-y-10 rounded-2xl bg-navy px-6 py-10 text-white sm:px-10 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                i !== 0 ? "lg:border-l lg:border-brand-light" : ""
              }`}
            >
              {/* Reserve icon space so numbers stay aligned even when an icon is absent */}
              <div className="mb-3 flex h-9 items-center justify-center">
                {Icon && (
                  <Icon className="h-9 w-9 text-brand-light" strokeWidth={1.4} />
                )}
              </div>
              <span className="font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-slate-300 sm:text-sm">
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
