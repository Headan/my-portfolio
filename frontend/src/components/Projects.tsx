import { projets } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projets" className="section tinted">
      <div className="section-head">
        <div>
          <span className="eyebrow">Sélection</span>
          <h2>Projets</h2>
        </div>
      </div>
      <div className="projects">
        {projets.map((projet) => (
          <article key={projet.titre} className="card">
            <div className="card-top" />
            <div className="card-body">
              <span className="client">{projet.client}</span>
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
              <div className="tags">
                {projet.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
