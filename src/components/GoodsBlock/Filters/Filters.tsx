import Tiles from "../Tiles/Tiles";
import * as styles from "./Filters.module.scss";
import Search from "../../Search/Search";
import Trash from '../../../assets/svg/trash.svg';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
      <p>
        Цена <pre> ₸</pre>
      </p>
      <div className={styles.priceFilter}>
        <input placeholder="0" type="number" />
        <p>-</p>
        <input placeholder="10000" type="number" />
      </div>
      <h3>Производитель</h3>
      <Search query={"manufacturer"} />
      <h3>Бренд</h3>
      <Search query={"brand"} />
      <div className={styles.buttonsGroup}>
        <button type="button" className={styles.showButton}>Показать</button>
        <button type="button" className={styles.trashButton}><Trash/></button>
      </div>
      <div>
        <Tiles className={styles.tiles} />
      </div>
    </div>
  );
};

export default Filters;
