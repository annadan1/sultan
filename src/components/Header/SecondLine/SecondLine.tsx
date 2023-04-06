import Search from "../../Search/Search";
import Cart from "./Cart/Cart";
import DownloadPriceButton from "../../Buttons/DownloadPriceButton/DownloadPriceButton";
import * as styles from "./SecondLine.module.scss";
import LogoButton from "../../Buttons/Logo/LogoButton";
import Catalog from "../../Buttons/Catalog/Catalog";
import BurgerButton from "../../Buttons/BurgerButton/BurgerButton";

const SecondLine: React.FC = () => {
  return (
    <div className={styles.container}>
      <BurgerButton />
      <LogoButton />
      <div className={styles.catalogContainer}>
        <Catalog />
      </div>
      <div className={styles.searchContainer}>
        <Search query={"name"} />
      </div>
      <div className={styles.callContainer}>
        <div>
          <p>+7 (777) 490-00-91</p>
          <p>время работы: 9:00-20:00</p>
          <p>Заказать звонок</p>
        </div>
        <div className={styles.callIcon}>
          <p></p>
        </div>
      </div>
      <div className={styles.containerButton}>
        <p className={styles.vl} />
        <DownloadPriceButton />
        <p className={styles.vl} />
      </div>
      <Cart />
    </div>
  );
};
export default SecondLine;
