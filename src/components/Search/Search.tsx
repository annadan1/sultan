import Loupe from "../../assets/svg/loupe.svg";
import * as style from "./Search.module.scss";

const Search: React.FC<{ query: string }> = (props) => {
  const { query } = props;
  return (
    <form className={style.container}>
      <input placeholder="Поиск..."></input>
      <button type="submit" className={style.searchButton}>
        <Loupe />
      </button>
    </form>
  );
};

export default Search;
