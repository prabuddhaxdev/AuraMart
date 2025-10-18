import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

// ✅ Fetch all filtered products
export const fetchAllFilteredProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ filterParams = {}, sortParams = "" }, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams({
        ...filterParams,
        sortBy: sortParams,
      }).toString();

      const result = await axios.get(
        `http://localhost:5000/api/shop/products/get?${query}`
      );

      return result.data; // Return API data directly
    } catch (error) {
      console.error("Error fetching products:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// ✅ Fetch single product details
export const fetchProductDetails = createAsyncThunk(
  "products/fetchProductDetails",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/shop/products/get/${id}`
      );
      return result.data;
    } catch (error) {
      console.error("Error fetching product details:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ fetchAllFilteredProducts
      .addCase(fetchAllFilteredProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // Directly assign the data returned from thunk
        state.productList = action.payload?.data || action.payload || [];
      })
      .addCase(fetchAllFilteredProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      })

      // ✅ fetchProductDetails
      .addCase(fetchProductDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload?.data || action.payload || null;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});

export const { setProductDetails } = shoppingProductSlice.actions;
export default shoppingProductSlice.reducer;
