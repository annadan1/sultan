import Bottle from "../../../assets/svg/bottle.svg";
import Box from "../../../assets/svg/box.svg";
import CartImg from "../../../assets/svg/smallcart.svg";
import * as styles from "./CardProduct.module.scss";
import { Item } from "../../../types/store";
import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/cartSlice";
import { Link } from "react-router-dom";

interface Props {
  item: Item;
}

const CardProduct: React.FC<Props> = (props) => {
  const { item } = props;
  const dispatch = useDispatch<any>();

  const handleClick = (e: MouseEvent, item: Item): void => {
    e.preventDefault();
    dispatch(actions.addItem(item));
  };

  return (
    <Link to={`/catalog/${item.id}`}>
      <div className={styles.itemContainer}>
        <img src={item.img} alt="изображение продукта" />
        <div>
          {item.sizetype === "bottle" ? <Bottle /> : <Box />} {item.size}
        </div>
        <span>{item.name}</span>
        <div className={styles.field}>
          <p>Штрихкод:</p>
          <pre> {item.barcode}</pre>
        </div>
        <div className={styles.field}>
          <p>Производитель:</p>
          <pre> {item.manufacturer}</pre>
        </div>
        <div className={styles.field}>
          <p>Бренд:</p>
          <pre> {item.brand}</pre>
        </div>
        <div className={styles.priceBlock}>
          {item.price} ₸
          <button
            type="button"
            onClick={(e: MouseEvent) => handleClick(e, item)}
          >
            В КОРЗИНУ <CartImg />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
