import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Basketlist = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  background-color: lightgrey;
  color: black;
  box-shadow: 4px 4px 4px 4px grey;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  margin: 5px;
  border: 2px solid grey;
  border-radius: 8px;
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
        <Button onClick={() => removeItem(item.product.id)}>Remove one</Button>
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
