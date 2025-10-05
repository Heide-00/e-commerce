// Sepeti doğrudan set etme
export const setCart = (cartItems) => ({
  type: 'SET_CART',
  payload: cartItems, // örnek: [{ count: 1, product: { id: "1235", ... } }]
});

// Ödeme bilgisi set etme
export const setPayment = (paymentInfo) => ({
  type: 'SET_PAYMENT',
  payload: paymentInfo,
});

// Adres bilgisi set etme
export const setAddress = (addressInfo) => ({
  type: 'SET_ADDRESS',
  payload: addressInfo,
});

// Sepetteki ürünün adetini güncelleme
export const updateCartItemCount = (productId, newCount) => ({
  type: 'UPDATE_CART_ITEM_COUNT',
  payload: { productId, newCount },
});

// Sepetten ürün çıkarma
export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

// Sepete ürün ekleme (aynı ürün varsa count artırılır)
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

// Sepeti tamamen boşaltma
export const clearCart = () => ({
  type: 'CLEAR_CART',
});

// Sepetteki ürünün seçimini (checked) değiştirme
export const toggleCartItemChecked = (productId) => ({
  type: 'TOGGLE_CART_ITEM_CHECKED',
  payload: productId,
});

