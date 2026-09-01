"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategoryKeys, projectCategoryLabels, type ProjectCategoryKey } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type FilterKey = "all" | ProjectCategoryKey;

export default function ProjectsGrid() {
  const { locale, dict } = useLanguage();
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.categoryKey === active);

  const filters: FilterKey[] = ["all", ...projectCategoryKeys];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((key) => {
          const label = key === "all" ? dict.projectsPage.filterAll : projectCategoryLabels[key][locale];
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

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-navy-500">{dict.projectsPage.noResults}</p>
      )}
    </div>
  );
}
