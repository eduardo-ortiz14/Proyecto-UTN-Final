import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
      <div className="cart-container">
          <h2>Carrito</h2>
          <ul>
              {cartItems.map((item) => (
                  <li key={item.id}>
                      <div className="cart-item-details">
                          <span className="cart-item-title">{item.title}</span> - ${item.price}
                      </div>
                      <div className="cart-item-action">
                          <button className="remove-button" onClick={() => onRemoveFromCart(item.id)}>Eliminar</button>
                      </div>
                  </li>
              ))}
          </ul>
          <p className="cart-total">Total: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</p>
          <div className="button-container">
    <Link to="/">
        <button className="cart-button">Volver a la página inicial</button>
    </Link>
</div>

      </div>
  );
}

export default Cart;
