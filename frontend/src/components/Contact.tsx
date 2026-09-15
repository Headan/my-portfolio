import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { getTranslations } from "next-intl/server";

import { contact } from "@/data/portfolio";

export async function Contact() {
  const t = await getTranslations("contact");

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>
      </div>
      <div className="contact-card">
        <p className="lede">{t("lede")}</p>
        <div className="contact-links">
          <a className="btn primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="btn ghost"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {t("linkedin")} <HiOutlineArrowTopRightOnSquare aria-hidden="true" />
          </a>
        </div>
        <div className="contact-loc">{contact.ville}</div>
      </div>
    </section>
  );
}
