import { useRef } from "react";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import DoubleOk from "../../../assets/svg/doubleOk.svg";
import { actions } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Cart } from "../../../types/store";
import CardProduct from "./CardProduct/CardProduct";
import useOutsideClick from "../../../hooks/UseOnclickOutside";
import * as styles from "./FullCart.module.scss";

interface Props {
  cart: Cart;
  setBought: any;
  isBought: boolean;
}

const FullCart: React.FC<Props> = ({ cart, setBought, isBought }) => {
  const { items } = cart;
  const ref = useRef(null);
  const dispatch = useDispatch<any>();

  const handleClick = () => {
    setBought(true);
    dispatch(actions.removeItems());
  };

  const handleClickClosePopup = () => {
    setBought(false);
  };

  useOutsideClick(ref, handleClickClosePopup);

  return (
    <main>
      <div className={styles.header}>
        <Breadcrumbs path={["Главная", "Корзина"]} />
        <h1>КОРЗИНА</h1>
      </div>
      {items.map((item) => (
        <CardProduct item={item} key={item.id} />
      ))}
      <div className={styles.footer}>
        <button type="button" onClick={() => handleClick()}>
          Оформить заказ
        </button>
        <p>{cart.totalPrice} ₸</p>
      </div>

      {isBought && (
        <div className={styles.container}>
          <div className={styles.popupContainer} ref={ref}>
            <header>
              <button type="button" onClick={() => handleClickClosePopup()}>
                ×
              </button>
            </header>
            <div className={styles.popup}>
              <div className={styles.doubleOk}>
                <DoubleOk />
              </div>
              <div className={styles.thanks}>СПАСИБО ЗА ЗАКАЗ</div>
              <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default FullCart;
