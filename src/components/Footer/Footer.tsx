import Logo from "../../assets/svg/Logo.svg";
import DownloadPriceButton from "../Buttons/DownloadPriceButton/DownloadPriceButton";
import Whatsapp from "../../assets/svg/logos_whatsapp.svg";
import Telegram from "../../assets/svg/logos_telegram.svg";
import Visa from "../../assets/svg/visa.svg";
import Mastarcard from "../../assets/svg/mastercard.svg";
import * as styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.logoBlock}>
        <div className={styles.continer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.containerForButton}>
            <DownloadPriceButton />
          </div>
        </div>
        <h6>
          Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в
          Кокчетаве и Акмолинской области
        </h6>
        <p>Подпишись на скидки и акции</p>
        <div className={styles.inputBlock}>
          <input placeholder="Введите ваш E-mail" />
          <span>ᐳ</span>
        </div>
      </div>
      <div>
        <h5>Меню сайта:</h5>
        <a>О компании</a>
        <a>Доставка и оплата</a>
        <a>Возврат</a>
        <a>Контакты</a>
      </div>
      <div>
        <h5>Категории:</h5>
        <a>Бытовая химия</a>
        <a>Косметика и гигиена</a>
        <a>Товары для дома</a>
        <a>Товары для детей и мам</a>
        <a>Посуда</a>
      </div>
      <div className={styles.messengersBlock}>
        <div className={styles.messengersBlockPrice}>
          <h5>Скачать прайс-лист:</h5>
          <DownloadPriceButton />
        </div>
        <p>Связь в мессенджерах:</p>
        <div className={styles.messengers}>
          <button>
            <Whatsapp />
          </button>
          <button>
            <Telegram />
          </button>
        </div>
      </div>
      <div className={styles.contactBlock}>
        <h5>Контакты:</h5>
        <div className={styles.phone}>
          <p>+7 (777) 490-00-91</p>
          <p>время работы: 9:00-20:00</p>
          <p>Заказать звонок</p>
        </div>
        <div className={styles.address}>
          <span>гopt.sultan@mail.ru</span>
          <p>На связи в любое время</p>
        </div>
        <div className={styles.cards}>
          <Visa />
          <Mastarcard />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
