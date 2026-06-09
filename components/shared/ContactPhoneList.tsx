import { cn } from "@/lib/utils";
import { CONTACT_LINES } from "@/lib/data";

interface ContactPhoneListProps {
  className?: string;
  itemClassName?: string;
  showDetail?: boolean;
  linkClassName?: string;
}

export default function ContactPhoneList({
  className,
  itemClassName,
  showDetail = true,
  linkClassName,
}: ContactPhoneListProps) {
  return (
    <dl className={cn("divide-y divide-border/80", className)}>
      {CONTACT_LINES.map((line) => (
        <div key={line.id} className={cn("py-5 first:pt-0 last:pb-0", itemClassName)}>
          <dt className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-1.5">
            {line.label}
          </dt>
          <dd>
            <a
              href={`tel:${line.tel}`}
              className={cn("contact-phone-link", linkClassName)}
            >
              {line.phone}
            </a>
          </dd>
          {showDetail && line.detail && (
            <dd className="text-[13px] text-clinic-gray font-light mt-1">
              {line.detail}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
