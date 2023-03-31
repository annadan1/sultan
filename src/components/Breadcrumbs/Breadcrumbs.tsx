import * as styles from "./Breadcrumbs.module.scss";
interface Props {
  path: Array<string>;
}
const Breadcrumbs: React.FC<Props> = ({ path }) => {
  return (
    <div className={styles.breadcrumbs}>
      {path.map((text, index) =>
        index === path.length - 1 ? (
          <div key={index}>
            <p className={styles.last}>{text}</p>
          </div>
        ) : (
          <div key={index}>
            <p>{text}</p>
            <p className={styles.vl} />
          </div>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
