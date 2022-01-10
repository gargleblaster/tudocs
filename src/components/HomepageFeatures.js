import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Incredibly Powerful',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Trade Unafraid watches dozens of charts, understands what matters to you, and dynamically reacts to price action.
      </>
    ),
  },
  {
    title: 'Works For You',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Trade Unafraid is your trading wingman, watching and reacting on your behalf when you're not able to.  It's like having a tireless, dedicated trading assistant always looking out for you.
      </>
    ),
  },
  {
    title: 'Uncompromising',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you rely on Trade Unafraid's automation, use the powerful manual controls, or use some combination of the two, you *always* have the best possible trading mechanisms working for you to give you a trading edge.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
