"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "@/components/JobCard";
import { jobs, jobDepartmentLabels, type JobDepartmentKey } from "@/data/jobs";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FilterKey = "all" | JobDepartmentKey;

export default function JobsList() {
  const { locale, dict } = useLanguage();
  const departmentKeys = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.departmentKey))),
    []
  );
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = active === "all" ? jobs : jobs.filter((j) => j.departmentKey === active);
  const filters: FilterKey[] = ["all", ...departmentKeys];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((key) => {
          const label = key === "all" ? dict.jobsPage.filterAll : jobDepartmentLabels[key][locale];
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                active === key
                  ? "border-electric-500 bg-electric-500 text-white"
                  : "border-navy-100 bg-white text-navy-600 hover:border-electric-300 hover:text-electric-600"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 space-y-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((job, i) => (
            <motion.div
              key={job.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <JobCard job={job} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-navy-500">{dict.jobsPage.noResults}</p>
      )}
    </div>
  );
}
