"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type MarginValue = `${number}px`;

export function useCountUp<T extends Element = HTMLElement>(
  target: number,
  { duration = 1.6, margin = "-60px" }: { duration?: number; margin?: MarginValue } = {}
) {
  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once: true, margin });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return { ref, value } as const;
}
