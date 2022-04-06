import Link from '@docusaurus/Link';
import PhotoGalleryImage from '@site/static/img/photo-gallery.png';
import PlateForkSpoonImage from '@site/static/img/plate-fork-spoon.png';
import SlackLogoImage from '@site/static/img/slack-logo.png';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imagePath?: string;
  description: JSX.Element;
  link?: (children: React.ReactChild) => JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Meals',
    imagePath: PlateForkSpoonImage,
    description: <>What is there to eat around here... and who's making it?</>,
    link: (children) => <Link to="meals">{children}</Link>,
  },
  {
    title: 'Photo Digitization Project',
    imagePath: PhotoGalleryImage,
    link: (children) => <Link to="photos">{children}</Link>,
    description: (
      <>
        Help tag old photos with names, places, and occasions so they become
        searchable.
      </>
    ),
  },
  {
    title: 'Chat with the Fam',
    imagePath: SlackLogoImage,
    link: (children) => (
      <Link href="https://hsufamilyworldwide.slack.com">{children}</Link>
    ),
    description: <>Our family Slack group</>,
  },
];

function Feature({ title, Svg, imagePath, link, description }: FeatureItem) {
  const image = (
    <div className="text--center">
      {Svg && <Svg className={styles.featureSvg} role="img" />}
      {imagePath && <img src={imagePath} className={styles.featureImage} />}
    </div>
  );

  return (
    <div className={clsx('col col--4')}>
      {link ? link(image) : image}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
