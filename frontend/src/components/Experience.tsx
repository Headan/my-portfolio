"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const t = useTranslations("experience");
  // Toujours la première expérience sélectionnée au chargement de la page.
  const [selected, setSelected] = useState(0);
  const active = experiences[selected];
  const frameRef = useRef<HTMLDivElement>(null);

  const selectExperience = (index: number) => {
    setSelected(index);
    // Sur desktop, timeline et media sont côte à côte (voir la media query
    // 820px dans globals.css) donc le scroll n'a pas lieu d'être : il ne sert
    // qu'en mobile, où la media passe au-dessus de la timeline sélectionnée.
    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    if (isMobile) {
      frameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="experience" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>
      </div>

      <div className="xp-grid">
        <div className="timeline">
          {experiences.map((experience, index) => {
            const isSelected = index === selected;
            return (
              <div
                key={experience.id}
                className={`tl-item${isSelected ? " is-selected" : ""}`}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => selectExperience(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectExperience(index);
                  }
                }}
              >
                <div className="dates">{t(`items.${experience.id}.dates`)}</div>
                <h3>{t(`items.${experience.id}.poste`)}</h3>
                <div className="org">{t(`items.${experience.id}.organisation`)}</div>
                <p>{t(`items.${experience.id}.description`)}</p>
              </div>
            );
          })}
        </div>

        <div className="xp-media">
          <figure className="xp-frame">
            {active ? (
              <>
                <img
                  key={active.image.src}
                  src={active.image.src}
                  alt={t(`items.${active.id}.poste`)}
                />
                {active.link && (
                  <div className="xp-overlay">
                    <a
                      className="btn primary"
                      href={active.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("viewProject")}
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="xp-frame-placeholder">{t("imagePlaceholder")}</div>
            )}
          </figure>

          {active && active.stack.length > 0 && (
            <div className="xp-stack" ref={frameRef}>
              {active.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {active && (
            <div className="xp-missions">
              <h4>{t("missionsTitle")}</h4>
              <ul>
                {(t.raw(`items.${active.id}.missions`) as string[]).map((mission) => (
                  <li key={mission}>{mission}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
