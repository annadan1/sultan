import Logo from "../../../assets/svg/Logo.svg";
import Frame from "../../../assets/svg/Frame.svg";
import Search from "../../Search/Search";
import Cart from "./Cart/Cart";
import DownloadPriceButton from "../../Buttons/DownloadPriceButton/DownloadPriceButton";
import * as styles from "./SecondLine.module.scss";
import { Link } from "react-router-dom";

const SecondLine: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Logo className={styles.logo} />
      </Link>
      <Link to="/catalog">
        <button type="button">
          Каталог
          <Frame />
        </button>
      </Link>
      <Search query={"name"} />
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
      <p className={styles.vl} />
      <DownloadPriceButton />
      <p className={styles.vl} />
      <Cart />
    </div>
  );
};
export default SecondLine;
