import { useEffect, useState } from "react";
import CheckBox from "../../CheckBox/CheckBox";
import * as styles from "./FilterSections.module.scss";
import Search from "../../../Search/Search";

interface Props {
  sections: { [key: string]: number };
  setCurrentFilters: Function;
  currentFilters: Record<string, any>;
  query: string;
}

const FilterSections: React.FC<Props> = (props) => {
  const { sections, setCurrentFilters, currentFilters, query } = props;
  const [showAll, setShowAll] = useState<boolean>(false);
  const [currentSections, setCurrentSections] = useState<[string, number][]>(Object.entries(sections));

  useEffect(() => {
    let result: [string, number][] = Object.entries(sections);
    if (showAll) {
      setCurrentSections(result);
    } else {
      setCurrentSections(result.slice(0, 4));
    }
  }, [showAll]);

  return (
    <>
      <Search
        query={query}
        setCurrentFilters={setCurrentFilters}
        currentFilters={currentFilters}
      />
      <div>
        {currentSections.map(([name, value], index) => (
          <CheckBox
            key={index}
            name={name}
            count={value}
            query={query}
            setCurrentFilters={setCurrentFilters}
            currentFilters={currentFilters}
          />
        ))}
        <button
          type="button"
          className={styles.show}
          onClick={() => setShowAll(!showAll)}
        >
          Показать все {showAll ? "▼" : "▲"}
        </button>
      </div>
    </>
  );
};

export default FilterSections;
