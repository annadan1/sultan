import { useState } from "react";
import * as styles from "./CheckBox.module.scss";

const CheckBox: React.FC<{
  setCurrentFilters?: Function;
  currentFilters?: Object;
  name: string;
  count: number | string;
}> = (props) => {
  const { name, count } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        name="customCheckBox"
        value={name}
        checked={isChecked}
      />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.count}>({count})</div>
      </div>
    </div>
  );
};

export default CheckBox;
