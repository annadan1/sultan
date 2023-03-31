import Address from "./Address/Address";
import Mail from "./Mail/Mail";
import Button from "./Button/Button";
import * as styles from "./FirstLine.module.scss";

const FirstLine: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Address />
        <p className={styles.vl} />
        <Mail />
      </div>
      <div>
        <Button text="О компании" />
        <p className={styles.vl} />
        <Button text="Доставка и оплата" />
        <p className={styles.vl} />
        <Button text="Возврат" />
        <p className={styles.vl} />
        <Button text="Контакты" />
      </div>
    </div>
  );
};
export default FirstLine;
