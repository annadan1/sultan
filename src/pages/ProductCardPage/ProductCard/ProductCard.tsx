import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Bottle from "../../../assets/svg/bottle.svg";
import Box from "../../../assets/svg/box.svg";
import CartImg from "../../../assets/svg/smallcart.svg";
import Share from "../../../assets/svg/share.svg";
import Download from "../../../assets/svg/download.svg";
import { Item } from "../../../types/store";
import * as styles from "./ProductCard.module.scss";
import { useState } from "react";
import { actions } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  item: Item;
}

const ProductCard: React.FC<Props> = ({ item }) => {
  const [count, setCount] = useState<number>(1);
  const [openDescription, setOpenDescription] = useState<boolean>(false);
  const [openCharacteristics, setOpenCharacteristics] =
    useState<boolean>(false);
  const dispatch = useDispatch<any>();

  const handleClick = (item: Item): void => {
    dispatch(actions.addManyItem({ item, count }));
  };

  return (
    <main>
      <Breadcrumbs path={["Главная", "Косметика и гигиена", item.brand]} />
      <div className={styles.container}>
        <img src={item.img} alt="изображение продукта" />
        <div className={styles.info}>
          <span>В наличии {item.inStock} шт.</span>
          <h3>{item.name}</h3>
          <div className={styles.sizetype}>
            {item.sizetype === "bottle" ? <Bottle /> : <Box />} {item.size}
          </div>
          <div className={styles.calculate}>
            <p className={styles.price}>{item.price} ₸</p>
            <div className={styles.buttons}>
              <button
                type="button"
                disabled={count === 1}
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
              <p>{count}</p>
              <button
                type="button"
                disabled={count === item.inStock}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button type="button" onClick={() => handleClick(item)}>
              В КОРЗИНУ <CartImg />
            </button>
          </div>
          <div className={styles.shareBlock}>
            <div className={styles.share}>
              <Share />
            </div>
            <div className={styles.delivery}>
              При покупке от <b>{`10 000 ₸ `}</b>бесплатная доставка по
              Кокчетаву и области
            </div>
            <div className={styles.download}>
              Прайс-лист
              <Download />
            </div>
          </div>
          <div>
            <div className={styles.field}>
              <p>Производитель:</p>
              <pre> {item.manufacturer}</pre>
            </div>
            <div className={styles.field}>
              <p>Бренд:</p>
              <pre> {item.brand}</pre>
            </div>
            <div className={styles.field}>
              <p>Штрихкод:</p>
              <pre> {item.barcode}</pre>
            </div>
          </div>
          <div className={styles.hiddenInfo}>
            <button
              type="button"
              onClick={() => setOpenDescription(!openDescription)}
            >
              Описание {openDescription ? "▼" : "▲"}
            </button>
            {openDescription && <div>{item.description}</div>}
          </div>
          <p className={styles.hl}></p>
          <div className={styles.hiddenInfo}>
            <button
              type="button"
              onClick={() => setOpenCharacteristics(!openCharacteristics)}
            >
              Характеристики {openCharacteristics ? "▼" : "▲"}
            </button>
            {openCharacteristics && (
              <div>
                <div className={styles.field}>
                  <p>Производитель:</p>
                  <pre> {item.manufacturer}</pre>
                </div>
                <div className={styles.field}>
                  <p>Бренд:</p>
                  <pre> {item.brand}</pre>
                </div>
                <div className={styles.field}>
                  <p>Штрихкод:</p>
                  <pre> {item.barcode}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCard;
