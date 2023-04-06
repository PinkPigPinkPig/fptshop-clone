import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: [],
  productHomePage: [],
  productWithOption: [],
  productDetail: {},
  productCompare: []
}

const productRedux = createSlice({
  name: 'productRedux',
  initialState,
  reducers: {
    getSearchProductRequest: (state, action) => { },
    getSearchProductSuccess: (state, action) => { },
    getSearchProductFailed: (state, action) => { },

    getAllCategoryRequest: (state, action) => { },
    getAllCategorySuccess: (state, action) => { },
    getAllCategoryFailed: (state, action) => { },

    getProductHomePageRequest: (state, action) => { },
    getProductHomePageSuccess: (state, action) => { },
    getProductHomePageFailed: (state, action) => { },

    getProductWithOptionRequest: (state, action) => { },
    getProductWithOptionSuccess: (state, action) => { },
    getProductWithOptionFailed: (state, action) => { },

    getProductDetailRequest: (state, action) => { },
    getProductDetailSuccess: (state, action) => { },
    getProductDetailFailed: (state, action) => { },

    getProductCompareRequest: (state, action) => { },
    getProductCompareSuccess: (state, action) => { },
    getProductCompareFailed: (state, action) => { },
  }
})

export const ProductActions = productRedux.actions

export default productRedux.reducer