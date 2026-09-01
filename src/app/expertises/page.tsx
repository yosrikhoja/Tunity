import type { Metadata } from "next";
import ExpertisesContent from "./ExpertisesContent";

export const metadata: Metadata = {
  title: "Expertises",
  description:
    "Découvrez les expertises de TUNITY Engineering : ingénierie structurelle, BIM, architecture, développement web, transformation digitale et gestion de projet.",
};

export default function ExpertisesPage() {
  return <ExpertisesContent />;
}
