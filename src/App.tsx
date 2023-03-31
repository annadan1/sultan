import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductCardPage from "./pages/ProductCardPage/ProductCardPage";
import NotfoundPage from "./pages/NotfoundPage/NotfoundPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllGoods, fetchCurrentGoods } from "./store/goodsSlice";
import { actions } from "./store/cartSlice";
import { Cart } from "./types/store";

interface MyCart {
  cart: Cart;
}

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllGoods({}));
    dispatch(fetchCurrentGoods({ _limit: 9 }));
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
