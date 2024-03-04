import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId,
      );
    },
    increaseItemQuantity(state, action) {
      // Payload is pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      item.quantity--;
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
