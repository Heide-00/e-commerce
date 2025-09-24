export const setCart = (cartItems) => ({
  type: 'SET_CART',
  payload: cartItems, // örnek: [{ count: 1, product: { id: "1235", ... } }]
});

export const setPayment = (paymentInfo) => ({
  type: 'SET_PAYMENT',
  payload: paymentInfo,
});

export const setAddress = (addressInfo) => ({
  type: 'SET_ADDRESS',
  payload: addressInfo,
});

export const updateCartItemCount = (productId, newCount) => ({
  type: 'UPDATE_CART_ITEM_COUNT',
  payload: { productId, newCount },
});

export const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});
