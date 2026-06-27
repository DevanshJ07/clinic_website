import BookAppointmentDialog from "@/components/facilities/BookAppointmentDialog";

interface BloodTestRatesPanelProps {
  tests: { name: string; price: string }[];
  extendedNote: string;
}

export default function BloodTestRatesPanel({
  tests,
  extendedNote,
}: BloodTestRatesPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-sm border border-border/60 overflow-hidden bg-white/60">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 px-3 py-2 bg-clinic-blue-50/80 border-b border-border/60 text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray">
          <span>Test</span>
          <span className="text-right w-14">Rate</span>
          <span className="whitespace-nowrap pl-1">Book Appointment</span>
        </div>
        <ul className="divide-y divide-border/50">
          {tests.map((test) => (
            <li
              key={test.name}
              className="grid grid-cols-[1fr_auto_auto] gap-x-3 items-center px-3 py-2.5 hover:bg-clinic-warm/30 transition-colors"
            >
              <span className="text-[13px] text-clinic-navy font-light min-w-0 truncate pr-2">
                {test.name}
              </span>
              <span className="font-display text-[15px] font-medium text-clinic-navy text-right w-14 tabular-nums shrink-0">
                {test.price}
              </span>
              <div className="shrink-0 flex justify-end">
                <BookAppointmentDialog
                  serviceName={test.name}
                  triggerLabel="Book Appointment"
                  className="btn-book-appointment-sm w-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[13px] text-clinic-gray font-light leading-relaxed border-l-2 border-clinic-navy/15 pl-4">
        {extendedNote}
      </p>
    </div>
  );
}
