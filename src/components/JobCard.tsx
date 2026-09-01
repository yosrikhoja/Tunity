"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Clock, MapPin } from "lucide-react";
import type { Job } from "@/data/jobs";
import { jobDepartmentLabels } from "@/data/jobs";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const { locale, dict } = useLanguage();
  const department = jobDepartmentLabels[job.departmentKey][locale];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col justify-between gap-6 rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:flex-row sm:items-center"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{department}</span>
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600">
            {job.level[locale]}
          </span>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
          {job.title[locale]}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-600">
          {job.summary[locale]}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-navy-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {job.location[locale]}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {job.type[locale]}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            {department}
          </span>
        </div>
      </div>

      <button className="btn-secondary shrink-0 group-hover:border-electric-400 group-hover:text-electric-600">
        {dict.common.applyNow}
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
