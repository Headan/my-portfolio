import { contact, profil } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <h2>Discutons de votre prochain projet.</h2>
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={`tel:${contact.telephone.replace(/\s/g, "")}`}>
            {contact.telephone}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {profil.nom} — {profil.role}
      </div>
    </footer>
  );
}
