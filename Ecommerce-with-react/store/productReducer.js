import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../src/customer/components/config/config";
const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
  deleted: "",
  added: "",
};

export const getAllProducts = createAsyncThunk(
  "product/getAll",
  async (reqData, thunkAPI) => {
    const {
      colors,
      sizes,
      minPrice,
      maxPrice,
      category,
      stock,
      sort,
      pageNumber,
      pageSize,
    } = reqData;

    try {
      const products = await api.get(
        `/api/v1/products?colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      // console.log(products.data.data);

      return products.data.data;
    } catch (err) {
      // console.log(err);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getById",
  async (id, thunkAPI) => {
    try {
      const product = await api.get(`/api/v1/products/${id}`);

      // console.log(product.data.data);
      return product.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id, thunkAPI) => {
    try {
      // console.log(id);
      const product = await api.delete(`/api/v1/admin/products/${id}`);
      // console.log(product.data.data);
      return product.data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

//        Creating Product for Admin

export const createProduct = createAsyncThunk(
  "product/create",
  async (data, thunkAPI) => {
    try {
      const products = await api.post(`/api/v1/admin/products`, data);

      return products.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.deleted = "";
      state.added = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.deleted = "";
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //  get Product By Id
    builder.addCase(getProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //  for delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deleted = action.payload;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.added = action.payload;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
export const { reset } = productSlice.actions;
