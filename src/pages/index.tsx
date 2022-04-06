import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import EggsAndBaconImage from '@site/static/img/eggs_bacon.png';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h2 className="hero__title">{siteConfig.title}</h2>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src={EggsAndBaconImage} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  //   const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="" description="The Hsu Reunion">
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
