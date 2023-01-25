import { useParams } from "react-router-dom";
import Product from "./Product";
import StyledButton from "./StyledButton";

const ShowProduct = ({ getProductForId, addToBasket }) => {
  const { id } = useParams();
  const product = getProductForId(Number(id));
  return (
    <>
      <h3>{product.brand}</h3>
      <Product product={product} addToBasket={addToBasket} />
      <StyledButton onClick={() => addToBasket(product.id)}>Add To Basket</StyledButton>

    </>
  );
};

export default ShowProduct;
