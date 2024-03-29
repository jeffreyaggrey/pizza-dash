import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // Payload is a new item to add to the cart
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      // Payload is an item to remove from the cart
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // Payload is pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // Payload is pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;

      // Remove the item if the quantity is 0
      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

// Get the quantity of a specific item in the cart
export const getItemQuantity = (id) => (state) => {
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item ? item.quantity : 0;
};
