
import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchIds, fetchProducts } from './ProductActions';

const initialState = {
  ids: [],
  products: [],
  status: 'idle',
  error: null,
  searchItem:'',
  // currentProducts:[]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchItem:(state,action) => {
      state.searchItem = action.payload;
    },
    // setCurrentProducts:(state,action) => {
    //   state.currentProducts = action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIds.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.ids = action.payload;
      })
      .addCase(fetchIds.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {setSearchItem} = productsSlice.actions;

// Selector to filter products based on searchTerm
export const selectFilteredProducts = createSelector(
  state => state.products.products,
  state => state.products.searchItem,
  (products, searchItem) => {
    return products.filter(product =>
      Object.values(product).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(searchItem.toLowerCase()) ||
          typeof value === 'number' && value.toString().includes(searchItem)
      )
    );
  }
);

export default productsSlice.reducer;
