import { competences } from "@/data/portfolio";

export function SkillStrip() {
  return (
    <div className="skillstrip">
      <div className="skillstrip-track">
        {competences.map((c) => (
          <span key={c} className="tag">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
