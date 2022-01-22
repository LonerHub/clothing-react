export const addItemToCart = (cartItems, cartItemToaAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToaAdd.id
  );

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToaAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }

  return [...cartItems, { ...cartItemToaAdd, quantity: 1 }]
}