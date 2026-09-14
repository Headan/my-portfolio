import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profil } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Contact — ${profil.nom}`,
  description: "Me contacter par email, téléphone ou LinkedIn.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
