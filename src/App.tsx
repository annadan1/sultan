import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { actions as actionsGoods } from "./store/goodsSlice";
import { actions } from "./store/cartSlice";
import { Cart, Item } from "./types/store";
import db from "../db.json";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(actionsGoods.addAllItems(db));
    dispatch(actionsGoods.addCurrentItems(db));
    const currentCart = localStorage.getItem("cart");
    if (currentCart) {
      const cart: Cart = JSON.parse(currentCart);
      dispatch(actions.addItems(cart));
    }
  }, [dispatch]);

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
