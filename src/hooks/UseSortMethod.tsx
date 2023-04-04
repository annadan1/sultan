import { Item } from "../types/store";

interface SortMethods {
  [key: string]: any;
}

const sortMethods: SortMethods = {
  name_asc: (items: Array<Item>) =>
    items.sort((a, b) => (a.name > b.name ? 1 : -1)),
  name_desc: (items: Array<Item>) =>
    items.sort((a, b) => (b.name > a.name ? 1 : -1)),
  price_asc: (items: Array<Item>) =>
    items.sort((a, b): number => Number(a.price) - Number(b.price)),
  price_desc: (items: Array<Item>) =>
    items.sort((a, b): number => Number(b.price) - Number(a.price)),
};

const useSortMethod = (key: string, items: Array<Item>) => {
  return sortMethods[key]([...items]);
};

export default useSortMethod;
