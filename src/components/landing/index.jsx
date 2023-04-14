import React from 'react';
import Hero from './Hero';
import WorkTile from '../WorkTile';
import styles from './styles.module.scss';
import Footer from './Footer';
import { fadeIn, iconContainer } from '../WorkTile/WorkTile.module.scss';

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

const workTiles = [{ src: 'http://williamwong.info/dsnimg/home_work_01_usarmy.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_02_enfamil.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_03_eBay.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_04_sunovion.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_05_TNF.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_06_RWJF.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_07_acuvue.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_08_oyko.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_09_woolite.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_10_euc.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_11_hasbro.svg' }, { src: 'http://williamwong.info/dsnimg/home_work_12_samsung.svg' }];

const LandingPage = () => {
  //TODO: Should this live here or at the workTile level?
  React.useEffect(() => {
    const handleObserver = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(fadeIn);
        } else {
          entry.target.classList.remove(fadeIn);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver);
    const workTiles = document.querySelectorAll(`.${iconContainer}`);

    workTiles.forEach(tile => {
      observer.observe(tile);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Hero />
      <div className={styles.workTiles}>
        {workTiles.map(props => (
          <WorkTile key={props.src} {...props} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
