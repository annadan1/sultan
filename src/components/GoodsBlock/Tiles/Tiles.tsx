import * as styles from "./Tiles.module.scss";
import { actions } from "../../../store/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../types/store";

interface Props {
  className?: string;
}

const Tiles: React.FC<Props> = (props) => {
  const { className = styles.tiles } = props;
  const { filters } = useSelector((state: Store) => state);
  const dispatch = useDispatch<any>();

  const handleClick = (value: string) => {
    filters.categories.includes(value)
      ? dispatch(actions.removeType(value))
      : dispatch(actions.addType(value));
  };

  return (
    <div className={className}>
      <button
        type="button"
        value="Для тела"
        className={
          filters.categories.includes("Для тела") ? styles.activeFilter : ""
        }
        onClick={(event) => handleClick(event.currentTarget.value)}
      >
        Уход за телом
      </button>
      <button
        type="button"
        value="Для волос"
        className={
          filters.categories.includes("Для волос") ? styles.activeFilter : ""
        }
        onClick={(event) => handleClick(event.currentTarget.value)}
      >
        Уход за волосами
      </button>
      <button
        type="button"
        value="Для лица"
        className={
          filters.categories.includes("Для лица") ? styles.activeFilter : ""
        }
        onClick={(event) => handleClick(event.currentTarget.value)}
      >
        Уход за лицом
      </button>
      <button
        type="button"
        value="Для рук"
        className={
          filters.categories.includes("Для рук") ? styles.activeFilter : ""
        }
        onClick={(event) => handleClick(event.currentTarget.value)}
      >
        Уход за руками
      </button>
    </div>
  );
};

export default Tiles;
