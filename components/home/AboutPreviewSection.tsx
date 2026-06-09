import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_ABOUT } from "@/lib/data";

export default function AboutPreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 border-b border-border/80 bg-home-about bg-institutional-pattern-soft">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <p className="eyebrow mb-4">About Medicare</p>
              <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy leading-[1.2]">
                {HOME_ABOUT.title}
              </h2>
            </div>

            <div className="relative aspect-[5/3] max-w-md overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
              <Image
                src="/clinic/lab-samples.png"
                alt="Medicare NABL-accredited pathology laboratory"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 28vw"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-[15px] md:text-[16px] text-clinic-gray font-light leading-[1.8]">
              {HOME_ABOUT.body}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-clinic-navy hover:text-clinic-blue transition-colors group w-fit"
            >
              Read more about us
              <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
