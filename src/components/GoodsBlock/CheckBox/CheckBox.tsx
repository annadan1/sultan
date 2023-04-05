import { useState } from "react";
import * as styles from "./CheckBox.module.scss";

const CheckBox: React.FC<{
  setCurrentFilters: Function;
  currentFilters: Record<string, any>;
  query: string;
  name: string;
  count: number | string;
}> = (props) => {
  const { name, count, setCurrentFilters, currentFilters, query } = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let currArray = currentFilters[query];
    if (currArray.includes(value)){
        currArray = currArray.filter((i: string) => i !== value)
    } else {
        currArray.push(value)
    }
    
    setCurrentFilters({...currentFilters, [query]: currArray});
    
    setIsChecked(!isChecked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        name="customCheckBox"
        value={name}
        onChange={(e) => handleChange(e)}
        checked={isChecked}
      />
      <div className={styles.box}>
        <div className={styles.name}>{name}</div>
        <div className={styles.count}>({count})</div>
      </div>
    </label>
  );
};

export default CheckBox;
