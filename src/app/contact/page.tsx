import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez TUNITY Engineering pour discuter de vos projets d'ingénierie structurelle, de BIM, d'architecture, de développement web ou de transformation digitale.",
};

export default function ContactPage() {
  return <ContactContent />;
}
