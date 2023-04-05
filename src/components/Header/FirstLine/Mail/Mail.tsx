import Envelope from "../../../../assets/svg/envelope.svg";
import * as styles from "./Mail.module.scss";

const Mail: React.FC = () => {
  return (
    <div className={styles.container}>
      <Envelope />
      <div className={styles.address}>
        <span>гopt.sultan@mail.ru</span>
        <p>На связи в любое время</p>
      </div>
    </div>
  );
};

export default Mail;
