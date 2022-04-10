import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from './index.module.css';

const PhotoArchivePage = (props) => {
  return (
    <Layout title="Photos" description="Reunion Home Base">
      <main>
        <div className={styles.centeredBlock}>
          <section className={styles.column}>
            <h1>Ancestral Photo Archive</h1>
            <Link href="https://www.flickr.com/groups/14817766@N21/pool/">
              Flickr Gallery
            </Link>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default PhotoArchivePage;
