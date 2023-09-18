import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, tag, productId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [qty, setQty] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const addToCartHandler = () => {
    dispatch(addToCart(productId, qty));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const handleQtyChange = (e) => {
    setQty(Number(e.target.value));
  };

  let id_tag = tag;

  const getProductCartQty = () => {
    const cartItem = cartItems.find((item) => item.product === productId);
    return cartItem ? cartItem.qty : null;
  };

  return (
    <div className="product">
      <Link to={`/product/${productId}`} className="info__name">
        <img src={imageUrl} alt={name} className='product__image' />
      </Link>

      <div className="product__info">
        <p className="info__name">
          <Link to={`/product/${productId}`} className="info__name">
            {name}
          </Link>
        </p>

        <div className="product__qty">
          <label htmlFor="qty">Qty:</label>
          <select id="qty" value={qty} onChange={handleQtyChange}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            {/* Add more predefined quantity options as needed */}
          </select>
        </div>

        {getProductCartQty() === null ? (
          <p className="not-in-cart">Ej lagts till</p>
        ) : null}

        <button className="info__button" onClick={addToCartHandler}>
          Lägg till
        </button>

        {showMessage && <span className="message">Tillagd</span>}
      </div>
    </div>
  );
};

export default Product;
