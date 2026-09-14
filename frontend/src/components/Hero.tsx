import { profil, contact } from "@/data/portfolio";
import { Wave } from "./Wave";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="role">
          {profil.role} · {profil.experience}
        </div>
        <h1>{profil.titreAccroche}</h1>
        <p className="lede">{profil.accroche}</p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projets">
            Voir mes projets
          </a>
          <a className="btn ghost" href={contact.cv} download>
            Télécharger mon CV
          </a>
        </div>
      </div>
      <Wave />
    </header>
  );
}
