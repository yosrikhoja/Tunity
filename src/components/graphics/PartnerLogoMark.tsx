import Image from "next/image";
import { LineChart } from "lucide-react";
import type { BusinessPartnerLogo } from "@/data/businessPartners";

export default function PartnerLogoMark({ logo }: { logo: BusinessPartnerLogo }) {
  switch (logo) {
    case "sms":
      return (
        <div className="inline-flex items-center rounded-lg bg-navy-900 px-3 py-2">
          <Image
            src="/logo-smsprotech-cropped.png"
            alt="SMS Protech"
            width={1018}
            height={399}
            className="h-8 w-auto"
          />
        </div>
      );
    case "mcd":
      return (
        <Image
          src="/logo-mcdbat-B7LruYVK.png"
          alt="MCD BAT"
          width={1199}
          height={380}
          unoptimized
          className="h-8 w-auto"
        />
      );
    case "cabe":
      return (
        <div className="inline-flex items-center rounded-lg bg-navy-900 px-3 py-2.5">
          <Image
            src="/cabeStructureLogo.png"
            alt="CABE Structure"
            width={1024}
            height={465}
            className="h-8 w-auto"
          />
        </div>
      );
    case "camag":
    default:
      return (
        <div className="flex items-center gap-2">
          <LineChart className="h-7 w-7 text-navy-700" strokeWidth={2.25} />
          <div className="leading-none">
            <p className="font-display text-lg font-extrabold tracking-tight text-navy-900">
              CAMAG
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-navy-500">
              Conseil
            </p>
          </div>
        </div>
      );
  }
}
