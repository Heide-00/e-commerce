const initialState = {
  cart: [],        
  payment: {},      
  address: {}       
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      };

    case 'UPDATE_CART_ITEM_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.newCount }
            : item
        )
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload
        )
      };

    case 'SET_PAYMENT':
      return {
        ...state,
        payment: action.payload
      };

    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.payload
      };

    default:
      return state;
  }
}