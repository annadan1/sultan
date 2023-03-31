export interface Item {
  barcode: string;
  brand: string;
  category: [];
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
  count: number;
}

export interface Cart {
  totalCount: number;
  totalPrice: number;
  items: Array<Item>;
}

interface Goods {
  currentGoods: Item[];
  allGoods: Item[];
  page: number;
}

export interface Store {
  goods: Goods;
  cart: Cart;
}
