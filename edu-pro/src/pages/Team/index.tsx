import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import TeamsFeatures from "@site/src/components/TeamsFeatures";

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <TeamsFeatures />
    </Layout>
  );
}
