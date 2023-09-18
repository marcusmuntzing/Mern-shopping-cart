import * as actionTypes from '../constants/cartConstants';

const cart = localStorage.getItem("cartItems");
const initialState = cart ? { cartItems: JSON.parse(cart) } : { cartItems: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        const updatedCartItems = [...state.cartItems, item];
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case actionTypes.CART_RESET:
      localStorage.removeItem("cartItems");
      
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
