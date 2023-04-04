import Tiles from "../Tiles/Tiles";
import * as styles from "./Filters.module.scss";
import Search from "../../Search/Search";
import Trash from "../../../assets/svg/trash.svg";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/filtersSlice";
import { useState } from "react";

interface Fields {
  minPrice: number;
  maxPrice: number;
  manufacturer: string;
  brand: string;
}

const Filters = () => {
  const dispatch = useDispatch<any>();

  const fields: Fields = {
    minPrice: 0,
    maxPrice: 10000,
    manufacturer: "",
    brand: "",
  };

  const [currentFilters, setCurrentFilters] = useState(fields);

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value) || 0;
    setCurrentFilters({ ...currentFilters, minPrice: value });
    dispatch(actions.changeMinPrice(value));
  };

  const handleChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value) || 10000;
    setCurrentFilters({ ...currentFilters, maxPrice: value });
    dispatch(actions.changeMaxPrice(value));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(actions.changeProp(currentFilters));
  };

  const handleClick = () => {
    setCurrentFilters(fields);
    dispatch(actions.changeProp(fields));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.filters}>
        <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>
        <p>
          Цена <pre> ₸</pre>
        </p>
        <div className={styles.priceFilter}>
          <input
            placeholder="0"
            type="number"
            onChange={handleChangeMinPrice}
          />
          <p>-</p>
          <input
            placeholder="10000"
            type="number"
            onChange={handleChangeMaxPrice}
          />
        </div>
        <h3>Производитель</h3>
        <Search
          query={"manufacturer"}
          setCurrentFilters={setCurrentFilters}
          currentFilters={currentFilters}
        />
        <h3>Бренд</h3>
        <Search
          query={"brand"}
          setCurrentFilters={setCurrentFilters}
          currentFilters={currentFilters}
        />
        <div className={styles.buttonsGroup}>
          <button
            type="submit"
            className={styles.showButton}
            onClick={() => handleSubmit}
          >
            Показать
          </button>
          <button
            type="button"
            className={styles.trashButton}
            onClick={() => handleClick()}
          >
            <Trash />
          </button>
        </div>
        <div>
          <Tiles className={styles.tiles} />
        </div>
      </div>
    </form>
  );
};

export default Filters;
