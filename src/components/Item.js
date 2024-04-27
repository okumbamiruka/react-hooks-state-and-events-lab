import React , { useState } from "react";

function Item({ name, category }) {
  // TODO: Add a className of "in-cart" to the <li> if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const itemClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";
  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
