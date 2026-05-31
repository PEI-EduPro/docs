import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  SvgDark: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Course Management",
    Svg: require("@site/static/img/management-B.svg").default,
    SvgDark: require("@site/static/img/management-W.svg").default,
    description: "Organize academic courses effortlessly. Manage units and instructors through a unified, intuitive interface.",
  },
  {
    title: "Automated Assessment",
    Svg: require("@site/static/img/automation-B.svg").default,
    SvgDark: require("@site/static/img/automation-W.svg").default,
    description: "Generate and evaluate exams automatically with randomized questions and configurable difficulty levels.",
  },
  {
    title: "Question Bank",
    Svg: require("@site/static/img/book2-B.svg").default,
    SvgDark: require("@site/static/img/book2-W.svg").default,
    description: "Build a reusable pool of questions categorized by topic and difficulty, shared across courses and exams.",
  },
];

function Feature({ title, Svg, SvgDark, description }: FeatureItem) {
  const { colorMode } = useColorMode();
  const Icon = colorMode === "dark" ? SvgDark : Svg;
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.card}>
        <Icon className={styles.icon} role="img" aria-label={title} />
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <div className="row">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
