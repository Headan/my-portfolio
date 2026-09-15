import { getTranslations } from "next-intl/server";
import { projets } from "@/data/portfolio";

export async function Projects() {
  const t = await getTranslations("projects");

  return (
    <section id="projets" className="section tinted">
      <div className="section-head">
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>
      </div>
      <div className="projects">
        {projets.map((projet) => (
          <article key={projet.id} className="card">
            <div className="card-top" />
            <div className="card-body">
              <span className="client">{t(`items.${projet.id}.client`)}</span>
              <h3>{t(`items.${projet.id}.titre`)}</h3>
              <p>{t(`items.${projet.id}.description`)}</p>
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
