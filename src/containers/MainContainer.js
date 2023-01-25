import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import productsData from "../data/productsData";
import Basket from "../components/Basket";
import ShowProduct from "../components/ShowProduct";
import useBasket from "../custom_hooks/useBasket";

const MainContainer = () => {
  const [products, setProducts] = useState(productsData);
  const { lineItems, addToBasket, removeFromBasket, getBasketTotal } = useBasket()

  const getProductForId = (productId) => {
    return products.find((product) => product.id === productId);
  };

  const total = getBasketTotal()

  const basketItems = lineItems.map((lineItem) => ({
    product: getProductForId(lineItem.productId),
    quantity: lineItem.quantity,
  }))

  return (
    <Router>
      <Header noOfBasketItems={total} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductsList products={products} addToBasket={addToBasket} />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              items={basketItems}
              removeFromBasket={removeFromBasket}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ShowProduct
              getProductForId={getProductForId}
              addToBasket={addToBasket}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MainContainer;
