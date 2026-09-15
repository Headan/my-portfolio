import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { getTranslations } from "next-intl/server";

import { contact, profil } from "@/data/portfolio";

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2>{t("footer.cta")}</h2>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            {t("contact.linkedin")} <HiOutlineArrowTopRightOnSquare aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {profil.nom} — {t("profil.role")}
      </div>
    </footer>
  );
}
