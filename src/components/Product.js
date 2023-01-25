import React from "react";
import styled from "styled-components";
import ItemImage from "./ItemImage";
import { Link } from "react-router-dom";

const StockItem = styled.div`
  margin: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ItemPara = styled.p`
  margin: 5px;
`;

const Item = ({ product }) => {
  return (
    <>
      <StockItem>
        <ItemImage item={product} alt="product" />
        <Link to={`/products/${product.id}`}>
          <p>{product.name}</p>
        </Link>
        <p>£{product.price}</p>
      </StockItem>
    </>
  );
};

export default Item;
