import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../src/customer/components/config/config";

const initialState = {
  cart: null,
  cartItems: [],
  isLoading: false,
  error: "",
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data, thunkAPI) => {
    try {
      // console.log(data);
      const cart = await api.post(`/api/v1/carts`, data);

      // console.log("Successfully", cart.data.data.cart.cartItems);

      return cart.data.data.cart.cartItems;
    } catch (err) {
      // console.log(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
//  update Cart Item
export const updateCartItem = createAsyncThunk(
  "cart/updateCart",
  async (reqData, thunkAPI) => {
    // console.log("Given Data" + reqData);
    try {
      const cartItem = await api.put(
        `/api/v1/cartItems/${reqData.cartItemId}`,
        reqData.data
      );
      // console.log("Updated" + cartItem.data.data);
      return cartItem.data.data;
    } catch (err) {
      // console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
export const removeCartItem = createAsyncThunk(
  "cart/removeFromCart",
  async (cartItemId, thunkAPI) => {
    try {
      await api.delete(`/api/v1/cartItems/${cartItemId}`);

      // console.log(cartItem, cartItem?.cart.cartItems[0]._id);

      return cartItemId;
    } catch (err) {
      // console.log(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const carts = await api.get(`/api/v1/carts`);

    // console.log(carts.data.data);
    return carts.data.data;
  } catch (err) {
    // console.log(err.response.data.message);
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("Added In", state.cartItems);
        state.cartItems = action.payload;
      })
      //    Update Cart Item
      .addCase(updateCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //    For Updating Cart Item
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        //   id which wil be matched will be upadted one
        // state.cartItems = state.cartItems.map((item) =>
        //   item._id === action.payload._id ? action.payload : item
        // );
        state.cartItems = action.payload;
      })
      //   For removing Cart Item
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //  action.payload is id of cartItem
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false;

        state.cartItems = state.cartItems?.filter(
          (item) => item._id !== action.payload
        );
      })

      //  For get cart Item
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //  action.payload will contain the whole cart array
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload.cart.cartItems;
        state.cart = action.payload;
      }),
});

export default cartSlice.reducer;
