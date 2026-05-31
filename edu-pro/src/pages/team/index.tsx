import Layout from "@theme/Layout";
import TeamSection from "@site/src/components/TeamSection";
import styles from "./index.module.css";

export default function Team() {
  return (
    <Layout title="Team" description="Meet the EduPro development team.">
      <main className={styles.page}>
        <div className="container">
          <h1 className={styles.title}>Our Team</h1>
          <p className={styles.subtitle}>The people building EduPro at the University of Aveiro.</p>
          <TeamSection />
        </div>
      </main>
    </Layout>
  );
}
