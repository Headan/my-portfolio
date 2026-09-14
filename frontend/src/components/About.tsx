import { apropos, contact } from "@/data/portfolio";

export function About() {
  return (
    <section id="a-propos" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">À propos</span>
          <h2>Le cycle produit, de bout en bout</h2>
        </div>
      </div>
      <div className="about">
        <div className="about-card">
          <div className="loc">{contact.ville}</div>
          <h3>Contact</h3>
          <div className="lines">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <br />
            <a href={`tel:${contact.telephone.replace(/\s/g, "")}`}>
              {contact.telephone}
            </a>
            <br />
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div>
          {apropos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
