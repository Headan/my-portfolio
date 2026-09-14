import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">Parcours</span>
          <h2>Expérience</h2>
        </div>
      </div>
      <div className="timeline">
        {experiences.map((xp) => (
          <div key={xp.dates} className="tl-item">
            <div className="dates">{xp.dates}</div>
            <h3>{xp.poste}</h3>
            <div className="org">{xp.organisation}</div>
            <p>{xp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
