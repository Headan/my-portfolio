"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";

export function Experience() {
  // Toujours la première expérience sélectionnée au chargement de la page.
  const [selected, setSelected] = useState(0);
  const active = experiences[selected];

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
          {experiences.map((xp, i) => {
            const isSelected = i === selected;
            return (
              <div
                key={xp.dates}
                className={`tl-item${isSelected ? " is-selected" : ""}`}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(i);
                  }
                }}
              >
                <div className="dates">{xp.dates}</div>
                <h3>{xp.poste}</h3>
                <div className="org">{xp.organisation}</div>
                <p>{xp.description}</p>
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
        </div>
      </div>
    </section>
  );
}
