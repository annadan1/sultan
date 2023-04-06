import SecondLine from "./SecondLine/SecondLine";
import FirstLine from "./FirstLine/FirstLine";
import ModileLine from "./MobileLine/MobileLine";
import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <FirstLine />
      <p className={styles.firstline}></p>

      <SecondLine />
      <p className={styles.secondline}></p>

      <ModileLine />
      <p className={styles.mobileline}></p>
    </header>
  );
};

export default Header;
