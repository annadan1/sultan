import Frame from "../../../assets/svg/Frame.svg";
import { Link } from "react-router-dom";
import * as styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
  return (
    <Link to="/catalog">
      <button type="button">
        Каталог
        <Frame />
      </button>
    </Link>
  );
};

export default Catalog;
