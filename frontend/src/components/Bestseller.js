import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Bestseller.css';


// Components
import Product from '../components/Product';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Bestseller = ({ addToCartHandler }) => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const bestsellerProducts = products.filter((product) =>
    product.name.includes('Gammaldags Vanilj') || 
    product.name.includes('Godismonster') || 
    product.name.includes('Romrussin') || 
    product.name.includes('Choklad') || 
    product.name.includes('Jordgubb')
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1
    },
    mobile: {
      breakpoint: { max: 852, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1
    },
  };

  return (
    <div className='bestseller'>
      <h2>TOP SELLERS</h2>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Carousel responsive={responsive}>
          {bestsellerProducts.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              addToCartHandler={addToCartHandler}
            />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Bestseller;
