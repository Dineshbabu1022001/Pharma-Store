import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartProduct } from "../../types/product";

type CartState = {
  items: CartProduct[];
  total: number;  
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartProduct, "quantity">>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);      
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });        
      }
      
    },

    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    increaseQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },

    buyItem: (state) => {
      state.items = [];
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  buyItem,
} = cartSlice.actions;

export default cartSlice.reducer;