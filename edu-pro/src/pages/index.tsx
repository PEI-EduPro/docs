import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import TeamSection from "@site/src/components/TeamSection";
import MilestonesHighlight from "@site/src/components/MilestonesHighlight";
import styles from "./index.module.css";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          Academic Project · University of Aveiro
        </div>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="docs/documentation/documention"
          >
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="docs/milestones/milestone1"
          >
            View Milestones
          </Link>
        </div>
      </div>
      <div className={styles.heroGlow} aria-hidden />
    </header>
  );
}

function QuickLinks() {
  const links = [
    {
      label: "Documentation",
      desc: "System architecture and technical specs",
      to: "docs/documentation/documention",
    },
    {
      label: "Milestones",
      desc: "Project phases from inception to demo",
      to: "docs/milestones/milestone1",
    },
    {
      label: "Calendar",
      desc: "Project schedule and key dates",
      to: "docs/calendar/calendario",
    },
    {
      label: "Minutes",
      desc: "Meeting notes and decisions",
      to: "docs/minutes/minute1",
    },
  ];
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Quick Access</h2>
        <div className={styles.cardGrid}>
          {links.map((l) => (
            <Link key={l.label} to={l.to} className={styles.card}>
              <strong className={styles.cardLabel}>{l.label}</strong>
              <span className={styles.cardDesc}>{l.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="EduPro — Management and evaluation system for curriculum units documentation portal.">
      <Hero />
      <QuickLinks />
      <section className={styles.featuresSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Core Features</h2>
          <HomepageFeatures />
        </div>
      </section>
      <MilestonesHighlight />
      <section className={styles.teamSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <TeamSection />
        </div>
      </section>
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Ready to explore?</h2>
          <p>Dive into the full documentation or check the latest milestone.</p>
          <div className={styles.heroButtons}>
            <Link
              className="button button--primary button--lg"
              to="docs/documentation/documention"
            >
              Read the Docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="docs/milestones/milestone8"
            >
              Latest Milestone
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
