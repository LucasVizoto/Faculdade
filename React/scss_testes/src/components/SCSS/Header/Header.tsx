import styles from './Header.module.css'; // Importando CSS Modules
import scssStyles from './Header.module.scss'; // Importando Scoped CSS com SCSS

function Header() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to React with CSS Modules</h1>
        <p className={scssStyles.description}>This is an example of Scoped CSS using SCSS.</p>
      </header>
    );
  }
export default Header;
