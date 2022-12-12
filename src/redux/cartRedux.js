import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //this is cart quantity
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //this qty is from product page
    },
    deleteProduct: (state, action) => {
      state.products.splice(action.payload.index, 1);
      // state.products = state.products.filter(
      //   (product) => product.id !== action.payload.id
      // );
      state.quantity = state.products.length;
      state.total -= action.payload.price * action.payload.quantity;
    },
    clearCart: (state, action) => {
      state.quantity = 0; //this is cart quantity
      state.products = [];
      state.total = 0; //this qty is from product page
    },
  },
});

export const { addProduct, deleteProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
