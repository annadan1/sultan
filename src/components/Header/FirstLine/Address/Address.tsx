import Group from "../../../../assets/svg/Group.svg";
import * as styles from "./Address.module.scss";

const Address: React.FC = () => {
  return (
    <div className={styles.container}>
      <Group className={styles.svg}/>
      <div className={styles.address}>
        <span>г. Кокчетав, ул. Ж. Ташенова 129Б </span>
        <p>(Рынок Восточный)</p>
      </div>
    </div>
  );
};

export default Address;
