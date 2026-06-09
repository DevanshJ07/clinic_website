import BookAppointmentDialog from "@/components/facilities/BookAppointmentDialog";
import { cn } from "@/lib/utils";

interface DiagnosticServiceCardProps {
  name: string;
  bookingName?: string;
  description?: string;
  machine?: string;
  price: string;
  services?: string[];
  compact?: boolean;
  className?: string;
}

export default function DiagnosticServiceCard({
  name,
  bookingName,
  description,
  machine,
  price,
  services,
  compact = false,
  className,
}: DiagnosticServiceCardProps) {
  const isFixedPrice = price.startsWith("₹");

  return (
    <article
      className={cn(
        "flex flex-col rounded-sm border border-border/60 bg-white/70 backdrop-blur-[2px] shadow-sm shadow-clinic-navy/[0.02] h-full",
        compact ? "p-3 gap-2" : "p-4 gap-3",
        className
      )}
    >
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <h3
          className={cn(
            "font-display font-medium text-clinic-navy leading-snug",
            compact ? "text-[14px]" : "text-[15px]"
          )}
        >
          {name}
        </h3>

        {description && (
          <p className="text-[12px] text-clinic-gray font-light leading-relaxed">
            {description}
          </p>
        )}

        {services && services.length > 0 && (
          <p className="text-[12px] text-clinic-gray font-light leading-relaxed">
            {services.join(" · ")}
          </p>
        )}

        {machine && (
          <p className="text-[11px] text-clinic-gray/85 font-light">
            <span className="uppercase tracking-[0.1em] text-[10px] text-clinic-gray">
              Equipment ·{" "}
            </span>
            {machine}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/40">
        {isFixedPrice ? (
          <span className="font-display text-base font-medium text-clinic-navy tabular-nums">
            {price}
          </span>
        ) : (
          <span className="text-[11px] text-clinic-gray font-light italic leading-snug max-w-[55%]">
            {price}
          </span>
        )}
        <BookAppointmentDialog
          serviceName={bookingName ?? name}
          className="text-[11px] px-2.5 py-1.5 shrink-0"
        />
      </div>
    </article>
  );
}
