import { useState } from "react";

const useBasket = () => {

    const [lineItems, setLineItems] = useState([]);

    const getLineItemForProductId = (productId) => {
        return lineItems.find((lineItem) => lineItem.productId === productId);
    };

    const getBasketTotal = () => lineItems.reduce(
        (total, lineItem) => total + lineItem.quantity,
        0
    );

    const addToBasket = (productId) => {
        const existingLineItem = getLineItemForProductId(productId);
        if (existingLineItem) {
            const nextLineItems = lineItems.map((lineItem) => {
                return productId === lineItem.productId
                    ? {
                        productId: lineItem.productId,
                        quantity: lineItem.quantity + 1,
                    }
                    : lineItem;
            });
            setLineItems(nextLineItems);
        } else {
            setLineItems([...lineItems, { productId, quantity: 1 }]);
        }
    };

    const removeFromBasket = (productId) => {
        const nextLineItems = lineItems
            .map((lineItem) => {
                return lineItem.productId === productId
                    ? { ...lineItem, quantity: lineItem.quantity - 1 }
                    : lineItem;
            })
            .filter((lineItem) => lineItem.quantity > 0);
        setLineItems(nextLineItems);
    };

    return { addToBasket, removeFromBasket, getBasketTotal, lineItems }

}

export default useBasket