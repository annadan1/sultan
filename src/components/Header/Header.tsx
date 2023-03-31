import SecondLine from "./SecondLine/SecondLine";
import FirstLine from "./FirstLine/FirstLine";
import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <FirstLine />
      <p className={styles.line}></p>
      <SecondLine />
      <p className={styles.line}></p>
    </header>
  );
};

export default Header;
