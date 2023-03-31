import * as styles from "./Tiles.module.scss";

interface Props {
  className?: string;
}

const Tiles: React.FC<Props> = (props) => {
  const { className = styles.tiles } = props;
  return (
    <div className={className}>
      <button type="button" value="Для тела">
        Уход за телом
      </button>
      <button type="button" value="Для волос">
        Уход за волосами
      </button>
      <button type="button" value="Для лица">
        Уход за лицом
      </button>
      <button type="button" value="Для рук">
        Уход за руками
      </button>
    </div>
  );
};

export default Tiles;
