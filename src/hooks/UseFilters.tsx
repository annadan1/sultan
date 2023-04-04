import { Filters, Item } from "../types/store";

const useFilters = (filters: Filters, array: Array<Item>) => {
  let result = array;
  if (filters.categories.length > 0) {
    result = result.filter((item) => {
      let isContains = false;
      filters.categories.forEach((type) => {
        if (item.category.includes(type)) {
          isContains = true;
        }
      });
      return isContains;
    });
  }
  if (filters.minPrice) {
    result = result.filter(
      (item) => Number(item.price) > Number(filters.minPrice)
    );
  }

  if (filters.maxPrice) {
    result = result.filter(
      (item) => Number(item.price) < Number(filters.maxPrice)
    );
  }

  if (filters.manufacturer && filters.manufacturer.length !== 0) {
    result = result.filter((item) => {
      let isContains = false;
      filters.manufacturer.forEach((manufacturer) =>
        manufacturer === item.manufacturer ? (isContains = true) : null
      );
      return isContains;
    });
  }

  if (filters.brand && filters.brand.length !== 0) {
    result = result.filter((item) => {
      let isContains = false;
      filters.brand.forEach((brand) =>
      brand === item.brand ? (isContains = true) : null
      );
      return isContains;
    });
  }

  return result;
};

export default useFilters;
