import type { Metadata } from "next";
import JobsContent from "./JobsContent";

export const metadata: Metadata = {
  title: "Postes ouverts",
  description:
    "Découvrez les postes ouverts chez TUNITY Engineering en ingénierie structurelle, BIM, architecture, développement web et transformation digitale.",
};

export default function JobsPage() {
  return <JobsContent />;
}
