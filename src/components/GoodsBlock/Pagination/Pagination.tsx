import { useState } from "react";
import * as styles from "./Pagination.module.scss";

const Pagination: React.FC<{ page: number }> = ({ page }) => {
  const [activePage, setPage] = useState(1);

  const handleClick = (num: number) => {
    setPage(num);
  };

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.arrow}
        disabled={activePage === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        ᐸ
      </button>
      {Array.from({ length: page }, (_, i) => i + 1).map((num) => (
        <button
          className={activePage === num ? styles.active : styles.page}
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
        disabled={activePage === page}
        onClick={() => setPage((prev) => prev + 1)}
      >
        ᐳ
      </button>
    </div>
  );
};

export default Pagination;
