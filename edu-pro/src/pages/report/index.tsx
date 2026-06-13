import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Report() {
  return (
    <Layout title="Poster" description="EduPro Project Report.">
      <main className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Project Report</h1>
          <a
            href="/docs/poster/EduPro-poster-2.pdf" //Change here to real path
            target="_blank"
            rel="noopener noreferrer"
            className={`button button--primary ${styles.downloadBtn}`}
          >
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
