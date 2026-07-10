import { cn } from "@/lib/utils";

interface FacilityContentLayoutProps {
  children: React.ReactNode;
  media?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  mediaClassName?: string;
  mediaFirstOnMobile?: boolean;
}

export default function FacilityContentLayout({
  children,
  media,
  className,
  contentClassName,
  mediaClassName,
  mediaFirstOnMobile = true,
}: FacilityContentLayoutProps) {
  if (!media) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn(
        "grid items-start gap-6 lg:grid-cols-[1fr_minmax(280px,320px)] lg:gap-8",
        className
      )}
    >
      <div
        className={cn(
          "min-w-0 lg:order-1",
          mediaFirstOnMobile ? "order-2" : "order-1",
          contentClassName
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "w-full lg:order-2 lg:max-w-[320px] lg:justify-self-end",
          mediaFirstOnMobile ? "order-1" : "order-2",
          mediaClassName
        )}
      >
        {media}
      </div>
    </div>
  );
}
