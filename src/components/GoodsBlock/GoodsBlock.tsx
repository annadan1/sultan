import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Header from "./Header/Header";
import Filters from "./Filters/Filters";
import * as styles from "./GoodsBlock.module.scss";
import CardProduct from "./CardProduct/CardProduct";
import { Store } from "../../types/store";
import Pagination from "./Pagination/Pagination";

const GoodsBlock: React.FC<{ store: Store }> = (props) => {
  const { currentGoods, page } = props.store.goods;

  return (
    <main>
      <Breadcrumbs path={['Главная', 'Косметика и гигиена']}/>
      <Header />
      <div className={styles.main}>
        <Filters />
        <div>
          <div className={styles.goodsContainer}>
            {currentGoods.map((item, index) => (
              <CardProduct item={item} key={index} />
            ))}
          </div>
          <Pagination page={page} />
        </div>
      </div>
    </main>
  );
};
export default GoodsBlock;
