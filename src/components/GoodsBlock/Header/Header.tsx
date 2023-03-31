import Sort from "../../Sort/Sort";
import Tiles from "../Tiles/Tiles";
import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.goodsBlockHeader}>
        <h1>КОСМЕТИКА И ГИГИЕНА</h1>
        <div>
          <Sort />
        </div>
      </div>
      <Tiles />
    </>
  );
};

export default Header;
