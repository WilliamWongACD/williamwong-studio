import React from 'react';
import styles from './workSectionItem.module.scss';

const WorkSectionItem = ({ src, title, description }) => (
  <div className={styles.sectionContainer}>
    <img src={src} />
    {(title || description) && (
      <div className={styles.sectionContent}>
        {!!title && <h3>{title}</h3>}
        {!!description && <p>{description}</p>}
      </div>
    )}
  </div>
);

export default WorkSectionItem;
