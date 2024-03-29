import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  productHomePage: [],
  productWithOption: [],
  productDetail: {},
  productCompare: [],
  productByCate: []
}

const productRedux = createSlice({
  name: 'productRedux',
  initialState,
  reducers: {
    getAllCategoryRequest: (state, action) => { },
    getAllCategorySuccess: (state, action) => {
      state.category = action.payload
    },
    getAllCategoryFailed: (state, action) => { },

    getProductHomePageRequest: (state, action) => { },
    getProductHomePageSuccess: (state, action) => {
      state.productHomePage = action.payload
    },
    getProductHomePageFailed: (state, action) => { },

    getProductWithOptionRequest: (state, action) => { },
    getProductWithOptionSuccess: (state, action) => { },
    getProductWithOptionFailed: (state, action) => { },

    getProductDetailRequest: (state, action) => { },
    getProductDetailSuccess: (state, action) => {
      state.productDetail = action.payload
    },
    getProductDetailFailed: (state, action) => { },

    getProductCompareRequest: (state, action) => { },
    getProductCompareSuccess: (state, action) => { },
    getProductCompareFailed: (state, action) => { },

    buyProductRequest: (state, action) => {},
    buyProductSuccess: (state, action) => {},
    buyProductFailed: (state, action) => {},
    
    getProductByCateRequest: (state, action) => {},
    getProductByCateSuccess: (state, action) => {
      state.productByCate = action.payload
    },
    getProductByCateFailed: (state, action) => {},

    searchProductRequest: (state, action) => {},

    getSuggestSearchRequest: (state, action) => {},

  }
})

export const productSelector = (state) => state.product
export const ProductActions = productRedux.actions

export default productRedux.reducer