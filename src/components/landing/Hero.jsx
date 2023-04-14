import React from 'react';
import styles from './styles.module.scss';
import { classes } from '../../utils';
import IconContainer from '../IconContainer';
import { flex, col } from '../../assets/_flex.module.scss';
import linkedInIcon from '../../assets/icons/linked-in.svg';
import emailIcon from '../../assets/icons/email.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { fadeIn } from '../WorkTile/WorkTile.module.scss';

const Hero = () => {
  const ref = React.createRef(null);

  const handleObserver = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(fadeIn);
      } else {
        entry.target.classList.remove(fadeIn);
      }
    });
  };

  useIntersectionObserver(ref, handleObserver, { threshold: 0.45 });

  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <aside className={styles.left}>
          <h5>William</h5>
          <h5 style={{ marginTop: '-1rem' }}>Wong</h5>
          <a href="#">Work</a>
          <a href="#">About</a>
          <div style={{ flexBasis: '100%', marginTop: '0.25rem', flex: '1', marginRight: '75%' }}></div>
        </aside>
        <main>
          <h1 ref={ref}>Hello</h1>
        </main>
        <aside className={classes(styles.right, flex, col)}>
          <div style={{ flex: 1 }} />
          <IconContainer height={34} width={34}>
            <img src={emailIcon} className={styles.email} />
          </IconContainer>
          <IconContainer height={34} width={34}>
            <img src={linkedInIcon} className={styles.linkedIn} />
          </IconContainer>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
