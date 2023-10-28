import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../src/customer/components/config/config";
// import { initialState } from "./store";

const initialState = {
  user: null,
  isAuth: false,
  error: "",
  isLoading: false,
};
//   As Async function so create async thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/users/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // if (response.status < 200 || response.status >= 300) {
      //   console.log(response);
      //   return thunkAPI.rejectWithValue(response);
      // }

      const user = await response.json();
      if (user.status === "error" || user.status === "fail") {
        throw new Error(user.message);
      }

      // console.log(user);

      localStorage.setItem("jwt", JSON.stringify(user.token));
      // console.log(user);
      return user;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(`${API_URL}/api/v1/users/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // if (response.status < 200 || response.status >= 300) {
      //   console.log(response);
      //   return thunkAPI.rejectWithValue("Something went wrong");
      // }
      const user = await response.json();
      //  this will be return in payload
      // console.log(user);
      if (user.status === "error" || user.status === "fail") {
        throw new Error(user.message);
      }
      localStorage.setItem("jwt", JSON.stringify(user.token));
      return user;
    } catch (err) {
      console.log(err);
      //  this will be return in payload
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (jwt, thunkAPI) => {
    // console.log("From get" + jwt);
    // const token = JSON.parse(jwt);
    try {
      if (!jwt) {
        // console.log(jwt);
        // Return a specific value to indicate that the JWT is not present
        return null;
      }
      // console.log(jwt);
      const response = await fetch(`${API_URL}/api/v1/users/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      // console.log(response);

      if (!response.ok) {
        return thunkAPI.rejectWithValue(response.message);
      }
      const user = await response.json();

      return user;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await localStorage.removeItem("jwt");
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  //    It is used for not promises for promises use createAsyncThunk
  reducers: {
    reset: (state) => {
      state.error = "";
      state.isAuth = false;
      state.isLoading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;

        state.isAuth = true;
        //  action .payload is the whole object
        state.user = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //       //            Now for Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;

        state.isAuth = true;
        state.user = action.payload.data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;

        // console.log(action.payload + "value");
        //    I don't want to show local host so
        state.error = action.payload.stack.split("\n")[0];
        console.log(state.error);
      })
      //  Now for get User
      .addCase(getUser.fulfilled, (state, action) => {
        // console.log("From Get User" + action.payload.data);
        if (action.payload) {
          state.user = action.payload?.data;
          state.isAuth = true;
        } else {
          state.user = null;
          state.isAuth = false;
        }
        state.isLoading = false;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuth = false;
      }),
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
