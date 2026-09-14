import { apropos } from "@/data/portfolio";

export function About() {
  return (
    <section id="a-propos" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">À propos</span>
          <h2>À propos de moi</h2>
        </div>
      </div>
      <div className="about">
        <div>
          {apropos.map((paragraphe) => (
            <p key={paragraphe}>{paragraphe}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
