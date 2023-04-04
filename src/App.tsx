import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actions as actionsGoods } from "./store/goodsSlice";
import { actions } from "./store/cartSlice";
import { Cart, Store } from "./types/store";
import useSortMethod from "./hooks/UseSortMethod";
import db from "../db.json";
import useFilters from "./hooks/UseFilters";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  const { sortMethod } = useSelector((state: Store) => state.goods);
  const { filters } = useSelector((state: Store) => state);
  console.log(filters)

  useEffect(() => {
    dispatch(actionsGoods.addAllItems(db));
    dispatch(actionsGoods.addCurrentItems());
    const currentCart = localStorage.getItem("cart");
    if (currentCart) {
      const cart: Cart = JSON.parse(currentCart);
      dispatch(actions.addItems(cart));
    }
  }, [dispatch]);

  useEffect(() => {
    const { items } = db;
    const sortItems = useSortMethod(sortMethod, items);
    dispatch(actionsGoods.addAllItems({ items: sortItems }));
    dispatch(actionsGoods.addCurrentItems());
  }, [sortMethod]);

  useEffect(() => {
    const { items } = db;
    const sortItems = useFilters(filters, items);
    dispatch(actionsGoods.addAllItems({ items: sortItems }));
    dispatch(actionsGoods.addCurrentItems());
  }, [filters]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalog/:id" element={<ProductCardPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
};

export default App;
