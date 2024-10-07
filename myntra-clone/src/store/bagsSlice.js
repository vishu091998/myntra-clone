import { createSlice } from '@reduxjs/toolkit'

const bagsSlice = createSlice({
  name: 'bag',
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload)
    },
    removefromBag: (state, action) => {
      return state.filter(i => i != action.payload)
    }
  }
})

export const bagsAction = bagsSlice.actions
export default bagsSlice
