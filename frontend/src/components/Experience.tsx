"use client";

import { useRef, useState } from "react";
import { experiences } from "@/data/portfolio";

export function Experience() {
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
          <span className="eyebrow">Parcours</span>
          <h2>Expérience</h2>
        </div>
      </div>

      <div className="xp-grid">
        <div className="timeline">
          {experiences.map((experience, index) => {
            const isSelected = index === selected;
            return (
              <div
                key={experience.dates}
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
                <div className="dates">{experience.dates}</div>
                <h3>{experience.poste}</h3>
                <div className="org">{experience.organisation}</div>
                <p>{experience.description}</p>
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
                  alt={active.poste}
                />
                {active.link && (
                  <div className="xp-overlay">
                    <a
                      className="btn primary"
                      href={active.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le projet
                    </a>
                  </div>
                )}
              </>
            ) : (
              <div className="xp-frame-placeholder">Image à venir</div>
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

          {active && active.missions && active.missions.length > 0 && (
            <div className="xp-missions">
              <h4>Missions</h4>
              <ul>
                {active.missions.map((mission) => (
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
