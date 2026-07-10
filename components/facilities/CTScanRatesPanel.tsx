import BookAppointmentDialog from "@/components/facilities/BookAppointmentDialog";

interface RateRow {
  name: string;
  price: string;
}

interface CTScanRatesPanelProps {
  scanRates: RateRow[];
  contrastCharges: RateRow[];
}

function RateTable({
  title,
  rows,
  bookingPrefix,
}: {
  title: string;
  rows: RateRow[];
  bookingPrefix: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-display text-[1rem] font-semibold text-clinic-navy">
        {title}
      </h4>
      <div className="overflow-hidden rounded-sm border border-border/60 bg-white/60">
        <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] gap-x-3 gap-y-0 px-3 py-2 bg-clinic-blue-50/80 border-b border-border/60 text-label">
          <span>Scan / charge</span>
          <span className="text-right sm:w-16">Rate</span>
          <span className="hidden sm:block whitespace-nowrap pl-1">
            Book Appointment
          </span>
        </div>
        <ul className="divide-y divide-border/50">
          {rows.map((row) => (
            <li
              key={row.name}
              className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto] gap-x-3 gap-y-2 items-center px-3 py-2.5 hover:bg-clinic-warm/30 transition-colors"
            >
              <span className="text-[13px] font-normal text-clinic-navy min-w-0 pr-2 leading-snug">
                {row.name}
              </span>
              <span className="font-display text-[15px] font-medium text-clinic-navy text-right sm:w-16 tabular-nums shrink-0">
                {row.price}
              </span>
              <div className="col-span-2 sm:col-span-1 sm:col-start-3 shrink-0 flex justify-stretch sm:justify-end">
                <BookAppointmentDialog
                  serviceName={`${bookingPrefix}: ${row.name}`}
                  triggerLabel="Book Appointment"
                  className="btn-book-appointment-sm w-full sm:w-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CTScanRatesPanel({
  scanRates,
  contrastCharges,
}: CTScanRatesPanelProps) {
  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <RateTable
        title="CT Scan Rates"
        rows={scanRates}
        bookingPrefix="CT Scan"
      />
      <RateTable
        title="Contrast Charges"
        rows={contrastCharges}
        bookingPrefix="CT Scan contrast"
      />
    </div>
  );
}
