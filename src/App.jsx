import styles from './App.module.scss';
import { flex, centerContent, centerItems, col } from './assets/_flex.module.scss';

function App() {
  return (
    <div className={styles.landing}>
      <div className={styles.landingContainer}>
        <div className={styles.left}>
          <h5>William</h5>
          <h5>Wong</h5>
          <a>Work</a>
          <a>About</a>
          <div style={{ flexBasis: '100%', marginTop: '0.25rem', flex: '1', borderLeft: '1px solid white', borderBottom: '1px solid white' }}></div>
        </div>
        <h1>Hello</h1>
        <div>
          <p>linked in</p>
          <p>linked in</p>
        </div>
      </div>
    </div>
  );
}

export default App;
