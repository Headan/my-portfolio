import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profil } from "@/data/portfolio";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.page");
  return {
    title: t("title", { nom: profil.nom }),
    description: t("description"),
  };
}

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
