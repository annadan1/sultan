export interface Item {
  barcode: string;
  brand: string;
  category: string[];
  description: string;
  id: string;
  img: string;
  manufacturer: string;
  name: string;
  price: string;
  promo: string;
  size: string;
  sizetype: string;
  inStock: number;
  count?: number | undefined;
}

export interface Cart {
  totalCount: number;
  totalPrice: number;
  items: Item[];
}

export interface Goods {
  currentGoods: Item[];
  allGoods: Item[];
  pages: number;
  currentPage: number;
  limit: number;
  sortMethod: string;
}

export interface Filters {
  brand: Array<string>;
  manufacturer: Array<string>;
  name: string;
  categories: Array<string>;
  minPrice: number;
  maxPrice: number;
}

export interface Store {
  goods: Goods;
  cart: Cart;
  filters: Filters;
}
