import Logo from "../../../assets/svg/Logo.svg";
import { Link } from "react-router-dom";
import * as styles from './LogoButton.module.scss';

const LogoButton: React.FC = () => {
  return (
    <Link to="/" className={styles.logoBlock}>
      <Logo className={styles.logo} />
    </Link>
  );
};

export default LogoButton;
