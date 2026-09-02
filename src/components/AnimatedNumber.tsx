"use client";

import { useCountUp } from "@/lib/useCountUp";

export default function AnimatedNumber({
  value,
  duration = 1.6,
  className,
}: {
  value: string | number;
  duration?: number;
  className?: string;
}) {
  const stringValue = String(value);
  const match = stringValue.match(/\d+/);
  const target = match ? parseInt(match[0], 10) : 0;
  const prefix = match ? stringValue.slice(0, match.index) : "";
  const suffix = match ? stringValue.slice((match.index ?? 0) + match[0].length) : stringValue;

  const { ref, value: display } = useCountUp<HTMLSpanElement>(target, { duration, margin: "-80px" });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
