import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './HomeScreen.css';


// Components
import Product from '../components/Product';
import Searchbar from '../components/Searchbar';

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


const HomeScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId, 1));
  };

  // Define and filter products based on the current step's tag
  const filteredProducts = products.filter((product) => {
    switch (currentStep) {
      case 1:
        return product.tag === 'Skopglass';
      case 2:
        return product.tag === 'Pinnglass';
      case 3:
        return product.tag === 'Övrigt';
      default:
        return false;
    }
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className='header'>Skopglass</h2>
            <div className='step-content'>
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
          </>
        );
      case 2:
        return (
          <>
            <h2 className='header'>Pinnglass</h2>
            <div className='step-content'>
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
          </>
        );
      case 3:
        return (
          <>
            <h2 className='header'>Övrigt</h2>
            <div className='step-content'>
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
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='homescreen'>
      <div className={`step-menu ${currentStep === 1 ? 'active' : ''}`}>
        <div
          className={`step ${currentStep === 1 ? 'active' : ''}`}
          onClick={() => setCurrentStep(1)}
        >
          5-litare
        </div>
        <div
          className={`step ${currentStep === 2 ? 'active' : ''}`}
          onClick={() => setCurrentStep(2)}
        >
          Pinnglass
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => setCurrentStep(3)}
        >
          Övrigt
        </div>
      </div>

      <div className='step-content-container'>{renderStepContent()}</div>

      <div className='step-buttons-container'>
        <div className='step-buttons'>
          {currentStep === 1 && <button onClick={nextStep}>Pinnglass</button>}

          {currentStep === 2 && <button onClick={prevStep}>Skopglass</button>}

          {currentStep === 2 && <button onClick={nextStep}>Övrigt</button>}

          {currentStep === 3 && <button onClick={prevStep}>Pinnglass</button>}

          {currentStep === 3 && (
            <Link to={`/cart`}>
              <button>Summering</button>
            </Link>
          )}
        </div>
      </div>
      <div>
        <Searchbar/>  
      </div>
    </div>
  );
};

export default HomeScreen;
