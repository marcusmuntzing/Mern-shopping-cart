import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import './CartScreen.css';



// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart, resetCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const form = useRef();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };


  const sendEmail = (e) => {
    e.preventDefault();
  
    const orderList = cartItems
      .map((item) => {
        return `${item.name}, ${item.qty}`;
      })
      .join("\n");
  
    const templateParams = {
      order: orderList,
    };
  
    emailjs
      .send(
        "service_cjo04r5",
        "template_8ts4djn",
        templateParams,
        "22bzCBQjuAsOIj1Yh"
      )
      .then((result) => {
        console.log(result.text);
        dispatch(resetCart()); 
        alert("Beställningslistan har skickats");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Order</h2>

          {cartItems.length === 0 ? (
            <div>
              Du har inte lagt till några artiklar i beställningen. <br />{" "}
              <Link to="/">Gå tillbaka</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div>
            <p>Subtotal ({getCartCount()}) items</p>
          </div>
          <div>
            <form ref={form}>
              <button onClick={sendEmail}>Skicka Beställningslista</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
