import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/goodsSlice";
import * as styles from "./Pagination.module.scss";

const Pagination: React.FC<{ pages: number; currentPage: number }> = ({
  pages,
  currentPage,
}) => {
  const dispatch = useDispatch<any>();
  const handleClick = (num: number) => {
    dispatch(actions.changeCurrentPage(num));
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.arrow}
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        ᐸ
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((num) => (
        <button
          className={currentPage === num ? styles.active : styles.page}
          type="button"
          key={num}
          onClick={() => handleClick(num)}
        >
          {num}
        </button>
      ))}
      <button
        type="button"
        className={styles.arrow}
        disabled={currentPage === pages}
        onClick={() => handleClick(currentPage + 1)}
      >
        ᐳ
      </button>
    </div>
  );
};

export default Pagination;
