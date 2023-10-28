import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../src/customer/components/config/config";

const initialState = {
  orders: [],
  order: null,
  isLoading: false,
  error: "",
  deleted: "",
};

export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (data, thunkAPI) => {
    try {
      const order = await api.post(`/api/v1/orders`, data.address);

      //  on creating navigating

      // console.log("Order" + order.data);
      return order.data;
    } catch (err) {
      console.log(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (orderId, thunkAPI) => {
    try {
      const order = await api.get(`/api/v1/orders/${orderId}`);

      return order.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getOrderHistory = createAsyncThunk(
  "order/orderHistory",
  async (_, thunkAPI) => {
    try {
      const order = await api.get(`/api/v1/orders/account/userOrderHistory`);
      // console.log(order.data.data);
      return order.data.data.orders;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

//  get ALL Orders
export const getAllOrders = createAsyncThunk(
  "order/getAllOrders",
  async (_, thunkAPI) => {
    const jwt = localStorage.getItem("jwt");

    try {
      const orders = await api.get(`/api/v1/admin/orders`, {
        headers: {
          Authorization: jwt ? `Bearer ${jwt}` : "",
          "Content-Type": "application/json",
        },
      });
      // console.log(orders.data);
      return orders.data.data.orders;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

//  Delete Order for Admin

export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async (orderId, thunkAPI) => {
    try {
      const order = await api.delete(`api/v1/admin/orders/${orderId}`);
      // console.log(order.data.data.order);
      return order.data.data.order;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.deleted = "";
      state.order = null;
      state.orders = [];
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //     get order
      .addCase(getOrderById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //    get Order History
      .addCase(getOrderHistory.pending, (state) => {
        state.isLoading = true;
      })
      //     order history will be in orders array
      .addCase(getOrderHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getOrderHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //   For deleting order for admin
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleted = action.payload;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default orderSlice.reducer;

export const { reset } = orderSlice.actions;
