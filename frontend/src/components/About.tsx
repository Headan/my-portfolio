import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");
  const paragraphes = t.raw("paragraphs") as string[];

  return (
    <section id="a-propos" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("title")}</h2>
        </div>
      </div>
      <div className="about">
        <div>
          {paragraphes.map((paragraphe) => (
            <p key={paragraphe}>{paragraphe}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
