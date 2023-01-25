import { useParams } from "react-router-dom";
import Product from "./Product";

const ShowProduct = ({ getProductForId, addToBasket }) => {
  const { id } = useParams();
  const product = getProductForId(Number(id));
  return (
    <>
      <h3>{product.brand}</h3>
      <Product product={product} addToBasket={addToBasket} />
    </>
  );
};

export default ShowProduct;
