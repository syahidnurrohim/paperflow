import { h } from 'preact';
import { Link } from 'preact-router/match';
import styles from './style.css';

const Header = () => (
  <header class={styles.glossyHeader}>
    <h1 class={styles.headerTitle}>My App</h1>
    <nav class={styles.headerNav}>
      <a href="#" class={styles.navLink}>Home</a>
      <a href="#" class={styles.navLink}>About</a>
      <a href="#" class={styles.navLink}>Contact</a>
    </nav>
  </header>
);

export default Header;
