import styles from './Button.module.css'; // Importando CSS Modules
import scssStyles from './Button.module.scss'; // Importando Scoped CSS com SCSS

interface ButtonProps {
  label: string;
  onClick: () => void;
}
function Button({ label, onClick }: ButtonProps) {
    return (
      <button className={`${styles.button} ${scssStyles.customButton}`} onClick={onClick}>
        {label}
      </button>
    );
  }
export default Button;  