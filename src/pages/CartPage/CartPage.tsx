import { useSelector } from "react-redux";
import Cart from "../../components/Cart/FullCart/FullCart";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Store } from "../../types/store";
import { useState } from "react";

const CartPage = () => {
  const cart = useSelector((state: Store) => state.cart);
  const [isBought, setBought] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <Cart cart={cart} setBought={setBought} isBought={isBought}/>
      <Footer />
    </div>
  );
};

export default CartPage;
