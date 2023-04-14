import React, { useRef, useEffect } from 'react';
import styles from './WorkTile.module.scss';

const WorkTile = ({ src }) => {
  const ref = useRef();

  // useEffect(() => {
  //   const observerOpts = {
  //     threshold: 0.5
  //   };

  //   const handleObserver = entries => {
  //     for (let entry of entries) {
  //       if (entry.isIntersecting) {
  //         ref.current.classList.add(styles.fadeIn);
  //       } else {
  //         ref.current.classList.remove(styles.fadeIn);
  //       }
  //     }
  //   };

  //   const observer = new IntersectionObserver(handleObserver, observerOpts);
  //   observer?.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <div ref={ref} className={styles.iconContainer}>
      <img src={src} />
    </div>
  );
};

export default WorkTile;
