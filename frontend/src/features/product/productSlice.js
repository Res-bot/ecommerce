import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch products from the backend API
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('http://localhost:8000/api/products');
  return await res.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Initialize items as an empty array to avoid undefined
    status: 'idle',
    categories: [],
    search: '',
    selectedCategory: 'All',
  },
  reducers: {
    // Set search term in the state
    setSearch(state, action) {
      state.search = action.payload;
    },
    // Set selected category in the state
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'; // Set status to loading during fetch
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // When the products are fetched successfully
      state.items = action.payload; // Set items with the fetched data
      state.categories = ['All', ...new Set(action.payload.map(p => p.category))]; // Get unique categories
      state.status = 'succeeded'; // Update status to succeeded
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      // Handle failure case
      state.status = 'failed';
    });
  },
});

export const { setSearch, setCategory } = productsSlice.actions;
export default productsSlice.reducer;
