import { useSelector } from "react-redux";
import CartIcon from "../../../../assets/svg/cart.svg";
import * as styles from "./Cart.module.scss";
import { Store } from "../../../../types/store";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const cart = useSelector((state: Store) => state.cart);

  return (
    <Link to="/cart">
      <div className={styles.container}>
        <span>
          <CartIcon />
          <p className={styles.count}>{cart.totalCount}</p>
        </span>
        <div className={styles.info}>
          <p>Корзина</p>
          <p>{cart.totalPrice} ₸</p>
        </div>
      </div>
    </Link>
  );
};

export default Cart;
