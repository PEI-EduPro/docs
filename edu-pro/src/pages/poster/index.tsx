import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Poster() {
  return (
    <Layout title="Poster" description="EduPro project poster.">
      <main className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project Poster</h1>
          <a href="/docs/poster/EduPro-poster-2.pdf" target="_blank" rel="noopener noreferrer" className={`button button--primary ${styles.downloadBtn}`}>
            Download PDF
          </a>
        </div>
        <iframe
          src="/docs/poster/EduPro-poster-2.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className={styles.viewer}
          title="EduPro Poster"
        />
      </main>
    </Layout>
  );
}
