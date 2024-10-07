import { configureStore } from '@reduxjs/toolkit'
import bagsSlice from './bagsSlice'
import itemsSlice from './itemsSlice'


const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    bag: bagsSlice.reducer
  }
});

export default myntraStore
