import React from "react";
import Product from "./Product";
import styled from "styled-components";
import StyledButton from "./StyledButton";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProductsList = ({ products, addToBasket }) => {
  const productsComponents = products.map((product) => (
    <article key={product.id}>
      <Product product={product} addToBasket={addToBasket} />
      <StyledButton onClick={() => addToBasket(product.id)}>Add To Basket</StyledButton>
    </article>
  ));

  return <ProductList>{productsComponents}</ProductList>;
};

export default ProductsList;
