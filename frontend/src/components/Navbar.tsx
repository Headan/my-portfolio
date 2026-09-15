"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { profil } from "@/data/portfolio";
import lddmLogo from "@/assets/images/LDDM_logo_white.svg";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const [isCompact, setIsCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevIsCompact, setPrevIsCompact] = useState(isCompact);
  const [suppressMenuAnim, setSuppressMenuAnim] = useState(false);

  // Le menu passe en burger une fois le bandeau de compétences (#skillstrip)
  // scrollé hors de l'écran — absent sur les pages qui n'ont pas ce bandeau.
  useEffect(() => {
    const target = document.getElementById("skillstrip");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setIsCompact(scrolledPast);
        if (!scrolledPast) setMenuOpen(false);
      },
      { threshold: 0 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Le passage en mode compact bascule .navbar-links vers son style "menu
  // déroulant" dans le même rendu ; sans ceci, la transition d'ouverture
  // s'applique aussi à ce changement et fait flasher le menu (ouverture/
  // fermeture) au moment du switch, avant même un clic sur le burger.
  // Le state est ajusté pendant le rendu (plutôt que dans un effet) pour que
  // la classe "no-anim" s'applique dès le même commit que isCompact.
  if (isCompact !== prevIsCompact) {
    setPrevIsCompact(isCompact);
    setSuppressMenuAnim(true);
  }

  useEffect(() => {
    if (!suppressMenuAnim) return;
    const raf = requestAnimationFrame(() => setSuppressMenuAnim(false));
    return () => cancelAnimationFrame(raf);
  }, [suppressMenuAnim]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${isCompact ? " is-compact" : ""}`}>
      <div className="navbar-inner">
        <Link className="navbar-brand" href="/" aria-label={profil.nom} onClick={closeMenu}>
          <img src={lddmLogo.src} alt={profil.initiales} />
        </Link>

        <button
          type="button"
          className={`navbar-burger${menuOpen ? " is-active" : ""}`}
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`navbar-links${menuOpen ? " is-open" : ""}${
            suppressMenuAnim ? " no-anim" : ""
          }`}
        >
          <li>
            <Link href="/" onClick={closeMenu}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              {t("contact")}
            </Link>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}
