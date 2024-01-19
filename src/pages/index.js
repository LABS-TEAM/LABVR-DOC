import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="logo">
          <img src={useBaseUrl("/img/LOGO-FULL.png")} width="300px" />
        </div>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="docs/intro">
            Documentation 📚
          </Link>
          <Link className="button button--secondary button--lg" to="/blog/">
            Visiter le Blog 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Documentation of Virtual Laboratory <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
