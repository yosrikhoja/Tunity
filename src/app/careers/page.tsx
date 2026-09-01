import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez TUNITY Engineering — construisez votre carrière en ingénierie structurelle, BIM, architecture, développement web et transformation digitale.",
};

export default function CareersPage() {
  return <CareersContent />;
}
