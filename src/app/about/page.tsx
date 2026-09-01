import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez TUNITY Engineering — une entreprise pluridisciplinaire alliant ingénierie structurelle, BIM, architecture, développement web et transformation numérique.",
};

export default function AboutPage() {
  return <AboutContent />;
}
