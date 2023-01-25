import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 8px;
`;

const ProductsList = ({ products, addToBasket }) => {
  const productsComponents = products.map((product) => (
    <article key={product.id}>
      <Product product={product} addToBasket={addToBasket} />
      <Button onClick={() => addToBasket(product.id)}>Add To Basket</Button>
    </article>
  ));

  return <ProductList>{productsComponents}</ProductList>;
};

export default ProductsList;
