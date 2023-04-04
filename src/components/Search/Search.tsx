import { useState } from "react";
import Loupe from "../../assets/svg/loupe.svg";
import * as style from "./Search.module.scss";
import { actions } from "../../store/filtersSlice";
import { useDispatch } from "react-redux";

const Search: React.FC<{
  setCurrentFilters?: Function;
  currentFilters?: Object;
  query: string;
}> = (props) => {
  const { query, setCurrentFilters, currentFilters } = props;
  const dispatch = useDispatch<any>();

  const [value, setValue] = useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log( query, value);
    dispatch(actions.changeProp([{ key: query, value }]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentFilters
      ? setCurrentFilters({ ...currentFilters, [query]: [value] })
      : setValue(value);
  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input placeholder="Поиск..." onChange={(e) => handleChange(e)}></input>
      <button
        type="submit"
        className={style.searchButton}
        onClick={() => handleSubmit}
      >
        <Loupe />
      </button>
    </form>
  );
};

export default Search;
