import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import test2Slice from './anotherTestSlice'

const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    test2: test2Slice.reducer
  }
})

export default store
