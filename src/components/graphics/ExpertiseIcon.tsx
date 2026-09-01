import { Building2, Boxes, Compass, Code2, Cpu, Ruler, type LucideIcon } from "lucide-react";
import type { ExpertiseIconKey } from "@/data/expertises";

const iconMap: Record<ExpertiseIconKey, LucideIcon> = {
  structural: Ruler,
  bim: Boxes,
  architecture: Compass,
  web: Code2,
  digital: Cpu,
  "project-management": Building2,
};

export default function ExpertiseIcon({
  icon,
  className,
}: {
  icon: ExpertiseIconKey;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={2} />;
}
