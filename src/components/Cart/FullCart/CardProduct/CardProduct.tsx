import { Item } from "../../../../types/store";
import * as styles from "./CardProduct.module.scss";
import Bottle from "../../../../assets/svg/bottle.svg";
import Box from "../../../../assets/svg/box.svg";
import Trash from "../../../../assets/svg/trash.svg";
import { actions } from "../../../../store/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  item: Item;
}

const CardProduct: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch<any>();

  const addItem = (item: Item) => {
    dispatch(actions.addItem(item));
  };

  const minusItem = (item: Item) => {
    dispatch(actions.minusItem(item));
  };

  const removeItem = (item: Item) => {
    dispatch(actions.removeItem(item));
  };

  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={item.img} alt="изображение продукта" />
      </div>
      <div className={styles.info}>
        <div>
          {item.sizetype === "bottle" ? <Bottle /> : <Box />} {item.size}
        </div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <p className={styles.vl}></p>
      <div className={styles.calculate}>
        <button
          type="button"
          disabled={item.count === 1}
          onClick={() => minusItem(item)}
        >
          -
        </button>
        {item.count}
        <button
          type="button"
          disabled={item.inStock - item.count! === 0}
          onClick={() => addItem(item)}
        >
          +
        </button>
      </div>
      <p className={styles.vl}></p>
      <div className={styles.price}>{Number(item.count) * Number(item.price)} ₸</div>
      <p className={styles.vl}></p>
      <button type="button" className={styles.trash} onClick={() => removeItem(item)}>
        <Trash />
      </button>
    </div>
  );
};

export default CardProduct;
