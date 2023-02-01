import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'filter',
  initialState: {
    categoryId: 0,
    sort: {
      name: 'по популярности',
      sortProperty: 'rating',
    }
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSort: (state, action) => {
      console.log('action.payload: ', action.payload)
      state.sort = action.payload
    }
  }
})

export const { setCategoryId, setSort } = counterSlice.actions

export default counterSlice.reducer