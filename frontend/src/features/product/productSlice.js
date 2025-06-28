import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('http://localhost:8000/api/products');
  return await res.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], 
    status: 'idle',
    categories: [],
    search: '',
    selectedCategory: 'All',
  },
  reducers: {
    
    setSearch(state, action) {
      state.search = action.payload;
    },
    
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'; 
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      // When the products are fetched successfully
      state.items = action.payload; 
      state.categories = ['All', ...new Set(action.payload.map(p => p.category))]; 
      state.status = 'succeeded'; 
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      
      state.status = 'failed';
    });
  },
});

export const { setSearch, setCategory } = productsSlice.actions;
export default productsSlice.reducer;
