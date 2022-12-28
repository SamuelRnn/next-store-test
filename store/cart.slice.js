import { createSlice } from "@reduxjs/toolkit"

const initialState = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    deleteItem: (state, action) => {
      const i = state.findIndex(item => action.payload === item.id)
      state.splice(i, 1)
    }
  }
})
export const { addItem, deleteItem } = cartSlice.actions
export default cartSlice.reducer