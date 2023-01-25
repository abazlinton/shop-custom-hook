import React from "react";
import styled from "styled-components";
import Product from "./Product";
import StyledButton from "./StyledButton";

const Basketlist = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  background-color: lightgrey;
  color: black;
  box-shadow: 4px 4px 4px 4px grey;
`;

const Basket = ({ items, removeFromBasket }) => {
  const removeItem = (id) => {
    removeFromBasket(id);
  };

  const basketComponents = items.map((item, index) => {
    return (
      <li key={item.product.id}>
        <hr />
        <span>
          <Product product={item.product} />
          <h3>Quantity: {item.quantity}</h3>
        </span>
        <StyledButton onClick={() => removeItem(item.product.id)}>Remove one</StyledButton>
      </li>
    );
  });

  const total = items.reduce(
    (subTotal, item) => (subTotal += item.product.price * item.quantity),
    0
  );

  return (
    <Basketlist>
      <h2>Your items: </h2>
      <h3>Total: £{total}</h3>
      {items.length > 0 ? <ul>{basketComponents}</ul> : <p>Basket Is Empty</p>}
    </Basketlist>
  );
};

export default Basket;
