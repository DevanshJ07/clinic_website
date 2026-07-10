import { Building2, Landmark, Shield } from "lucide-react";
import { type EmpanelmentCategory } from "@/lib/insurance";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS = {
  "government-insurers": Building2,
  tpas: Shield,
  "private-insurers": Landmark,
} as const;

interface InsurancePartnerCategoryProps {
  category: EmpanelmentCategory;
  className?: string;
}

export default function InsurancePartnerCategory({
  category,
  className,
}: InsurancePartnerCategoryProps) {
  const Icon =
    CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS] ?? Shield;

  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Icon className="h-4 w-4 shrink-0 stroke-[1.5] text-clinic-navy/70" />
          <h3 className="font-display text-[1.125rem] font-semibold text-clinic-navy md:text-[1.25rem]">
            {category.title}
          </h3>
        </div>
        {category.supportingLine && (
          <p className="max-w-3xl text-[13px] font-normal leading-relaxed text-clinic-navy/75">
            {category.supportingLine}
          </p>
        )}
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {category.partners.map((partner) => (
          <li
            key={partner}
            className="flex min-h-[3.25rem] items-center rounded-sm border border-border/50 bg-white/70 px-3.5 py-2.5 text-[13px] font-normal leading-snug text-clinic-navy transition-colors hover:border-border/80 hover:bg-white"
          >
            {partner}
          </li>
        ))}
      </ul>
    </section>
  );
}
