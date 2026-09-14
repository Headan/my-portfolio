/** Motif de vague repris du CV — sépare le hero navy du corps cream. */
export function Wave({ fill = "#f7f4ee" }: { fill?: string }) {
  return (
    <div className="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
        <path
          d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,56 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
