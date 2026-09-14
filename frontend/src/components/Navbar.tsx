import { profil } from "@/data/portfolio";
import lddmLogo from "@/assets/images/LDDM_logo_white.svg";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a className="navbar-brand" href="#" aria-label={profil.nom}>
          <img src={lddmLogo.src} alt={profil.initiales} />
        </a>
        <ul className="navbar-links">
          <li>
            <button type="button">Mes projets</button>
          </li>
          <li>
            <button type="button">Me contacter</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
