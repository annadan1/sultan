import { useState } from "react";
import * as styles from "./Sort.module.scss";
import { useRef } from "react";
import useOutsideClick from "../../hooks/UseOnclickOutside";

const sortingMethods: { id: string; value: string }[] = [
  { id: "name_asc", value: "по названию ▲" },
  { id: "name_desc", value: "по названию ▼" },
  { id: "price_asc", value: "по цене ▲" },
  { id: "price_desc", value: "по цене ▼" },
];

const Sort: React.FC = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [sortingMethod, setSortingMethod] = useState({
    id: "name_asc",
    value: "по названию ▲",
  });

  const handleClick = (newMethod: { id: string; value: string }) => {
    setSortingMethod(newMethod);
    setOpen(false);
  };

  const handleClickOutside = () => {
    setOpen(false);
  };

  useOutsideClick(ref, handleClickOutside);

  return (
    <div className={styles.sort}>
      <p>Сортировка:</p>
      {sortingMethod && (
        <button type="button" onClick={() => setOpen(!isOpen)}>
          {sortingMethod.value}
        </button>
      )}
      {isOpen && (
        <div className={styles.popup} ref={ref}>
          <ul className={styles.popupContent}>
            <div className={styles.popupContainer}>
              {sortingMethods.map((sortMethod, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(sortMethod)}
                  className={styles.popupItem}
                >
                  {sortMethod.value}
                </li>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
