import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {useColorMode} from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  SvgDark: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Course Management',
    Svg: require('@site/static/img/management-B.svg').default,
    SvgDark: require('@site/static/img/management-W.svg').default,
    description: (
      <>
        Organize academic courses effortlessly. Manage units, instructors through a unified and intuitive interface.
      </>
    ),
  },
  {
    title: 'Automated Test Generation & Correction',
    Svg: require('@site/static/img/automation-B.svg').default,
    SvgDark: require('@site/static/img/automation-W.svg').default,
    description: (
      <>
        Create and evaluate assessments automatically. Generate exams with randomized questions and set difficulty levels.
      </>
    ),
  },
  {
    title: 'Textbook Creation',
    Svg: require('@site/static/img/book2-B.svg').default,
    SvgDark: require('@site/static/img/book2-W.svg').default,
    description: (
      <>
        Design and publish educational materials collaboratively for your courses. Compile resources into structured textbooks with ease.
      </>
    ),
  },
];

function Feature({title, Svg, SvgDark, description}: FeatureItem) {
  const { colorMode } = useColorMode();
  const CurrentSvg = colorMode === 'dark' ? SvgDark : Svg;
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <CurrentSvg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
