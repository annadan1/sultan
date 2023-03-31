import { Link } from "react-router-dom";
import * as styles from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Link to="/catalog" className={styles.info}>
          <button type="button">Перейти в каталог</button>
        </Link>
      </div>    
      <Footer />
    </>
  );
};

export default MainPage;
