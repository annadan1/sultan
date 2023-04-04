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

interface Goods {
  currentGoods: Item[];
  allGoods: Item[];
  page: number;
}

export interface Store {
  goods: Goods;
  cart: Cart;
}
