import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Parcourez le portfolio de projets de TUNITY Engineering en ingénierie structurelle, coordination BIM, architecture, développement web et transformation digitale.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
