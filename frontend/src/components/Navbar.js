import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = ({click}) =>{
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };


    return (
        <nav className="navbar">
            {/*Logo*/}
            <div className="navbar__logo">
                <Link to="/">
                <img src="/images/pir_loggo.png" alt="Restaurang PIR" />
                </Link>      
            </div>


            {/*Links*/}
            <ul className="navbar__links">
                <li className='home-tag'>
                    <Link to="/" className='home__link'>
                        Produkter
                    </Link>
                </li>
                
                
                <li>
                    <Link to="/cart" className='cart__link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Beställning <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>

                
            </ul>

            {/*Hamburger*/}
            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>

            </div>

        </nav>
    )

}

export default Navbar
