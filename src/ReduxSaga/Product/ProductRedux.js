import { createSlice } from '@reduxjs/toolkit'

const initialState = {
}

const productRedux = createSlice({
  name: 'productRedux',
  initialState,
  reducers: {
    getTest: (state) => {
        console.log('vao redux')
    }
  }
})

export const ProductActions = productRedux.actions

export default productRedux.reducer