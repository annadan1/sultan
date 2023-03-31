import * as styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <button type="button" className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
