"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CLINIC_IMAGES } from "@/lib/data";

const INTERVAL_MS = 5000;

interface AboutImageCarouselProps {
  className?: string;
}

export default function AboutImageCarousel({
  className,
}: AboutImageCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % CLINIC_IMAGES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full max-w-[280px] sm:max-w-[300px] lg:max-w-none mx-auto lg:mx-0",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg border border-border/70 bg-clinic-warm shadow-sm shadow-clinic-navy/[0.06]">
        {CLINIC_IMAGES.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === active ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={index !== active}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 280px, 320px"
              priority={index === 0}
            />
          </div>
        ))}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {CLINIC_IMAGES.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActive(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                index === active
                  ? "w-5 bg-white"
                  : "w-2 bg-white/45 hover:bg-white/65"
              )}
            />
          ))}
        </div>
      </div>
      <p className="mt-3 text-center lg:text-left text-[11px] text-clinic-gray/80 font-light tracking-wide">
        Medicare, Howrah
      </p>
    </div>
  );
}
