import Catalog from "../../Buttons/Catalog/Catalog";
import Loupe from "../../../assets/svg/loupe.svg";
import * as styles from "./MobileLine.module.scss";

const ModileLine: React.FC = () => {
  return (
    <div className={styles.modileLineContainer}>
      <div>
        <Catalog />
      </div>
      <div>
        <Loupe />
        <p>Поиск</p>
      </div>
    </div>
  );
};

export default ModileLine;
