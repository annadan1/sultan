import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "./ProductCard/ProductCard";
import { Store, Item } from "../../types/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductCardPage: React.FC = () => {
  const allGoods = useSelector((state: Store) => state.goods.allGoods);
  const param = useParams();

  const currentItem: Item = allGoods.find((item) => item.id === param.id)!;

  return (
    <>
      <Header />
      <ProductCard item={currentItem} />
      <Footer />
    </>
  );
};

export default ProductCardPage;
