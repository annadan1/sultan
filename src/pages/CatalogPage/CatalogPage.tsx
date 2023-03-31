import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GoodsBlock from "../../components/GoodsBlock/GoodsBlock";
import { useSelector } from "react-redux";
import { Store } from "../../types/store";

const MainPage = () => {
  const store = useSelector((state) => state) as Store;

  return (
    <>
      <Header />
      <GoodsBlock store={store} />
      <Footer />
    </>
  );
};

export default MainPage;
