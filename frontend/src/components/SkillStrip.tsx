import { competences } from "@/data/portfolio";

export function SkillStrip() {
  return (
    <div id="skillstrip" className="skillstrip">
      <div className="skillstrip-track">
        {competences.map((competence) => (
          <span key={competence} className="tag">
            {competence}
          </span>
        ))}
      </div>
    </div>
  );
}
