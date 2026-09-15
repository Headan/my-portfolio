import { getTranslations } from "next-intl/server";
import { profil } from "@/data/portfolio";
import { Wave } from "./Wave";
import profilLucien from "@/assets/images/profil-lucien.png";

export async function Hero() {
  const t = await getTranslations();
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="role">
          {t("profil.role")} · {t("profil.experience")}
        </div>
        <div className="hero-avatar">
          <img src={profilLucien.src} alt={profil.nom} />
        </div>
        <h1>{profil.nom}</h1>
        <p className="lede">{t("profil.accroche")}</p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projets">
            {t("hero.ctaProjects")}
          </a>
        </div>
      </div>
      <Wave />
    </header>
  );
}
