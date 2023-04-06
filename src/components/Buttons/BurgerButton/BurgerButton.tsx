import Burger from "../../../assets/svg/burger.svg";
import * as styles from './BurgerButton.module.scss';

const BurgerButton: React.FC = () => {
return (
    <div className={styles.modileBurger}>
        <button type="button">
          <Burger />
        </button>
      </div>
)
}
export default BurgerButton;