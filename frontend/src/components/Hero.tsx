import { profil, contact } from "@/data/portfolio";
import { Wave } from "./Wave";
import profilLucien from "@/assets/images/profil-lucien.png";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="role">
          {profil.role} · {profil.experience}
        </div>
        <div className="hero-avatar">
          <img src={profilLucien.src} alt={profil.nom} />
        </div>
        <h1>{profil.nom}</h1>
        <p className="lede">{profil.accroche}</p>
        <div className="hero-ctas">
          <a className="btn primary" href="#projets">
            Voir mes projets
          </a>
        </div>
      </div>
      <Wave />
    </header>
  );
}
