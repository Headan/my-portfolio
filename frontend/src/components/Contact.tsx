import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import { contact } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-head">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Me contacter</h2>
        </div>
      </div>
      <div className="contact-card">
        <p className="lede">
          Une question, une opportunité ou un projet à discuter ?
          N&apos;hésitez pas à me contacter directement.
        </p>
        <div className="contact-links">
          <a className="btn primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="btn ghost"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <HiOutlineArrowTopRightOnSquare aria-hidden="true" />
          </a>
        </div>
        <div className="contact-loc">{contact.ville}</div>
      </div>
    </section>
  );
}
