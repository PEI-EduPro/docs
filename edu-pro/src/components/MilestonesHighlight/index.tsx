import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const milestones = [
  { id: "milestone1", label: "M1", title: "Inception", desc: "Project vision, stakeholders, and initial requirements." },
  { id: "milestone2", label: "M2", title: "Elaboration", desc: "Architecture, risk analysis, and refined use cases." },
  { id: "milestone3", label: "M3", title: "Construction", desc: "Core system implementation and integration." },
  { id: "milestone4", label: "M4", title: "Transition", desc: "Testing, deployment, and user acceptance." },
  { id: "milestone5", label: "M5", title: "Prototype", desc: "Interactive prototype and usability evaluation." },
  { id: "milestone6", label: "M6", title: "Legal Requirements", desc: "GDPR compliance and legal framework analysis." },
  { id: "milestone7", label: "M7", title: "System Validation", desc: "Component validation and performance testing." },
  { id: "milestone8", label: "M8", title: "Demo & Poster", desc: "Final demonstration, poster, and project video." },
];

export default function MilestonesHighlight() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Project Milestones</h2>
        <div className={styles.grid}>
          {milestones.map((m) => (
            <Link key={m.id} to={`docs/milestones/${m.id}`} className={styles.card}>
              <span className={styles.badge}>{m.label}</span>
              <strong className={styles.cardTitle}>{m.title}</strong>
              <span className={styles.cardDesc}>{m.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
