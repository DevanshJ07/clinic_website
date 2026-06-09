import { STATS } from "@/lib/data";

export default function LegacyStatsSection() {
  return (
    <section className="bg-clinic-warm border-b border-border">
      <div className="container-wide section-py-sm">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-md">
            <p className="eyebrow mb-4">Our Record</p>
            <h2 className="font-display text-[1.75rem] md:text-[2rem] font-medium text-clinic-navy leading-tight">
              Numbers that reflect generations of trust
            </h2>
          </div>
          <p className="text-[15px] text-clinic-gray font-light leading-relaxed max-w-sm md:text-right">
            For over three decades, families and referring physicians across
            Howrah have depended on Medicare for consistent, dependable care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-background flex flex-col gap-3 p-8 md:p-10"
            >
              <p
                className="font-display text-[2.75rem] md:text-[3.25rem] font-medium leading-none tracking-[-0.03em] text-clinic-navy"
              >
                {stat.value}
              </p>
              <div>
                <p className="text-[15px] font-medium text-clinic-navy leading-snug">
                  {stat.label}
                </p>
                <p className="text-[13px] text-clinic-gray font-light mt-1">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
