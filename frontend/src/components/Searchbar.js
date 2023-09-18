import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Searchbar.css';

// Components
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  const filteredProducts = products
    ? products.filter((product) => product.name.includes(searchTerm))
    : [];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId, 1));
  };

  return (
    <div className='search__div'>
      <input
        className='search__bar'
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <div className='dropdown'>
          {filteredProducts.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
