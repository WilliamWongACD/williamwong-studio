import styles from './App.module.scss';
import LandingPage from './components/landing';

function App() {
  return (
    <div className={styles.pageWrapper}>
      <LandingPage />
    </div>
  );
}

export default App;
