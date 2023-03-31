import Download from "../../../assets/svg/download.svg";
import * as styles from './DownloadPriceButton.module.scss';

const DownloadPriceButton: React.FC = () => {
  return (
    <button type="button" className={styles.button}>
      Прайс-лист
      <Download />
    </button>
  );
};

export default DownloadPriceButton;
