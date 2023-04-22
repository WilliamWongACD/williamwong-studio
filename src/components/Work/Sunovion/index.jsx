import React from 'react';
import PageWrapper from '../../../PageWrapper';
import styles from './styles.module.scss';
import WorkSectionItem from '../../WorkSectionItem';

const items = [
  {
    title: null,
    description: null
  },
  {
    title: 'Illustrations',
    description: 'We strongly felt that this is one area we could make a true impact. Not only coming up with stunning visuals for each game, but solving for the dense amount of content in a small space. Most importantly however we saw this as something we can make into components and apply across many different channels.'
  },
  {
    title: null,
    description: null
  },
  {
    title: null,
    description: null
  },
  {
    title: null,
    description: null
  }
];

const Sunovion = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageWrapper light>
      <div>
        <figure className={styles.heroImage} id="hero" />
        <section className={styles.contentContainer}>
          <div style={{ padding: '2rem 1rem' }} id="sunovion">
            <div className={styles.heading}>
              <h3 style={{ marginBottom: '2rem', display: 'block' }}>Sunovion</h3>

              <div className={styles.headingBody}>
                <p style={{ paddingRight: '1rem' }}>Amazon Ads came to us and asked us to give their Thursday Night Football (TNF) brand a facelift as well as questions on how to make certain things that repeat across platforms manageable. The team and I managed to keep the best parts of their brand work but added a level of polish that wasn’t quite there before. We also looked to create components that can be applied across many different channels.</p>
                <div>
                  <h5>Role:</h5>
                  <ul className={styles.role}>
                    <li>
                      <p>Design Direction</p>
                    </li>
                    <li>
                      <p>Design System</p>
                    </li>
                    <li>
                      <p>Component Library</p>
                    </li>
                    <li>
                      <p>Web UI Design</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul>
            {items.map((props, i) => (
              <WorkSectionItem key={props.description + i} {...props} tag="li" src={`http://williamwong.info/dsnimg/sunovion_${i + 1}.png`} />
            ))}
          </ul>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Sunovion;
