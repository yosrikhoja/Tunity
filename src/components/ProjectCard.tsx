"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectCategoryLabels } from "@/data/projects";
import TechPattern from "@/components/graphics/TechPattern";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const { locale, dict } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <TechPattern pattern={project.pattern} />
        </div>
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 backdrop-blur">
            {projectCategoryLabels[project.categoryKey][locale]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-navy-400">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {project.location[locale]}
          </span>
          <span>{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold text-navy-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">{project.summary[locale]}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags[locale].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 border-t border-navy-100 pt-4 text-sm font-semibold text-electric-600">
          {dict.common.viewCaseStudy}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </motion.article>
  );
}
